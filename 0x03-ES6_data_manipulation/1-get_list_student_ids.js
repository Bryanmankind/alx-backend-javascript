/**
 * Retrieves ids from a list of students.
 */
export default function getListStudentIds(studentsId) {
  if (studentsId instanceof Array) {
    return studentsId.map((student) => student.id);
  }
  return [];
}
