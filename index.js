let userList = document.getElementById("users");
let searchInput = document.getElementById("search__input");
let notFound = document.getElementById("not__found");
var users = [];

function renderData(user) {
  let userCard = `<div class='card__user'>
  <img class="avatar" src="${user?.avatar}" class="img-fluid text-center"/>
  <div class="username">${user?.first_name}</div>
  <div class="fullname">${user?.first_name} ${user?.last_name}</div>
  <div class="email">${user?.email}</div>
</div>`;
  userList.innerHTML += userCard;
}

document.addEventListener("DOMContentLoaded", (event) => {
  fetch("https://reqres.in/api/users/")
    .then((response) => response.json())
    .then((data) =>
      data?.data?.map((user) => {
        renderData(user);
        users.push(user);
      })
    );
});

searchInput.addEventListener("keyup", () => {
  let query = searchInput.value;
  userList.innerHTML = "";
  notFound.innerText = "";

  if (query) {
    let filteredUsers = users.filter(
      (user) =>
        user?.first_name?.toLowerCase().includes(query.toLowerCase()) ||
        user?.last_name?.toLowerCase().includes(query.toLowerCase()) ||
        user?.email?.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredUsers.length) filteredUsers.map((user) => renderData(user));
    else notFound.innerText = "User not found!";
  } else {
    users.map((user) => renderData(user));
  }
});
