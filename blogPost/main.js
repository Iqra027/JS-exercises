const postTitle = document.querySelector('#postTitle');
const postContent = document.querySelector('#postContent');
const postImage = document.querySelector('#postImage');

const AddPost = document.querySelector('#AddPost');
const postContainer = document.querySelector('#postContainer');

//Add local storage functionality to save and load posts, similar to the Todo list example, by creating functions to save posts to local storage and load them when the page is loaded.
function savePostsToLocalStorage() {
    const posts = [];
    const postElements = document.querySelectorAll('.post');
    postElements.forEach(post => {
        const title = post.querySelector('h2').textContent;
        const content = post.querySelector('p').textContent;
        const image = post.querySelector('.post-image').src;
        posts.push({ title, content, image });
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}

// These variables will help us to manage the editing
let isEditing = false;
let currentEditingPost = null;

// Event listener for the Add Post button
AddPost.addEventListener('click', function (event) {
    event.preventDefault(); 
    // Get the values of the input fields
    const titleValue = postTitle.value.trim();
    const imageValue = postImage.value.trim();
    const contentValue = postContent.value.trim();

// Check if all fields are filled before creating the post

    if (titleValue && contentValue && imageValue) {
        // Create a new div element for the post
        const postElement = document.createElement('div');
        // Add a class to the post element for styling purposes
        postElement.classList.add('post');
        // Set the inner HTML of the post element to include the title, content, and image
        postElement.innerHTML = `
            <h2>${titleValue}</h2>
            <img src="${imageValue}" alt="Post Image" class="post-image">
            <p>${contentValue}</p>
        `;
        // Append the post element to the post container
        postContainer.appendChild(postElement);
        postTitle.value = '';
        postContent.value = '';
        postImage.value = '';
        // Save the posts to local storage after adding a new post
        savePostsToLocalStorage();

    }
});



// Load posts from local storage when the page is loaded
window.addEventListener('load', function () {
    const posts = JSON  
    JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <img src="${post.image}" alt="Post Image" class="post-image">
            <p>${post.content}</p>
        `;
        postContainer.appendChild(postElement);
    });
});
// This code adds functionality to save posts to local storage and load them when the page is loaded. It also includes basic validation to ensure that all fields are filled before creating a post.
