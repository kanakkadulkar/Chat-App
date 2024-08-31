
import './detail.css'

const Detail=()=> {
  return (
    <div className='detail'>
      <div className="user">
        <img src='' alt=''/>
        <h2>jon doe</h2>
        <p>Lorem ipsum dolor ?</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src='./arrowUp.png' alt=''/>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src='./arrowUp.png' alt=''/>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src='./arrowDown.png' alt=''/>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photodetails">
                
             
              <img src='./avatar.png' alt=''/>
              <span>byfbrbfbrb</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>

          <div className="photoItem">
              <div className="photodetails">
                
             
          
                
             
           
             
              <img src='' alt=''/>
              <span>byfbrbfbrb</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
          
        </div> 
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src='./arrowUp.png' alt=''/>
            <img src='' alt=''/>
          </div>
        </div>
       
       <button>Block User</button>
        
      </div>
     
    </div>
  )
}

export default Detail