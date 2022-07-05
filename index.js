const USERS_API = "https://jsonplaceholder.typicode.com/users";

async function callApi() {
  const res = await fetch(USERS_API);
  const users = await res.json();

  var p_element = document.getElementById("a");

// p要素のテキストを編集
  p_element.textContent = users;
}

callApi();

// then
function callApiWithThen() {
  const users = fetch(USERS_API)
    .then(function (res) {
      return res.json();
    })
    .then(function (users) {
      console.log(users);
    });
}

// XMLHttpRequest
function callApiWithXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", USERS_API);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    console.log(xhr.response);
  };
}