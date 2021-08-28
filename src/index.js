import './styles.css';
import {sethomepage} from './homepage.js'
import {setmenupage} from './menupage.js'
import {setcontactpage} from './contactpage.js'
import * as navbar from './navbar.js'
navbar.hometab.addEventListener('click', sethomepage);
navbar.menutab.addEventListener('click', setmenupage);
navbar.contacttab.addEventListener('click', setcontactpage);
