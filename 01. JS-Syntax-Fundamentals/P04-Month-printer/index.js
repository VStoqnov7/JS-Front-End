function printMonth(number) {
    if (number >= 1 && number <= 12) {
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      const monthName = months[number - 1];
      console.log(monthName);
    } else {
      console.log("Error!");
    }
  }