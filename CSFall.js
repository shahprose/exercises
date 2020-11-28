// Attendance

function getAttendance(enrolledStudents){
  // create an object to store the counts
  const count = enrolledStudents.reduce((acc, cv) => {
    acc[cv] = 0;
    return acc;
  }, {})
  // create an object here to store the attendance percentages
  const attendanceObj = enrolledStudents.reduce((acc, cv) => {
    acc[cv] = `0%`;
    return acc;
  }, {})
    // the keys are the names of the enrolled enrolledStudents
    // the values will be their attendance percentage

  attendanceObj.attendance = '';
  
  // create a variable to store the number of days attendance has been taken
  let numDays = 0;
  let actualAttendanceMarks = 0;
  let totalPossibleAttendanceMarks = 0;
  
  // returns a function that takes any number of arguments (student names);
  return (...students) => {
    for (let student of students) {
      if (attendanceObj[student] === undefined) return 'there are students in class that are not enrolled'
    }

  // this function will increment numDays
    numDays++; 
    actualAttendanceMarks += students.length;
    totalPossibleAttendanceMarks = numDays * 3;
    attendanceObj.attendance = `${Math.floor((actualAttendanceMarks/totalPossibleAttendanceMarks) * 100)}%`

    // this function will also increment the individual student's attendance record and divide it by numDays
    for (let student of students) {
      count[student]++;
      attendanceObj[student] = `${(count[student]/numDays) * 100}%`
    }

    // return the attendnce object
    return attendanceObj;
  }
}

// const students = ['victoria','rachel','max'];
// let studentAttendance = getAttendance(students);

// console.log(studentAttendance('max', 'rachel')); 
// // should log --> { max: '100%', rachel: '100%', victoria: '0%', attendance: '66%' }

// console.log(studentAttendance('victoria','rachel','max'));
// // should log --> { victoria: '50%', rachel: '100%', max: '100%', attendance: '83%' }

// console.log(studentAttendance('thomas')); 
// // // should log --> there are students in class that are not enrolled




// filterMap

function filterMap(array, condition, callback) {
  const outputArr = [];
  for (let i = 0; i < array.length; i++) {
    let currentObj = array[i];
    if (condition(currentObj)) {
      outputArr.push(callback(currentObj));
    }
  }
  return outputArr;
}

// // UNCOMMENT THESE LINES TO TEST YOUR CODE 
const students = [
  {name: 'Max', grade: 'freshman'},
  {name: 'Rachel', grade: 'junior'},
  {name: 'Victoria', grade: 'freshman'},
  {name: 'Natalie', grade: 'senior'},
  {name: 'Jaime', grade: 'junior'},
  {name: 'Parker', grade: 'freshman'},
];

const isFreshman = student => student.grade === 'freshman'; 
const changeGradeToSophomore = student => ({name: student.name, grade: "sophomore"});
const newFreshmen = filterMap(students, isFreshman, changeGradeToSophomore);
console.log(newFreshmen);
// newFreshmen should be [
//   {name: 'Max', grade: 'sophomore'}, 
//   {name: 'Victoria', grade: 'sophomore'}, 
//   {name: 'Parker', grade: 'sophomore'}
// ];