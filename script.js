const buttons = document.querySelectorAll ('.box');
const body = document.querySelector ('body');

buttons.forEach (function (button) {

    button.addEventListener ('click', function (event) {
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        } 
        else if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id;
        }   
        else if (event.target.id === 'red') {
            body.style.backgroundColor = event.target.id;
        }   
        else if (event.target.id === 'aqua') {
            body.style.backgroundColor = event.target.id;
        }   
    });
});

