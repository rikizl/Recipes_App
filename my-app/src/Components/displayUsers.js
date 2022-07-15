import React from 'react';
import { connect } from 'react-redux';
import AddUser from './addUser';
function mapStateToProps(state){
    return {
        users:state.users,
        currentUser:state.currentUser,
        weather:state.weather
    }
}
export default connect(mapStateToProps)(
    function DisplayUsers(props){
        let {users, currentUser, weather}=props;
        return(
            <>
            <h1>my project</h1>
            <h2>user name: {currentUser.name}</h2>
            <h4>user Id: {currentUser.id}</h4>
            <h6>weather: {weather}</h6>
            {users &&
                 users.map((user)=>{
                     return(
                         <>
                         <div style={{border:'1px black solid', height:'200px', width:'200px', display:'inline-block', margin:'2%'}}>
                             <p>Name:{user.name}</p>
                             <p>Id:{user.id}</p>
                         </div>
                         </>
                     )
                 })
             }
             <AddUser></AddUser>
            </>
        )
    }
)