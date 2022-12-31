import '../styles/main.scss'
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import '@splidejs/splide/css/skyblue';
import Splide from '@splidejs/splide';
import activeNav from './modules/activeNav';
import './modules/notion';

if(document.getElementsByClassName('splide')[0]){
	new Splide( '.splide' ).mount();
}

activeNav();
// import { setupCounter } from '../../vite-project/counter.js'
