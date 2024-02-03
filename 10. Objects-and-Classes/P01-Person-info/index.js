function personInfo(firstName, lastName, age) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return person;
}

const person = personInfo("Peter", "Pan", "20");
console.log(person.firstName);
