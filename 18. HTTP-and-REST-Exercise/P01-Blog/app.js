function attachEvents() {
  const URL_POSTS = "http://localhost:3030/jsonstore/blog/posts/";
  const URL_COMMENTS = "http://localhost:3030/jsonstore/blog/comments/";

  const btnLoadPosts = document.querySelector("#btnLoadPosts");
  const options = document.querySelector("#posts");
  const postTitle = document.querySelector("#post-title");
  const postComments = document.querySelector("#post-comments");
  const postBody = document.querySelector("#post-body");

  const postBodyMap = new Map();

  btnLoadPosts.addEventListener("click", loadPosts);

  async function loadPosts() {
    try {
      const response = await fetch(URL_POSTS);
      const postsJson = await response.json();
      const postsArray = Object.values(postsJson);

      options.innerHTML = "";

      postsArray.forEach((element) => {
        const body = element.body;
        const id = element.id;
        const title = element.title;

        const option = document.createElement("option");
        option.value = id;
        option.textContent = title;
        options.appendChild(option);
        postBodyMap.set(id, body);
      });
    } catch (error) {
      console.error(error);
    }
  }

  const btnViewPosts = document.querySelector("#btnViewPost");

  btnViewPosts.addEventListener("click", addComments);

  async function addComments() {
    try {
      const selectedOption = options.selectedOptions[0];
      const postId = selectedOption.value;

      const commentsResponse = await fetch(URL_COMMENTS);
      const commentsJson = await commentsResponse.json();
      const commentsArray = Object.values(commentsJson);

      postTitle.textContent = selectedOption.textContent;
      postBody.textContent = postBodyMap.get(postId);
      postComments.innerHTML = "";

      commentsArray.forEach((element) => {
        if (element.postId === postId) {
          const li = document.createElement("li");
          li.textContent = element.text;
          postComments.appendChild(li);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
