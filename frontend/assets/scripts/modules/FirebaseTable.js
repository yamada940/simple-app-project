import firebase from 'firebase/compat/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from './const';

export default class FirebaseTable {
	constructor(obj){
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = getFirestore(firebaseApp);
        this.dbName = obj.dbName;
        this.tableId = obj.tableId;
	}

    async showData(){
        const q = query(collection(this.db, this.dbName));
        // 'where'でソートした場合
        // const q = query(collection(this.db, this.dbName), where('born', '>=', 1300));

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
                tagTr.insertAdjacentElement('beforeend', tagTd);
            }
            $table.insertAdjacentElement('afterbegin', tagTr);
        });
    }
}