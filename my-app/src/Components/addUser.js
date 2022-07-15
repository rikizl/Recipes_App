import  {useRef} from 'react';
import {connect} from 'react-redux';
import {addUser} from './redux/action';
function mapStateToProps(state){
    return {
        users:state.users,
        currentUser:state.currentUser,
        weather:state.weather
    }
}
export default connect(mapStateToProps)(
    function AddUser(props)
    {
        const {users, currntUser, weather, dispatch}=props;
        const nameRef=useRef(null);
        const idRef=useRef(null);
        function add()
        {
            let user={name:nameRef.current.value, id: idRef.current.value}
            dispatch(addUser(user))
        }
        return(
            <>
                <h4>add user: </h4>
                <input type="text" placeholder="name" ref={nameRef}></input>
                <br></br>
                <input type="text" placeholder="id" ref={idRef}></input>
                <button onClick={()=>{add()}}>add</button> 
            </>
        )

    }
)