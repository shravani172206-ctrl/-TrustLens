class TrustReportResult:
    def __init__(
        self,
        ingredients,
        report
    ):
        self.ingredients = ingredients
        self.report = report

    def to_dict(self):
        return {
            "ingredients": self.ingredients,
            "report": self.report
        }