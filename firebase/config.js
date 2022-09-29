import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB95tf-kiiIj67QJTSA7l3emXMQLZ2j4Po',
  authDomain: 'miniblog-921a2.firebaseapp.com',
  projectId: 'miniblog-921a2',
  storageBucket: 'miniblog-921a2.appspot.com',
  messagingSenderId: '895194387274',
  appId: '1:895194387274:web:b86dda960577e3ac2367b3',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
