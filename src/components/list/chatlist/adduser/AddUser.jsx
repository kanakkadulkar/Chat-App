import { useState } from 'react'
import './addUser.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'


 const AddUser =() => {
  
   const [user, setUser] =useState(null);

 const handleSearch=async (e)=>{
   e.preventdefault()
   const formData = new FormData(e.target)
   const username=formData.get("username");

   try{
      const userRef=collection(db,"users");

      const q=query(userRef,where("username","==",username));
      
      const querySnapShot=await getDocs(q);

      if(!querySnapShot.empty) {
         setUser(querySnapShot.doc(0).data());
      }

   }catch(err){
      console.error(err)
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
          <button>Add User</button>
       </div>}
    </div>
  )
}
export default  AddUser
