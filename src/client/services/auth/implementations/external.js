import firebase from 'firebase'
import auth from '../auth'

firebase.initializeApp({
  apiKey: "AIzaSyCqmak-bNDFP5yMOKUUuBXydbawwAc148I",
  authDomain: "hashticle.firebaseapp.com",
  databaseURL: "https://hashticle.firebaseio.com",
  storageBucket: "hashticle.appspot.com",
  messagingSenderId: "913945811955"
});

export default class AuthService {

  onAuthStateChanged(callback) {
    this.callback = callback;
    this.onStateChange();
  }

  login = async (username, password) => {
    await firebase.auth().signInWithEmailAndPassword(username, password)
    this.onStateChange();
  }

  onStateChange = async () => {
    await auth.executeStateChange(this.callback, firebase.auth().currentUser);
  }
}
