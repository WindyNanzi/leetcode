export function generateNodeFormArray(arr) {
  return arr.reverse().reduce((next, val) => {
    return { next, val }
  }, null)
}


