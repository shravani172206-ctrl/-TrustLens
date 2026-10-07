import json
import re

from rag import load_store, retrieve
from llm import generate
from analysis import calculate_overall_analysis


def extract_json(text):
    """
    Extract JSON from an LLM response even if it contains
    text like 'Here is the JSON output' or ```json fences.
    """

    
    text = re.sub(r"```json", "", text, flags=re.IGNORECASE)
    text = re.sub(r"```", "", text)

    
    start = text.find("{")
    end = text.rfind("}")

    if start == -1 or end == -1:
        raise ValueError("No JSON object found in LLM response.")

    json_text = text[start:end + 1]

    return json.loads(json_text)


def main():

    
    store = load_store()

    
    q = input("Enter ingredients separated by commas: ")

    
    ingredients = [
        ingredient.strip()
        for ingredient in q.split(",")
        if ingredient.strip()
    ]

    
    ctx = retrieve(store, ingredients)

    print("\nAnalyzing ingredients...\n")

    
    result = generate(ctx)

    
    try:
        data = extract_json(result)

    except (json.JSONDecodeError, ValueError) as e:
        print("\nERROR: Could not extract JSON from the LLM response.")
        print("Reason:", e)
        print("\nRaw LLM response:\n")
        print(result)
        return

    
    individual_ingredients = data.get(
        "individual_ingredients",
        []
    )

    
    unknown_ingredients = data.get(
        "unknown_ingredients",
        []
    )

    
    print("\nCalculating overall TrustLens analysis...\n")

    overall_analysis = calculate_overall_analysis(
        individual_ingredients,
        unknown_ingredients
    )



    final_result = {
        "overall_analysis": overall_analysis,
        "individual_ingredients": individual_ingredients,
        "unknown_ingredients": unknown_ingredients
    }

    
    print("FINAL TRUSTLENS RESULT:\n")

    print(
        json.dumps(
            final_result,
            indent=2,
            ensure_ascii=False
        )
    )


if __name__ == "__main__":
    main()