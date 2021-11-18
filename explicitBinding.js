function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  const myContext = {
    teacher: "Ana",
  };
  Ask.call(myContext, "Que es el binding explícito?");
}

otherClass();
