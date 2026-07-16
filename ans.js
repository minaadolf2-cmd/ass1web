let studentName = "Mina";
let attendance = 85;
let midtermScore = 25;
let finalExamScore = 50;
let assignmentScore = 18;
let tuitionPaid = true;

if (tuitionPaid === false) {

    console.log("You cannot view your results because your tuition fees are unpaid.");

} else {

    if (attendance < 75) {

        console.log("Student: " + studentName);
        console.log("Status: Failed due to low attendance.");

    } else {

        let totalScore = midtermScore + finalExamScore + assignmentScore;
        let letterGrade = "";

        if (totalScore >= 90) {
            letterGrade = "A";
        } else if (totalScore >= 80) {
            letterGrade = "B";
        } else if (totalScore >= 70) {
            letterGrade = "C";
        } else if (totalScore >= 60) {
            letterGrade = "D";
        } else {
            letterGrade = "F";
        }

        console.log("Student Name: " + studentName);
        console.log("Attendance: " + attendance + "%");
        console.log("Total Score: " + totalScore);
        console.log("Letter Grade: " + letterGrade);

        if (letterGrade === "F") {
            console.log("Academic Status: Failed");
        } else {
            console.log("Academic Status: Passed");
        }

        if (letterGrade === "A") {
            console.log("Congratulations! You are eligible for a scholarship.");
        }

    }

}