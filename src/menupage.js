import * as navbar from './navbar.js';
function createmenuitem(name, description, price){
    let item = document.createElement('div');
    let naming = document.createElement('p');
    let desc = document.createElement('p');
    let pricing = document.createElement('p');
    let line = document.createElement('div');
    line.classList.add('separationline');
    naming.id = "itemname";
    desc.textContent = description;
    naming.textContent = `${name}`; 
    pricing.textContent +=`${price}`;
    item.appendChild(naming);
    item.appendChild(desc);
    item.appendChild(pricing);
    item.appendChild(line);

    return item;
}
function setmenupage(){
    navbar.container.innerHTML ="";
    navbar.container.appendChild(navbar.tabbar);
    navbar.container.appendChild(navbar.linebreak);
    let box = document.createElement('div');
    box.classList.add('menubox');
    box.id = "box";
    let items;
    items = createmenuitem("Fiesta Lime Chicken","A celebration of flavor, this dish delivers on every level. Grilled chicken glazed with zesty lime sauce and drizzled with tangy Mexi-ranch is smothered with a rich blend of Cheddar cheeses on a bed of crispy tortilla strips. Served with Spanish rice and house-made pico de gallo.", "30$");
    box.appendChild(items);
    items = createmenuitem("Three Cheese Chicken Penne","Asiago, Parmesan and white Cheddar are mixed with pasta in a rich Parmesan cream sauce then topped with grilled chicken, bruschetta tomatoes and basil.", "50$");
    box.appendChild(items);
    items = createmenuitem("Double Crunch Shrimp","Crispy battered shrimp are fried golden brown. Served with cocktail sauce, our signature coleslaw and fries.", "25$"); 
    box.appendChild(items);
    items = createmenuitem("Mozzarella Sticks", "Crispy outside with melty Mozzarella inside.", "10$");
    box.appendChild(items);
    items = createmenuitem("Spinach and Artichoke Dip", "Creamy spinach and artichoke dip topped with melted Parmesan cheese. Served with freshly made white corn tortilla chips and our chipotle lime salsa.", "25$");
    box.appendChild(items);
    items = createmenuitem("Bourbon Street Steak", "Big flavor from New Orleans. A grilled 8 oz. USDA Select top sirloin* is jazzed up with Cajun spices and garlic butter served sizzling on a cast iron platter with sautéed mushrooms and onions. Served with garlic mashed potatoes.", "50$");
    box.appendChild(items);
    
    navbar.container.appendChild(box);
}
export {setmenupage};
