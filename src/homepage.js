import * as navbar from './navbar.js';
function sethomepage(){
    navbar.container.innerHTML = "";
    navbar.container.appendChild(navbar.tabbar);
    navbar.container.appendChild(navbar.linebreak);
    let banner = document.createElement('div');
let title = document.createElement('div');
title.textContent = "Applebee's";
title.classList.add('title');
let slogan = document.createElement('p');
slogan.textContent = "THERE'S ALWAYS A REASON TO CELEBRATE";
banner.appendChild(title);
banner.appendChild(slogan);
banner.classList.add('banner');
navbar.container.appendChild(banner);
}

export {sethomepage};
