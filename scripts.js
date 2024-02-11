document.addEventListener('DOMContentLoaded', function () {
    const loveForm = document.getElementById('love-form');
    const loveStoriesSection = document.getElementById('love-stories');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // Retrieve stored love stories from local storage
    const storedLoveStories = JSON.parse(localStorage.getItem('loveStories')) || [];

    // Function to display love stories
    function displayLoveStories() {
        loveStoriesSection.innerHTML = '';
        storedLoveStories.forEach(function (loveStory) {
            const storyElement = createLoveStoryElement(loveStory);
            loveStoriesSection.appendChild(storyElement);
        });
    }

    // Function to create a love story element
    function createLoveStoryElement(loveStory) {
        const storyElement = document.createElement('div');
        storyElement.className = 'love-story';
        storyElement.innerHTML = `
            <h3>${loveStory.name}</h3>
            <p>${loveStory.story.substring(0, 100)}...</p>
        `;

        // Add click event to show the full story in modal
        storyElement.addEventListener('click', function () {
            modalContent.innerHTML = `
                <h3>${loveStory.name}</h3>
                <p>${loveStory.story}</p>
            `;
            modal.style.display = 'flex';
        });

        return storyElement;
    }

    // Display love stories on page load
    displayLoveStories();

    loveForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const story = document.getElementById('story').value;

        // Create a new love story object
        const loveStory = {
            name: name,
            story: story
        };

        // Add the new love story to the stored array
        storedLoveStories.push(loveStory);

        // Save the updated love stories to local storage
        localStorage.setItem('loveStories', JSON.stringify(storedLoveStories));

        // Display the love stories on the page
        displayLoveStories();

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
