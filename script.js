let coin = localStorage.getItem("coin") || 0;
let user = localStorage.getItem("user");

if (user) {
  showDashboard();
}

function login() {
  const name = document.getElementById("username").value;
  if (!name) return alert("Isi username!");

  localStorage.setItem("user", name);
  localStorage.setItem("coin", coin);
  showDashboard();
}

function showDashboard() {
  document.getElementById("login").style.display = "none";
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("user").innerText = localStorage.getItem("user");
  document.getElementById("coin").innerText = localStorage.getItem("coin");
}

function claim(amount) {
  coin = parseInt(coin) + amount;
  localStorage.setItem("coin", coin);
  document.getElementById("coin").innerText = coin;
}

function logout() {
  localStorage.clear();
  location.reload();
}
