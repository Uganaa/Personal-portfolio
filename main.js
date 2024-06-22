document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', () => {
        var element = document.querySelector('section');
        if (element) {
            element.style.color = '#f4f4f4';
            element.style.backgroundColor = '#333';
            console.log("completed");
        } else {
            console.log("No elements found with the name 'header'.");
        }
    })
});
document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', () => {
        var element = document.querySelector('section');
            element.style.color = '#f4f4f4';
            element.style.backgroundColor = '#333';
            console.log("Completed");
    });
});