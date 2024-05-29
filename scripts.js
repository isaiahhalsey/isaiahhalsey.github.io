document.addEventListener('DOMContentLoaded', function() {
    // Fetch and render blog posts from local storage
    fetchBlogPosts();

    // Add event listener to the form
    const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', addNewPost);
});

function fetchBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => renderBlogPost(post));
}

function addNewPost(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const newPost = { title, content };

    // Save post to local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Render the new post
    renderBlogPost(newPost);

    // Clear the form
    document.getElementById('post-form').reset();
}

function renderBlogPost(post) {
    const mainContent = document.getElementById('main-content');

    // Create post element
    const postElement = document.createElement('article');
    postElement.classList.add('blog-post');

    // Add title
    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    // Add content
    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    // Append title and content to post element
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    // Append post element to main content
    mainContent.appendChild(postElement);
}
