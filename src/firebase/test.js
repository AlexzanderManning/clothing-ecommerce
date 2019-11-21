import firebase from './firebase.utils';
import 'firebase/firestore';

const firestore = firebase.firestore();

export const test1 = firestore.collection('users').doc('MMQSfXCFQQPcabByG0bu').collection('cartItems').doc('TrVzFY2yVJJWqroZgwtC');

export const test2= firestore.doc('users/MMQSfXCFQQPcabByG0bu/cartItems/TrVzFY2yVJJWqroZgwtC');

export const test3= firestore.collection('users/MMQSfXCFQQPcabByG0bu/cartItems');





