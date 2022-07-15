import React, {  useRef } from "react";
// import { TextField } from "@mui/material";
import {  login } from "../../services/userServise";
import { useDispatch } from "react-redux";
import {  setCurrentUser } from "../redux/user/userAction";
import { useNavigate } from "react-router-dom";
export function SignIn(props) {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    //const usersList = useSelector(store => store.userStore.users)
    //const [thisUser, setThistUser] = useState({})
    let myDispatch = useDispatch();
    let navigate = useNavigate();


    // useEffect(async () => {
    //     if (usersList.length === 0) {
    //         // let users = await getAllUsers();
    //         // // setUsersList(usersList.concat(users))
    //         // myDispatch(setUsers(users))
    //     }
    // }, [])

    async function signIn() {
        // console.log(usersList);
        if(!nameRef.current.value|| !passwordRef.current.value){
            alert("שכחתי שם ו/או סיסמא 😧")
            return;
        }
        let data = await login(nameRef.current.value, passwordRef.current.value)
        // let user = usersList.find(x => x.name === nameRef.current.value && x.password === passwordRef.current.value)
        console.log(data);
        // setThistUser(user)
        if(data && data.error)
        {
            alert(" שם ו/או סיסמא שגויים 😧")
            return;
        }
        myDispatch(setCurrentUser(data.user))
        navigate('/')

    }



    
    return (
        <>
            <br></br>
            <input type="text" placeholder="input name" ref={nameRef} ></input>
            <br></br>
            <input type="password" placeholder="input password" ref={passwordRef} ></input>
            <br></br>

            {/* <TextField label="input name"  margin="normal" ref={nameRef}></TextField>
            <br></br>
            <TextField label="input password" margin="normal" ref={passwordRef}></TextField> */}

            <button onClick={() => { signIn() }}>sign in</button>
        </>
    );
}
