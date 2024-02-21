// Teacher Count
var teacherCountElement = document.getElementById("teachersCount");
var teacherCount = 0;

function teacherCountUp() {
  teacherCount++;
  teacherCountElement.textContent = teacherCount + "+";

  if (teacherCount < 100) {
    setTimeout(teacherCountUp, 100);
  }
}

// Courses Count
var coursesCountElement = document.getElementById("coursesCount");
var coursesCount = 0;

function coursesCountUp() {
  coursesCount++;
  coursesCountElement.textContent = coursesCount + "+";

  if (coursesCount < 55) {
    setTimeout(coursesCountUp, 100);
  }
}

// Members Count
var membersCountElement = document.getElementById("membersCount");
var membersCount = 0;

function membersCountUp() {
  membersCount++;
  membersCountElement.textContent = membersCount + "+";

  if (membersCount < 80) {
    setTimeout(membersCountUp, 100);
  }
}

window.onload = function () {
  teacherCountUp();
  coursesCountUp();
  membersCountUp();
};
