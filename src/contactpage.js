import * as navbar from './navbar.js';
import mapsrc from './location.png'
function setcontactpage(){
    navbar.container.innerHTML="";
    navbar.container.appendChild(navbar.tabbar);
    navbar.container.appendChild(navbar.linebreak);
    let contactbox = document.createElement('div');
    contactbox.classList.add('menubox');
    let phonenumber = document.createElement('p');
    phonenumber.innerHTML = "📞0568393196";
    let address = document.createElement('p');
    address.textContent = "🏠 Prince Miqran Bin Abdulaziz Street, Al Matar Al Faiz Center, Hail"
    let map = document.createElement('img');
    map.src = mapsrc;
    map.classList.add('map');
    contactbox.appendChild(phonenumber);
    contactbox.appendChild(address);
    contactbox.appendChild(map);
    navbar.container.appendChild(contactbox);
}
export { setcontactpage};
