const endpoint = "https://daring-bulldog-42.hasura.app/v1/graphql";

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret":
    "WBYT7CDij7UXKntv22DORjWL78G5felpV4qP0WQTojOaYuSABY68RcercW7DwwCo",
};

const fetchData = () => {
  fetch(endpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify({
    query: `
       query MyQuery {
            Clients {
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
  }),
})
  .then((response) => response.json())
  .then((e) => console.log(e.data.MyQuery));
}

fetchData();



