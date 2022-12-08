/*
<!-- Name: Vraj Ravindrakumar Devganiya
Student Number: 164069213
Email: vdevganiya@myseneca.ca
Section: NII -->
*/

// Responsive navigation bar 
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.nav-links');

// Menu icon navigation bar
menu.addEventListener('click', function() {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

// collapsing navigation bar when hovered over
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

let JobOfferRadioButton = document.getElementById('Job Offer');

let SchoolRadioButton = document.getElementById('School');

let OtherRadioButton = document.getElementById('Other');

// Variable to make sure that the form is only printed once
var click = 0;

// Adding event listeners
JobOfferRadioButton.addEventListener('click', function() {
    if (click == 0) {
        generatePayRateInput();
        click++;
    }
});

SchoolRadioButton.addEventListener('click', function() {
    if (click > 0) {
        deletePayRateInput();
        click = 0;
    }
});

OtherRadioButton.addEventListener('click', function() {
    if (click > 0) {
        deletePayRateInput();
        otherMessage();
        click = 0;
    }
});

function otherMessage(){

    // Creating a label
    const other1 = document.createElement("label");
    const text = document.createTextNode("Other Reason:");
    other1.appendChild(text);
    other1.id = 'other-label';

    // Creating the input Field
    const other2 = document.createElement("input");
    other2.id = 'other-input';
    other2.type = 'number';
    other2.step = '0.1';
    other2.placeholder = 'Enter the message here';
    other2.classList.add('format');

}

// Function to delete
function deletePayRateInput() {
    let label = document.getElementById('hiring-rate-label');
    let input = document.getElementById('hiring-rate-input');
    let div = document.querySelector(".radio-btns");
    
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');

    div.removeChild(b1);
    div.removeChild(b2);

    div.removeChild(b3);
    div.removeChild(input);

    div.removeChild(label);
}

//  Validating Form
let messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    messages = [];

    // Validating all functions here
    validateName();
    validateEmail();

    validateAddress();
    validateCity();

    validatePostalCode();
    validateMessage();


    // Displaying the errors
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join('\r\n')}</pre>
        `;
    }
})

form.addEventListener('reset', (e) => {
    messages = [];
    errorElement.innerHTML = '';
})

//Validating Name
function validateName() {
    const inputName = document.getElementById('name');
    if(nullChecker(inputName, 'Name')) {
        areAlphabets(inputName, '* Invalid Name: Use Characters');
    }
}

// \Validating Email
function validateEmail() {
    const email = document.getElementById('email');
    if (nullChecker(email, 'Email')) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(validRegex))) {
            messages.push("* Invalid Email: Try again");
        }
    }    
}

// Validating Address
function validateAddress() {
    const address = document.getElementById('address');
    if (nullChecker(address, 'Address')) {
        if (address.value.length < 10) {
            messages.push("* Address should be atleast 10 characters long");
        }
    }
}

// Validating City
function validateCity() {
    const city = document.getElementById('city');
    if(nullChecker(city, 'City')) {
        areAlphabets(city, '* Invalid City: Use Alphabets');
    }
}
// Validating Province
function validateProvince() {
    const province = document.getElementById('province');
    if(nullChecker(province, 'Province')) {
        areAlphabets(province, '* Invalid Province: Use Alphabets');
    }
}
// Validating Postal Code
function validatePostalCode() {
    let postalCode = document.getElementById('pCode');
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) {
        messages.push("* Invalid Postal Code");
    }
}

// Validation for message
function validateMessage() {
    const message = document.getElementById('message');
    if (nullChecker(message, 'Message')) {
        if (address.value.length < 2) {
            messages.push("* Invalid Length try again");
        }
    }
}



// Ensures that field is not empty
function nullChecker(element, elementName) {
    result = true;
    if (element.value === '' || element.value == null) {
        messages.push(`* ${elementName} required`);
        result = false;
    }

    return result;
}

// checks that all the chars in the field are letters
function areAlphabets(element, message) {
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex))) {
        messages.push(message);
    }
}