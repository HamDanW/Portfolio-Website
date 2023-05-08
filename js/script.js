
// Get all project divs
const projects = document.querySelectorAll('.project');

// Loop through each project div
projects.forEach((project) => {

  // Get the project's ID
  const projectId = project.getAttribute('id');

  // Get the project's modal
  const modal = document.getElementById(`modal-${projectId}`);

  // When the project is clicked, show the modal
  project.addEventListener('click', () => {
    console.log("click");
    modal.style.display = "block";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});