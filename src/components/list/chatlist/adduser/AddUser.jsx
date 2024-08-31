import React from 'react'
import './addUser.css'

 const AddUser =() => {
  return (
    <div className='addUser'>
       <form>
          <input type="text" placeholder="userName" />
          <button>Search</button>
       </form>
       <div className="user">
          <div className="detail">
            <img src='' alt=''></img>
            <span>
                Jane Doe
            </span>
          </div>
          <button>Add User</button>
       </div>
    </div>
  )
}
export default  AddUser
