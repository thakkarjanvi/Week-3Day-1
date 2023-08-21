var student = {
    name: "Janvi Thakkar",
    gradeLevel: 10,
    courseNames: ["Maths", "Science", "Social Studies", "Gujarati"],
};

function addCourse(student, courseName) {
    student.courseNames.push(courseName);
}

addCourse(student, "Computer");
console.log(student.courseNames); 

addCourse(student, "Sanskrit");
console.log(student.courseNames); 

function removeCourse(student, courseName) {
    var index = student.courseNames.indexOf(courseName);
    if (index !== -1) {
        student.courseNames.splice(index, 1);
    }
} 

removeCourse(student, "Maths");
console.log(student.courseNames); 



function studentsTakingCourse(students, courseName) {

    var studentsWithCourse = students.filter(function (student) {
        return student.courseNames.includes(courseName);
    });

    return studentsWithCourse;
}

var students = [
    {
        name: "Janvi Thakkar",
        gradeLevel: 10,
        courseNames: ["Maths", "Science", "History"],
    },
    {
        name: "Shivali Javia",
        gradeLevel: 11,
        courseNames: ["Maths", "English", "Science"],
    },
    {
        name: "Gautami Parikh",
        gradeLevel: 10,
        courseNames: ["History", "English", "Art"],
    },
];

var course = "Science";
var studentsTakingScience = studentsTakingCourse(students, course);
console.log(studentsTakingScience);

