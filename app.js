alert("hello")
document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var formObject = {};
  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  fetch(
    "https://script.google.com/macros/s/AKfycbyqfimcCEhW9OAh6DV-euY_k1OVsdAQ-yXeggQhhjwaG_xVPWVW_T0LG7dQSCUX2cNz/exec",
    {
      method: "POST",
      body: JSON.stringify(formObject),
    }
  )
  .then(res => {
    if (res.ok) {
      alert("Hello, you've successfully registered for THE APOSTOLIC INVASION, God bless you and see you there!!");
    } else {
      // Handle error if needed
    }
  })
  .catch(err => console.log(err));

  event.target.reset();
}