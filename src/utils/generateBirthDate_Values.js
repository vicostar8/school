import _ from "lodash";

export function generateMonths() {
  return _.range(1, 13);
}

export function generateDays(month, year) {
  const days = new Date(year, month, 0).getDate();
  return _.range(1, days + 1);
}

export function generateYears() {
  const currentYear = new Date();
  return _.range(currentYear.getFullYear(), 1949);
}
