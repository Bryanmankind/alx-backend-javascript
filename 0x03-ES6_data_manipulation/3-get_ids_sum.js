/**
 * Retrieves the sum of ids of a list of students.
 */
export default function getStudentIdsSum(stdId) {
  if (stdId instanceof Array) {
const id = stdId.map((a) => a.id);
return id.reduce((accumilator,currentIndex) => accumilator + currentIndex);
  }
  return 0;
}
