const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

// //UPDATE button handler
// const updateButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         name,
//         description,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace(`/blogs/${id}`);
//     } else {
//       alert('Failed to get blog');
//     }
//   }
// };
//DELETE button handler
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id2')) {
    const id = event.target.getAttribute('data-id2');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', updateButtonHandler);

  document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

