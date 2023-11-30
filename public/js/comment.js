const commentHandler = async (event) => {
    event.preventDefault();
  
    //CREATE comment
    const id = event.target.getAttribute('data-id3');
    const description = document.querySelector('#comment-desc').value.trim();
    const blog_id = id;

    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${id}`);
      } else {
        alert('Failed to create comment');
        console.log(response);
      }
    }
  };

  document.querySelector('.new-comment').addEventListener('submit', commentHandler);

