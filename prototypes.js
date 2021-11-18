function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

const principalMentor = new Workshop("Ana");
const secondaryMentor = new Workshop("Daniel");

principalMentor.ask("Los 'prototipos' son clases?");
secondaryMentor.ask("Los 'prototipos' son feos?");
