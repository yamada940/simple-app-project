import '../styles/main.scss'
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import '@splidejs/splide/css/skyblue';
import Splide from '@splidejs/splide';
import ActiveNav from './modules/activeNav';
import { dbOperation } from './modules/dbOperation';

if(document.getElementById('js-nav') !== null){
	new ActiveNav({
		navElement: 'js-nav'
	})
}

if(document.getElementsByClassName('splide')[0]){
	new Splide( '.splide' ).mount();
}

if(document.getElementById('js-firebase-table') !== null){
	dbOperation();
}