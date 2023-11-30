//UPDATE button handler
const updateButtonHandler = async (event) => {
    event.preventDefault();
    
    const id = event.target.getAttribute('data-id');
    const name = document.querySelector('#update-name').value.trim();
    const description = document.querySelector('#update-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name,
          description,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${id}`);
      } else {
        alert('Failed to get blog');
      }
    }
  };

  //update button on update page
  document
  .querySelector('.update-blog')
  .addEventListener('submit', updateButtonHandler);