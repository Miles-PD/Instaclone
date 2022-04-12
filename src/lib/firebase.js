import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCC9kTVDrCRAv5gDMsgtuojPCnRTS5-xCA",
    authDomain: "instaclone-5233b.firebaseapp.com",
    projectId: "instaclone-5233b",
    storageBucket: "instaclone-5233b.appspot.com",
    messagingSenderId: "847168005844",
    appId: "1:847168005844:web:c832c08af6b9d6fc66fd41"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }