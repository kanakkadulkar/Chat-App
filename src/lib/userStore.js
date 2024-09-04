import { create } from 'zustand'

const useUserStore = create((set) => ({
  currentUser: 0,
  isLoading:true,
 fetchUserInfo:async (uid)=>{
    if(!uid) return ({currentUser:null,isLoading:false});
    try{

    }
    catch(err){
        console.log(err)
        return({currentUser: 0,
            isLoading:false});
    }
 }
}))
