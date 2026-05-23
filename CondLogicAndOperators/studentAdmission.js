/* 
Exercise: Student Admission

Create variables marks and hasCertificate.
Check if marks are 70 or higher.
Check if the student has a certificate.
Check if the student qualifies using marks OR certificate.
let marks = 75;
let hasCertificate = true;
*/

//ANSWER

let marks = 75;
let hasCertificate = true;

if (marks >= 70 || hasCertificate) {
    console.log("Student qualifies for admission");
} else {
    console.log("Student does not qualify");
}