document.addEventListener('DOMContentLoaded', () => {
    // Check if script runs
    console.log("Script loaded and DOM fully parsed");

    const myButton = document.getElementById('myButton');

    let darkTheme = false;

    if (!myButton) {
        console.error("Button with ID 'myButton' not found");
        return;
    }

    function darkMode() {
        // Select multiple elements by their IDs
        const elements = document.querySelectorAll('#introduction, #about, #projects, #service, #contact');

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

        myButton.innerHTML = "Light Mode";
        darkTheme = true;
        console.log("Dark mode applied");
    }

    function lightMode() {
        // Select multiple elements by their IDs
        const elements = document.querySelectorAll('#introduction, #about, #projects, #service, #contact');

        // Check if elements are found
        if (elements.length === 0) {
            console.error("No elements found with specified IDs");
            return;
        }

        // Loop through each element and apply styles
        elements.forEach(element => {
            element.style.color = '#333';
            element.style.backgroundColor = '#f4f4f4';
        });

        myButton.innerHTML = "Dark Mode";
        darkTheme = false;
        console.log("Light mode applied");
    }

    function modeSwitch() {
        if (darkTheme === false) {
            darkMode();
        }
        else if (darkTheme === true) {
            lightMode();
        }
        else console.log('Error!!!');

    }

    myButton.addEventListener('click', modeSwitch);   
});
