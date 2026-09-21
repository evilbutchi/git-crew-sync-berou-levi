function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const OVERTIME_MULTIPLIER = 1.5;
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  return Math.round(regularHours * rate + overtimeHours * rate * OVERTIME_MULTIPLIER);
}

module.exports = { isValidShift, calculatePay };