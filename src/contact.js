import './style.css';

function createElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (tag === 'input') {
        element.placeholder = textContent;
    } else {
        element.textContent = textContent;
    }
    return element;
}

function contactUs() {
    const container = document.querySelector('#content');
    container.innerHTML = "";

    const contactUsContainer = createElement('div', { class: 'contactUs' });
    const contactTitle = createElement('h1', { id: 'contactTitle' }, 'Message Us ');
    const contactNameInput = createElement('input', { class: 'contactInput' }, 'Full Name');
    const contactEmailInput = createElement('input', { class: 'contactInput' }, 'Email');
    const contactMobileInput = createElement('input', { class: 'contactInput' }, 'Mobile Number');
    const contactMessage = createElement('textarea', { class: 'contactMessage', placeholder: 'Enter your message here' });
    const contactSubmit = createElement('button', { class: 'contactButton' }, 'Submit');



    contactUsContainer.appendChild(contactTitle);
    contactUsContainer.appendChild(contactNameInput);
    contactUsContainer.appendChild(contactEmailInput);
    contactUsContainer.appendChild(contactMobileInput);
    contactUsContainer.appendChild(contactMessage);
    contactUsContainer.appendChild(contactSubmit);
    container.appendChild(contactUsContainer);
}

export { contactUs };
