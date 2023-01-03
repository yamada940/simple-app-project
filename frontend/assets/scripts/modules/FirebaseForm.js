import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from './const';

export default class FirebaseForm {
	constructor(obj){
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = getFirestore(firebaseApp);

        this.dbName = obj.dbName;
        this.$form = obj.formId;
        this.formController();
	}

    async insertNewUser(params){
        await addDoc(collection(this.db, this.dbName), {
            first: params.first,
            last: params.last,
            born: params.born
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    formController(){
        const $form = document.getElementById(this.$form);
        const handleClick = (e) => {
            e.preventDefault();
            const data = {
                first: $form.querySelector('input[name=first]').value,
                last: $form.querySelector('input[name=last]').value,
                born: $form.querySelector('input[name=born]').value
            }
            console.log('data:', data);
            this.insertNewUser(data);
        }
        
        $form.addEventListener('submit', (e) => handleClick(e));
    }
}