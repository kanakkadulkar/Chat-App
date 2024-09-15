import { useState } from 'react'
import './addUser.css'
import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'


 const AddUser =() => {
  
   const [user, setUser] =useState(null);

 const handleSearch=async (e)=>{
   e.preventDefault()
   const formData = new FormData(e.target);
   const username=formData.get("username");

   try{
      
      const userRef=collection(db,"users");
      const q=query(userRef,where("username","==",username));   
      const querySnapShot=await getDocs(q);
      if(!querySnapShot.empty) {
         setUser(querySnapShot.docs[0].data());
         console.log("nooo");
      }

   }catch(err){
      console.error(err)
   }
}
const handleAdd=async()=>{
   const chatRef=collection(db,"chats");
   const userchatsRef=collection(db,"userchats");

   try{
      const newChatRef=doc(chatRef)


         await setDoc(newChatRef,{
            createdAt:serverTimestamp(),
            messages:[],
         })
 console.log(newChatRef.id)

   }catch(err){
      console.log(err)
   }
} 
 
  return (
    <div className='addUser'>
       <form onSubmit={handleSearch}>
          <input type="text" placeholder="userName" />
          <button>Search</button>
       </form>
       {user && <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt=''></img>
            <span>
                {user.username}
            </span>
          </div>
          <button onClick={handleAdd}>Add User</button>
       </div>}
    </div>
  )
}
export default  AddUser
