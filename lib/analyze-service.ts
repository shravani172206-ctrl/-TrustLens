export interface AnalyzeRequest {
  productName: string;
  fileName: string | null;
}

export async function analyzeProduct(data: AnalyzeRequest) {
  console.log("Analyze request:", data);

  // Temporary mock implementation.
  // Later replace this with:
  // await apiRequest("/analyze", { ... })

  return {
    reportId: "rpt-001",
    success: true,
  };
}