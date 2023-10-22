// Get a reference to the button
const scrollButton = document.getElementById('scrollButton');

// Get a reference to the element you want to scroll to
const helloDiv = document.getElementById('hello');

// Add a click event listener to the button
scrollButton.addEventListener('click', () => {
    // Calculate the target position of the #hello div
    const targetPosition = helloDiv.getBoundingClientRect().top + window.scrollY;

    // Scroll smoothly to the target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});
