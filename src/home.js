const content = document.querySelector("#content");

const headline = document.createElement('div');
const phrase = document.createElement('div');
const alienPic = document.createElement('img');

headline.textContent = "Wahine Restaurant";
headline.classList.add('headline');
phrase.textContent = 'We serve local grindz!'
phrase.classList.add('phrase');

const loadHome = () => {
    content.appendChild(headline);
    content.appendChild(phrase);
}

export default loadHome;