function validatePassword(password) {
  let valid = true;
  let messages = [];

  if (password.length < 6 || password.length > 10) {
    valid = false;
    messages.push("Password must be between 6 and 10 characters");
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    valid = false;
    messages.push("Password must consist only of letters and digits");
  }

  if ((password.match(/\d/g) || []).length < 2) {
    valid = false;
    messages.push("Password must have at least 2 digits");
  }

  if (valid) {
    console.log("Password is valid");
  } else {
    for (const message of messages) {
      console.log(message);
    }
  }
}
