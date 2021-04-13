let userList = document.getElementById("users");

function renderData(user) {
  let userCard = `<div class="col-lg-3 col-12 text-center my-3">
  <div class="card">
      <div class="card-body">
          <img style="border-radius: 100px;" src="${user?.avatar}" class="img-fluid text-center"/>
          <p>${user?.first_name}</p>
          <h6 class="mt-3 text-success">${user?.first_name} ${user?.last_name}</h6>
          <p>${user?.email}</p>
      </div>
  </div>
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
