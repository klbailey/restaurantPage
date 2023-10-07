//#content from index.html
const content = document.querySelector("#content");
//create element 
const headline = document.createElement('div');
headline.textContent = "Menu";
headline.classList.add('headline3');

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');

//function adds menu items and related icon
function Food(name, price, desc) {
    this.name = name;
    this.price = `$${price}`;
    this.desc = desc;
    this.firstName = name.split(' ')[0].toLowerCase();
    this.info = {'name': this.name, 'price': this.price, 'desc': this.desc};
    this.append = function() {
        const itemDiv = document.createElement('div');
        const img = document.createElement('img');
        itemDiv.classList.add('item');
        img.id = `${this.firstName}`;
        img.src = `images/${this.firstName}.png`;
        img.alt = `${this.name}`;
        itemDiv.appendChild(img);
        for (const [key, value] of Object.entries(this.info)) {
            const infoDiv = document.createElement('div');
            infoDiv.classList.add(`item-${key}`);
            infoDiv.textContent = `${value}`;
            itemDiv.appendChild(infoDiv);
        };
        menuDiv.appendChild(itemDiv);
    }
}

const huli = new Food('Huli Huli Chicken', '29', '1/2 chicken, garlic, ginger, shoyu');
const cajun = new Food('Cajun Fish', '25', 'Flour tortillas, tomatillo sauce, pico de gallo, fresh tortilla chips');
const poke = new Food('Poke', '23', 'Fresh raw ahi, shoyu, maui onions, wasabi');
const filet = new Food('Filet Mignon', '54', 'Corn fed angus beef, dijon rubbed, maui onion jam');
const pono= new Food('Pono Pie', '12', 'Hawaiian breadfruit, passion fruit, macadamia nuts, strawberries');

const foodList = [huli, cajun, poke, filet, pono];

foodList.forEach(element => {
    element.append();
});

const loadMenu = () => {
    content.appendChild(headline);
    content.appendChild(menuDiv);
}

export default loadMenu;