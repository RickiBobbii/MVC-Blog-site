const commentHandler = async (event) => {
    event.preventDefault();
  
    //CREATE comment
    const id = event.target.getAttribute('data-id3');
    const description = document.querySelector('#comment-desc').value.trim();
  
    if (description) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document.querySelector('.new-comment').addEventListener('submit', commentHandler);

