//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:       Name:

class Student {
// Insert your code here

}

// Creating a new Student object for stu
let stu = new Student("Scott", 17);

// Adding courses to stu's record
stu.addCourse({"name": "Math", "grade": "A"});
stu.addCourse({"name": "Programming", "grade": "B+"});
stu.addCourse({"name": "Network", "grade": "B+"});
stu.addCourse({"name": "GenEd", "grade": "D"});

//Average Grade
console.log(stu.getAverageGrade());

// Listing all courses
console.log(stu.listAllCourses());

// Removing "GenEd" course
console.log(stu.removeCourse("GenEd"));

// Attempting to remove a non-existent course "History"
console.log(stu.removeCourse("History"));

// Checking enrollment in "Programming" and "History"
console.log(stu.isEnrolled("Programming"));
console.log(stu.isEnrolled("History"));

// Getting student info after updates
console.log(stu.getStudentInfo());

// Determining honor class after updates
console.log(stu.getHonorClass());
