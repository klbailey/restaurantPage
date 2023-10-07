import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
loadHome();

const content = document.querySelector('div#content');
const tabDiv = document.createElement('div');
tabDiv.classList.add('tabs');
//insert at beginning of elements
content.prepend(tabDiv);

function newTab(tabText) {
    const tab = document.createElement('button');
    tab.textContent = tabText;
    tab.id = tabText;
    tab.addEventListener('click', () => {
        content.replaceChildren(content.firstElementChild); //keep just tabs
        if (tab.id === 'home') {
            loadHome();
        } else if (tab.id === 'menu') {
            loadMenu();
        } else if (tab.id === 'contact') {
            loadContact();
        }
    })
    tabDiv.appendChild(tab);
};

newTab('home');
newTab('menu');
newTab('contact');