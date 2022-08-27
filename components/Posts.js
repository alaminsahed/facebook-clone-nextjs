import React from 'react';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '../firebase';
import Post from './Post';

const Posts = () => {
    const [value] = useCollection(
        collection(getFirestore(app), 'posts'),

    );
    value && value.docs.map(doc => console.log("posts", doc.data()));
    return (
        <div>
            {
                value && value.docs.map(doc => <Post key={doc.id} name={doc.data().name} message={doc.data().message} email={doc.data().email} timestamps={doc.data().timestamp} image={doc.data().image} PostImage={doc?.data()?.postImage} />)
            }
        </div>
    );
};

export default Posts;