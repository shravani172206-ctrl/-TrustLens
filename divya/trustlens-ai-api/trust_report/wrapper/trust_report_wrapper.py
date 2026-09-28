from trust_report.wrapper.dto import TrustReportResult


class TrustReportWrapper:

    def generate(self, ingredients):

        # 1. ADD CALL TO YOUR FUNCTION HERE TO GENERATE TRUST REPORT
        # 2. REMOVE FOLLOWING HARDCODED TRUST REPORT JSON ONCE YOU HAVE COMPLETED STEP 1.
        report ={
                "overall_analysis": {
                    "overall_trust_score": 76,
                    "status": 0,
                    "overall_safety_adult": {
                        "score": 76,
                        "remark": "The combination is acceptable for adults but contains some ingredient-level concerns. Exact ingredient amounts would improve the assessment."
                    },
                    "overall_safety_child": {
                        "score": 73,
                        "remark": "The combination may be acceptable for children, but added sugar and sodium-related ingredients should be monitored because children have lower dietary requirements."
                    },
                    "overall_safety_pregnancy": {
                        "score": 76,
                        "remark": "The combination is generally acceptable during pregnancy, but overall nutritional quality and ingredient amounts should still be considered."
                    },
                    "overall_flags": [
                        "SODIUM_PRESENT_QUANTITY_UNKNOWN",
                        "ALLERGEN_PRESENT"
                    ],
                    "overall_remarks": "Overall, this product has moderate trust. It contains several nutritionally favourable or generally low-concern ingredients, but some ingredient-level concerns reduce the score. Because exact quantities are unavailable, the actual dietary impact cannot be determined.",
                    "key_concerns": [
                        "Contains sodium-related ingredients, but the exact amount is unknown and high sodium cannot be confirmed.",
                        "Contains ingredients that may be unsuitable for people with relevant food allergies or intolerances."
                    ],
                    "positive_aspects": [
                        "Contains higher-trust ingredients such as Milk solids, water, spices & condiments",
                        "Several ingredients have moderate to high individual trust scores.",
                        "No matched ingredient has an extremely low individual trust score."
                    ]
                },
                "individual_ingredients": [
                    {
                        "ingredient_name": "Milk solids",
                        "database_ingredient": "Milk",
                        "individual_trust_score": 9,
                        "ingredient_status": "",
                        "rationale": "Can provide protein, calcium and other nutrients.",
                        "adult_safety": {
                            "safe": "normal dietary amount",
                            "moderate": "individual dietary context",
                            "unhealthy_flag": "not_quantity_based unless allergy or intolerance"
                        },
                        "child_safety": {
                            "safe": "age-appropriate dietary amount",
                            "moderate": "individual dietary context",
                            "unhealthy_flag": "allergy or intolerance"
                        },
                        "pregnancy_safety": {
                            "safe": "normal dietary amount from safely processed milk",
                            "moderate": "individual dietary context",
                            "unhealthy_flag": "unpasteurized or unsafe product context"
                        },
                        "remarks": "Nutritionally favourable for people who tolerate dairy; milk itself is not required if equivalent nutrients come from other foods.",
                        "flags": [
                            "MILK_ALLERGEN"
                        ]
                    },
                    {
                        "ingredient_name": "water",
                        "database_ingredient": "Water",
                        "individual_trust_score": 10,
                        "ingredient_status": "",
                        "rationale": "Essential for hydration and normal body function.",
                        "adult_safety": {
                            "safe": "normal hydration intake",
                            "moderate": "individual hydration context",
                            "unhealthy_flag": "not ingredient-quantity-based"
                        },
                        "child_safety": {
                            "safe": "normal age-appropriate hydration",
                            "moderate": "individual hydration context",
                            "unhealthy_flag": "not ingredient-quantity-based"
                        },
                        "pregnancy_safety": {
                            "safe": "normal hydration intake",
                            "moderate": "individual hydration context",
                            "unhealthy_flag": "not ingredient-quantity-based"
                        },
                        "remarks": "Generally highly favourable in a food or beverage formulation.",
                        "flags": [
                            "ESSENTIAL"
                        ]
                    },
                    {
                        "ingredient_name": "iodised salt",
                        "database_ingredient": "Salt",
                        "individual_trust_score": 5,
                        "ingredient_status": "",
                        "rationale": "Sodium is essential, but excess intake is associated with raised blood pressure and other health concerns.",
                        "adult_safety": {
                            "safe": "0-5 g/day",
                            "moderate": "5-10 g/day",
                            "unhealthy_flag": ">10 g/day"
                        },
                        "child_safety": {
                            "safe": "0-2 g/day",
                            "moderate": "2-5 g/day",
                            "unhealthy_flag": ">5 g/day"
                        },
                        "pregnancy_safety": {
                            "safe": "0-5 g/day",
                            "moderate": "5-10 g/day",
                            "unhealthy_flag": ">10 g/day"
                        },
                        "remarks": "Essential in small amounts. The total sodium contribution from the entire diet should be considered, not only this ingredient.",
                        "flags": [
                            "ESSENTIAL_IN_SMALL_AMOUNTS",
                            "HIGH_SODIUM_QUANTITY_FLAG"
                        ]
                    },
                    {
                        "ingredient_name": "spices & condiments",
                        "database_ingredient": "Spices and Condiments",
                        "individual_trust_score": 8,
                        "ingredient_status": "",
                        "rationale": "Usually flavour ingredients and may contribute plant-derived compounds.",
                        "adult_safety": {
                            "safe": "normal culinary amount",
                            "moderate": "very high amount or unknown blend",
                            "unhealthy_flag": "allergen or excessive-sodium context"
                        },
                        "child_safety": {
                            "safe": "normal age-appropriate culinary amount",
                            "moderate": "strong spice or unknown blend",
                            "unhealthy_flag": "allergen or excessive-sodium context"
                        },
                        "pregnancy_safety": {
                            "safe": "normal culinary amount",
                            "moderate": "very high amount or unknown blend",
                            "unhealthy_flag": "specific ingredient-dependent"
                        },
                        "remarks": "Exact assessment depends on the specific spices, condiments and salt content.",
                        "flags": [
                            "INGREDIENT_GROUP",
                            "LIMITED_SPECITY"
                        ]
                    },
                    {
                        "ingredient_name": "stabilizer [460(i)]",
                        "database_ingredient": "Microcrystalline Cellulose",
                        "individual_trust_score": 7,
                        "ingredient_status": "",
                        "rationale": "Common cellulose-based texture or stabilizing ingredient.",
                        "adult_safety": {
                            "safe": "normal regulated food-use level",
                            "moderate": "high amount may affect digestive tolerance",
                            "unhealthy_flag": "not universal gram threshold"
                        },
                        "child_safety": {
                            "safe": "normal regulated food-use level",
                            "moderate": "high amount may affect digestive tolerance",
                            "unhealthy_flag": "not universal gram threshold"
                        },
                        "pregnancy_safety": {
                            "safe": "normal regulated food-use level",
                            "moderate": "high amount may affect digestive tolerance",
                            "unhealthy_flag": "not universal gram threshold"
                        },
                        "remarks": "Generally low concern as a food texture ingredient.",
                        "flags": [
                            "FOOD_ADDITIVE",
                            "CELLULOSE"
                        ]
                    }
                ],
                "unknown_ingredients": []
            }

        return TrustReportResult(
            ingredients=ingredients,
            report=report
        )