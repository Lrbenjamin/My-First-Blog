document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        document.getElementById('errorMessage').textContent = 'Please complete all fields.';
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        const newPost = { username, title, content };
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(newPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        console.log('Data saved to localStorage:', newPost); 
        console.log('Updated blogPosts array:', blogPosts); 
        window.location.href = './blog.html';
    }
});
 

document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});