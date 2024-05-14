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
    "https://script.google.com/macros/s/AKfycbznY3_NsWYTK-xVoEZFgkbd7hoIuEreKL_uWBhaBTVsP-4P8F0S4MlTtKqpclLgGo7D/exec",
    {
      method: "POST",
      body: JSON.stringify(formObject),
    }
  )
  .then(res => {
    if (res.ok) {
      alert("Hello, you've successfully registered for INTERNATIONAL KINGDOM CONFERNCE, God bless you and see you there!!");
    } else {
      // Handle error if needed
    }
  })
  .catch(err => console.log(err));

  event.target.reset();
}