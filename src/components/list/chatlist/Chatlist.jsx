import { useState } from 'react'
import './chatlist.css'
import AddUser from './adduser/AddUser';

const Chatlist=()=> {
  const[addMode,setAddMode]=useState(false);
  return (<>
    <div className='chatList'>
       <div className='search'>
         <div className='searchBar'>
            <img src='./search.png' alt=''/>
            <input type='text' placeholder='Search'/>

         </div>
         <img src={addMode?"./minus.png":"./plus.png"} alt='' className='add'
         onClick={()=>setAddMode((prev)=>!prev)}/>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
       <div className="items">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>jan doe</span>
          <p>hello</p>
        </div>
       </div>
      {addMode && <AddUser/>}
    </div>
    
    </>
  )
}

export default Chatlist