// Your code goes here

//add an event listener to the document
document.addEventListener("DOMContentLoaded", function() {

    //a reference is gotten to the html content with the 'text'
    const paragraph = document.getElementById('text');

    //the paragraph element is set to a new string
    paragraph.textContent = 'This is really cool!';
});
