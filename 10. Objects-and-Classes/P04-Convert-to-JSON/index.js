function convertToJSON(name, lastName, hairColor) {
  const person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(person));
}

convertToJSON("George", "Jones", "Brown");
