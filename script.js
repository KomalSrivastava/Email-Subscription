document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById("display");
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxddXwW6Woibs9-cTURwJIk5KaeYTZj7zrpOsirZXAQ_adO9vfYU_wJnjp5W4XuojjB/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        displayMessage();
      })
      .catch(error => console.error('Error!', error.message));
  });

  function displayMessage() {
    const msg = "Thank You For Subscribing!";
    display.textContent = msg;
  }
});

function submitForm(event) {
  event.preventDefault();
  document.forms['submit-to-google-sheet'].dispatchEvent(new Event('submit'));
}
