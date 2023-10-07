const content = document.querySelector("#content");

const headline = document.createElement('div');
headline.textContent = "Contact";
headline.classList.add('headline2');

const contactInfo = document.createElement('div');
contactInfo.classList.add('info-card')

contactInfo.innerHTML = `Restaurant Phone: <b>808-808-8080</b> <br>
<b>Location</b>: Kalakaua Ave, Honolulu, HI, 96815`

const loadContact = () => {
    content.appendChild(headline);
    content.appendChild(contactInfo);
}

export default loadContact;