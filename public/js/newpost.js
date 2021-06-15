async function newFormHandler(event) {
    event.preventDefault();
    const name = document.getElementById('post-name').value;
    const description = document.getElementById('post-description').value;
    const photo = document.getElementById('upload').value;

    const response = await fetch(`/api/users/post`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            photo,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to add post');
    }
}

// To delete a comment - MD
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comment/${description}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to delete comment');
      }
    }
  };

// event listener to delete - MD
  document
  .querySelector('.delete-comment')
  .addEventListener('click', delButtonHandler);



document.getElementById('createpost').addEventListener('click', newFormHandler);
document.getElementById('post-form').addEventListener('submit', newFormHandler);

