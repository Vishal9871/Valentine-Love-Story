document.addEventListener('DOMContentLoaded', function () {
    const loveForm = document.getElementById('love-form');
    const loveStoriesSection = document.getElementById('love-stories');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    loveForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const story = document.getElementById('story').value;

        // Create a new love story element
        const storyElement = document.createElement('div');
        storyElement.className = 'love-story';
        storyElement.innerHTML = `
            <h3>${name}</h3>
            <p>${story.substring(0, 100)}...</p>
        `;

        // Add click event to show the full story in modal
        storyElement.addEventListener('click', function () {
            modalContent.innerHTML = `
                <h3>${name}</h3>
                <p>${story}</p>
            `;
            modal.style.display = 'flex';
        });

        // Append the new love story to the Love Stories section
        loveStoriesSection.appendChild(storyElement);

        // Clear the form
        loveForm.reset();
    });

    // Close modal when the close button is clicked
    document.querySelector('.close').addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
