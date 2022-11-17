export function average(allGrades) {
  const sum = allGrades.reduce((a, b) => a + b, 0);
  const gradesLenght = allGrades.length;
  return sum / gradesLenght;
}
