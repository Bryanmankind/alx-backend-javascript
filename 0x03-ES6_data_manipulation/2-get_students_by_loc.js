/**
 * Retrieves students in a given location.
 */
export default function getStudentsByLocation(list, city) {
  if (list instanceof Array) {
    return list.filter((student) => student.location === city);
  }
  return [];
}
