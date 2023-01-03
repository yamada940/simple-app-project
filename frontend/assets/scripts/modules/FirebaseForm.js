import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from './const';

export default class FirebaseForm {
	constructor(obj){
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = getFirestore(firebaseApp);

        this.dbName = obj.dbName;
        this.$form = document.getElementById(obj.formId);
        this.$form.addEventListener('submit', (e) => this.handleClick(e));
	}

    async insertNewUser(){
        await addDoc(collection(this.db, this.dbName), {
            first: this.$form.querySelector('input[name=first]').value,
            last: this.$form.querySelector('input[name=last]').value,
            born: this.$form.querySelector('input[name=born]').value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    handleClick(e){
        e.preventDefault();
        this.insertNewUser();
    }
}