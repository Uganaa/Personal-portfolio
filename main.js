document.addEventListener('DOMContentLoaded', () => {
    // Check if script runs
    console.log("Script loaded and DOM fully parsed");

    const myButton = document.getElementById('myButton');

    if (!myButton) {
        console.error("Button with ID 'myButton' not found");
        return;
    }

    function darkMode() {
        // Select multiple elements by their IDs
        const elements = document.querySelectorAll('#introduction, #about, #projects, #services, #contact');

        // Check if elements are found
        if (elements.length === 0) {
            console.error("No elements found with specified IDs");
            return;
        }

        // Loop through each element and apply styles
        elements.forEach(element => {
            element.style.color = '#f4f4f4';
            element.style.backgroundColor = '#333';
        });

        console.log("Dark mode applied");
    }

    myButton.addEventListener('click', darkMode);
});
