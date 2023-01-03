import firebase from 'firebase/compat/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


// dotenv.config()
// obj: {
//  dbName: str 'users'
//  tableId: str 'js-firebase-table'
// }

export default class FirebaseDB {
	constructor(obj){
		const firebaseConfig = {
            apiKey: import.meta.env.API_KEY,
            appId: import.meta.env.APP_ID,
            authDomain: "db-test-6a682.firebaseapp.com",
            projectId: "db-test-6a682",
            storageBucket: "db-test-6a682.appspot.com",
            messagingSenderId: "747176992339",
            measurementId: "G-S8L5L31DJY"
        };

        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = getFirestore(firebaseApp);

        this.dbName = obj.dbName;
        this.tableId = obj.tableId;
	}

    async showData(){
        const q = query(collection(this.db, this.dbName));

        const querySnapshot = await getDocs(q);
        const $table = document.getElementById(this.tableId);

        querySnapshot.forEach((doc) => {

            const tagTr = document.createElement('tr');
            
            const columns = [
                doc.data().first,
                doc.data().last,
                doc.data().born
            ];

            for (let index = 0; index < columns.length; index++) {
                const tagTd = document.createElement('td');
                tagTd.textContent = columns[index];
                tagTr.insertAdjacentElement('afterbegin', tagTd);
            }
            $table.insertAdjacentElement('afterbegin', tagTr);

        });
    }
}

// export function dbOperation(){


//     const insertNewUser = (params) => {
        
//         this.db.collection("users").add({
//             first: params.first,
//             last: params.last,
//             born: params.born
//         })
//         .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });
//     }

//     // insertNewUser
//     const formController = () => {
//         const $form = document.getElementById('js-form');

//         const handleClick = (e) => {
//             e.preventDefault();
//             const data = {
//                 first: $form.querySelector('input[name=first]').value,
//                 last: $form.querySelector('input[name=last]').value,
//                 born: $form.querySelector('input[name=born]').value
//             }
//             console.log('data:', data);
//             insertNewUser(data);
//         }
        
//         $form.addEventListener('submit', (e) => handleClick(e));
//     }
//     formController();
// }