import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import UserApi from "../api/UserApi";
const UserProfile = () =>{
    const {userId}=useParams();
    const [user, setUser] = useState({});
    const fetchData = async () =>{
        console.log(userId);
     await UserApi.getUser(userId).then(res =>  setUser(res));
    }
useEffect(()=>{
    fetchData();
},[]);
return <div>Дарова {user.FirstName}</div>
}

export default UserProfile;