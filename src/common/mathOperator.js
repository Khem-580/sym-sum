export function mathOperator(x, y) {
  return {
    0: twoDecimalPlace(x + y),
    1: twoDecimalPlace(x - y),
    2: twoDecimalPlace(x * y),
    3: twoDecimalPlace(x / y),
  }
}

export function mathOperatorZ(x, y, z) {
  return {
    '0-0': twoDecimalPlace(x + y + z),
    '1-0': twoDecimalPlace(x - y + z),
    '2-0': twoDecimalPlace(x * y + z),
    '3-0': twoDecimalPlace(x / y + z),
    '0-1': twoDecimalPlace(x + y - z),
    '1-1': twoDecimalPlace(x - y - z),
    '2-1': twoDecimalPlace(x * y - z),
    '3-1': twoDecimalPlace(x / y - z),
  }
}

function twoDecimalPlace(num) {
  return Math.round((num) * 100) / 100;
}