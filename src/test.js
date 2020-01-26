import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('7jBmdhjhQQY8hRet6M82').collection('cartItems').doc('cD2wfKoL6gGgT71QIyjE');
firestore.doc('/users/7jBmdhjhQQY8hRet6M82/cartItems/cD2wfKoL6gGgT71QIyjE');
firestore.collection('/users/7jBmdhjhQQY8hRet6M82/cartItems');
