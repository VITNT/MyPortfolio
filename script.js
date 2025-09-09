function darkMode() {
  const themeBtns = document.querySelectorAll(".dark-light-button");
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.classList.add("light-mode");
  }

  function themeToggle() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
    }
  }
  
  themeBtns.forEach((btn) => {
    btn.addEventListener("click", themeToggle);
  });
}

darkMode();

/* Form Validation */
function validateForm() {
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("subject").value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  } else if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (message == "") {
    alert("Message must be filled out");
    return false;
  }
    else {
    alert("You're message has been received!")
  }
}

/* Clock */
function clock () {
  let hr = document.getElementById("hr");
  let min = document.getElementById("min");
  let s = document.getElementById("s");
  let am = document.getElementById("am");

  setInterval (()=> {
    let time = new Date();
    if (time.getHours() < 10) {
      hr.innerHTML = "0" + time.getHours();
    } else {
      hr.innerHTML = time.getHours();
    }
    if (time.getHours() > 12) {
      hr.innerHTML = time.getHours() - 12;
      am.innerHTML = "PM";
    } else {
      hr.innerHTML = time.getHours();
      am.innerHTML = "PM";
    }
    if (time.getMinutes() < 10) {
      min.innerHTML = "0" + time.getMinutes();
    } else {
      min.innerHTML = time.getMinutes();
    }
    if (time.getSeconds() < 10) {
      s.innerHTML = "0" + time.getSeconds();
    } else {
      s.innerHTML = time.getSeconds();
    }
  })
}

clock();