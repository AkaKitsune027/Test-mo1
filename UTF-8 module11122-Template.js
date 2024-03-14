//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500070      Name: Wanassanan Tri-apibanwongsa

class Student {
    constructor(name, age){
        this.name = name
        this.age = age
        this.course = []
    }

    addCourse(course){
        // not return and cant return null
        if(this.course.splice(0, 0, course))return course
        else return null
    }

    removeCourse(courseName){
        const foundCourseIndex = this.course.findIndex((itemCourseName)=>{
            return itemCourseName.name === courseName
        })

        if (courseName === null || courseName === undefined) return -1
        if(foundCourseIndex > -1){
            return this.course.splice(this.course[foundCourseIndex], 1)
        }   
    }

    getStudentInfo(){
        return stu
    }

    isEnrolled(courseName){

        const foundCourseIndex = this.course.findIndex((itemCourseName)=>{
            return itemCourseName.name === courseName
        })

        if(foundCourseIndex > -1) return true
        else return false
    }

    listAllCourses(){
        return this.course
    }

    getAverageGrade(){
        const grade = this.course.forEach((eachCourse) => {
            return eachCourse.grade
        });

        
    }

    getHonorClass(){
        
    }
}


//test

// Creating a new Student object for stu
let stu = new Student("Scott", 17);

// Adding courses to stu's record
console.log('add')
stu.addCourse({"name": "Math", "grade": "A"});
stu.addCourse({"name": "Programming", "grade": "B+"});
stu.addCourse({"name": "Network", "grade": "B+"});
stu.addCourse({"name": "GenEd", "grade": "D"});
// stu.addCourse({"name": null, "grade": undefined});
console.log(stu.course)

//Average Grade
console.log('average')
console.log(stu.getAverageGrade());

// Listing all courses
console.log(stu.listAllCourses());

// 'Removing "GenEd" course'
console.log('remove')
console.log(stu.removeCourse("GenEd"));
console.log(stu.course)
console.log(stu.removeCourse("Network"));
console.log(stu.removeCourse(null));
console.log(stu.removeCourse(undefined));
console.log(stu.course)


// Attempting to remove a non-existent course "History"
//console.log(stu.removeCourse("History"));

// Checking enrollment in "Programming" and "History"
console.log(stu.isEnrolled("Programming"));
console.log(stu.isEnrolled("History"));

// Getting student info after updates
console.log('info')
console.log(stu.getStudentInfo());

// Determining honor class after updates
// console.log(stu.getHonorClass());
