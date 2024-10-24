const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginSuccessful = await fetchData(username, password);
  if (loginSuccessful) {
    alert("Invalid username or password");
  } else {
    alert("Login successful");
  }
});

const fetchData = async (username, password) => {
  const endpoint = "https://daring-bulldog-42.hasura.app/v1/graphql";

  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "WBYT7CDij7UXKntv22DORjWL78G5felpV4qP0WQTojOaYuSABY68RcercW7DwwCo",
  };

  const data = fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: `
       query GetClients($username: String!, $password: String!) {
  Clients(where: {Username: {_eq: $username}, Password: {_eq: $password}}) {
    id
    Username
    Password
    FirstName
    LastName
    MobileNumber
    E_mail
    Re_EnterPassword
  }
}`,
variables: {
  username: username,
  password: password,
},
    }),
  })
    .then((response) => response.json())
    .then((e) => {
      console.log(e.data.Clients[0]);
      return e.data.Clients[0]});
};
