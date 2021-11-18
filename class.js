class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

const principalMentor = new Workshop("Ana");
const secondaryMentor = new Workshop("Daniel");

principalMentor.ask("Las 'clases' son clases?");
secondaryMentor.ask("las 'clases' son lindas?");
