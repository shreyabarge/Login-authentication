let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("Registration Successful ! You can now log in.");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});

