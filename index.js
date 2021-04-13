let userList = document.getElementById("users");

function renderData(user) {
  let userCard = `<div class='card__user'>
  <img class="avatar" src="${user?.avatar}" class="img-fluid text-center"/>
  <p>${user?.first_name}</p>
  <h6>${user?.first_name} ${user?.last_name}</h6>
  <p>${user?.email}</p>
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
