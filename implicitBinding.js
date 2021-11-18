const workshop = {
  teacher: "Daniel",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("Que es el binding implicito?");
