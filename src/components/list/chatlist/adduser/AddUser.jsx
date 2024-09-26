import { useState } from 'react';
import './addUser.css';
import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username'); // Correctly fetch the username

    try {
      const userRef = collection(db, 'users');
      const q = query(userRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // User found
        setUser(querySnapshot.docs[0].data());
        console.log('User found:', querySnapshot.docs[0].data());
      } else {
        // No user found
        console.log('No user found');
        setUser(null); // Clear previous user data
      }
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, 'chats');
    const userChatsRef = collection(db, 'userchats');

    try {
      const newChatRef = doc(chatRef); // Create a new chat document reference

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });
      console.log('New chat created with ID:', newChatRef.id);
    } catch (err) {
      console.error('Error adding chat:', err);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" name="username" placeholder="Username" /> {/* Added name attribute */}
        <button type="submit">Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || './avatar.png'} alt="User Avatar" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
