const postForm = document.querySelector("#post-form");
const postsGrid = document.querySelector("#posts-grid");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values of the picture and caption inputs
  const picture = event.target.elements.picture.files[0];
  const caption = event.target.elements.caption.value;

  // Create a new post element
  const post = document.createElement("div");
  post.classList.add("post");

  // Create an image element and set its source to the uploaded picture
  const img = document.createElement("img");
  img.src = URL.createObjectURL(picture);
  img.alt = caption;
  post.appendChild(img);

  // Create a caption paragraph element and set its text content to the entered caption
  const captionPara = document.createElement("p");
  captionPara.classList.add("caption");
  captionPara.textContent = caption;
  post.appendChild(captionPara);

  // Add the new post to the beginning of the posts grid
  postsGrid.insertBefore(post, postsGrid.firstChild);

  // Clear the form inputs
  event.target.reset();
});
