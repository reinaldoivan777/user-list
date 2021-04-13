let userList = document.getElementById("users");

function renderData(user) {
  let userCard = `<div class='card__user'>
  <img class="avatar" src="${user?.avatar}" class="img-fluid text-center"/>
  <div class="username">${user?.first_name}</div>
  <div class="fullname">${user?.first_name} ${user?.last_name}</div>
  <div class="email">${user?.email}</div>
</div>`;
  userList.innerHTML += userCard;
}

fetch("https://reqres.in/api/users/")
  .then((response) => response.json())
  .then((data) =>
    data?.data?.map((user) => {
      renderData(user);
    })
  );
