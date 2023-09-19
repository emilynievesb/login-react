async function usernameFetch(username) {
  try {
    let URLapi = `http://127.20.30.1:5005/api/get/getUser?username=${username}`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Especifica el tipo de contenido JSON
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

async function emailFetch(email) {
  try {
    let URLapi = `http://127.20.30.1:5005/api/get/getEmail?email=${email}`;
    const response = await fetch(URLapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Especifica el tipo de contenido JSON
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

async function postFetch(formData) {
  try {
    let postURL = `http://127.20.30.1:5005/api/post/agregarUser`;
    const response = await fetch(postURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}
export { usernameFetch, emailFetch, postFetch };
