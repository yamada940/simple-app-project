import '../styles/main.scss'
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import '@splidejs/splide/css/skyblue';
import Splide from '@splidejs/splide';
import activeNav from './modules/activeNav';
import { dbOperation } from './modules/dbOperation';
import axios from 'axios';

import { Client } from "@notionhq/client"

if(document.getElementsByClassName('splide')[0]){
	new Splide( '.splide' ).mount();
}

if(document.getElementById('js-firebase')){
	dbOperation();
}

activeNav();

// const getNotionDatabaseData = async () => {
//   const token = import.meta.env.VITE_API_KEY;
//   const databaseId = import.meta.env.VITE_DATABSE_ID;

// 	const url = 'https://api.notion.com/v1/databases/' + databaseId + '/query';

// 	await fetch(url, {
// 		method: "GET", // *GET, POST, PUT, DELETE, etc.
// 		mode: "no-cors", // no-cors, *cors, same-origin
// 		cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: "same-origin", // include, *same-origin, omit
// 		headers: {
// 			"Content-Type": "application/json",
// 			'Authorization': `Bearer ${token}`,
// 			'Notion-Version': ' 2022-02-22',
// 		},
// 	})
// 	.then(data => console.log('data:', data))
// 	.catch(err => console.log('err:', err))
//   // const response = await axios({
//   //   method: 'get',
// 	// 	// url: `https://api.notion.com/v1/blocks/${databaseId}/children`,
//   //   url: 'https://api.notion.com/v1/databases/' + databaseId + '/query',
//   //   headers: {
// 	// 		// 'Content-Type': 'application/json;charset=utf-8',
// 	// 		// 'Content-Type': 'application/json',
// 	// 		'Access-Control-Allow-Origin': '*',
//   //     'Authorization': `Bearer ${token}`,
// 	// 		'Notion-Version': ' 2022-02-22',
// 	// 		'muteHttpExceptions': true,
//   //   }
// 	// })
// 	// .then((res) => console.log(res))
// 	// .catch((error) => {
//   //   //接続に失敗した場合の処理
//   //   console.log('err', error);
//   // });
// 	// // データ1件以上取得できた場合
//   // if (response && response.data) {
//   //   for (const data of response.data.results) {
//   //     // 取得したテーブルデータを使った処理を記述
//   //     console.log('**********************');
//   //     console.log(data);
//   //     console.log('**********************');
//   //   }
//   // }
// }
// getNotionDatabaseData();


// const notion = new Client({ auth: import.meta.env.VITE_API_KEY });

// (async () => {
//   const response = await notion.databases.retrieve({
// 		database_id: import.meta.env.VITE_DATABSE_ID
// 	});
//   console.log(response);
// })();