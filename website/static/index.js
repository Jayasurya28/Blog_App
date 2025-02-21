function like(postId) {
    const likeCount = document.getElementById(`likes-count-${postId}`);
    const likeButton = document.getElementById(`like-button-${postId}`);
    
    fetch(`/like-post/${postId}`, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        likeCount.textContent = data.likes;
        likeButton.className = data.liked ? "fas fa-thumbs-up" : "far fa-thumbs-up";
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to like post. Please try again.');
    });

    return false; // Prevent default action
}