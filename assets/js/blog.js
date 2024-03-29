document.addEventListener('DOMContentLoaded', function() {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (storedPosts && storedPosts.length > 0) {
        storedPosts.forEach(postData => {
            renderBlogPost(postData);
        });
        console.log('Retrieved blogPosts array:', storedPosts); 
    } else {
        console.log('No data found in localStorage.');
    }
});


function renderBlogPost(postData) {
    const blogPostsContainer = document.getElementById('blogPosts');
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <div class="post">
            <h2>${postData.title}</h2>
            <p>${postData.content}</p>
            <p class="author">Author: ${postData.username}</p>
        </div>
    `;
    blogPostsContainer.appendChild(postElement);
}


document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});