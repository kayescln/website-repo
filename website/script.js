
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  alert('Your message has been sent!');
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const partySize = document.getElementById("partySize").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || date === "" || time === "" || partySize === "") {
    alert("Please fill in all required fields.");
    return false;
  }


  document.getElementById("reservationForm").submit();
}
document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  validateForm();
});
