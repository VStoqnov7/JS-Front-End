function phoneBook(arr) {
  const phone = {};

  for (const person of arr) {
    const nameAndPhone = person.split(" ");

    const name = nameAndPhone[0];
    const phoneNumber = nameAndPhone[1];

    phone[name] = phoneNumber;
  }

  for (const name in phone) {
    console.log(`${name} -> ${phone[name]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
