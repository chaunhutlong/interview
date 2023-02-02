// Giving an API endpoint: https://jsonplaceholder.typicode.com/posts.
// Use JavaScript or TypeScript to write a function that fetches data from this API endpoint.
// store the data in a variable.
const results = [];
const fetchPosts = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      results.push(...json);
      displayPosts();
      return results;
    })
    .catch((error) => console.log(error));
};

// Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.
const createPost = async () => {
  const body = document.getElementById("create-form").elements[0].value;
  const title = document.getElementById("create-form").elements[1].value;
  //check if the body and title are empty
  if (body === "" || title === "") {
    alert("Please fill in the form");
    return;
  }
  // create a new post using the API endpoint.
  // then display the new post on the page.
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      results.push(json);
      // display the new post on the page
      displayPosts();
      return results;
    })
    .catch((error) => console.log(error));
};

// (Optional) Create a UI that has 2 buttons: “Fetch” and “Create” that execute the two functions above.
const fetchButton = document.getElementById("fetch-button");
const createButton = document.getElementById("create-button");

createButton.addEventListener("click", (e) => {
  e.preventDefault();
  createPost();
});

// (Optional) Create a UI that displays the data from the API endpoint.
const postsContainer = document.getElementById("posts-container");

const displayPosts = async () => {
  postsContainer.innerHTML = "";
  results.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
      <h3>Title: ${post.title}</h3>
      <p>Body: ${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
  });
};

fetchButton.addEventListener("click", fetchPosts);
