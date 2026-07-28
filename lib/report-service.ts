import {
  trustReports,
  dashboardStats,
  categoryBreakdown,
  getReport,
} from "./mock-data";

export async function getDashboardData() {
  return {
    stats: dashboardStats,
    categories: categoryBreakdown,
    reports: trustReports,
  };
}

export async function getReportById(id: string) {
  return getReport(id);
}

export async function getRecentReports() {
  return trustReports;
}
export async function searchProducts() {
  return trustReports;
}