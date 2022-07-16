import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../services/userServise";
export function SignUp(props) {

    const nameRef = useRef('');
    const passwordRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const nevigate = useNavigate();

    async function signUp(){
        let data = {id:3,
                    name:nameRef.current.value , 
                    email:emailRef.current.value,
                    password: passwordRef.current.value,
                    address: addressRef.current.value,
                    recipeList:[] }
        console.log(data);
        await addUser(data);
        nevigate('/signIn')
        
        // console.log(res);

    }

    return (
        <>
            <input type="text" placeholder="שם פרטי" ref={nameRef} ></input>
            <br />
            <input type="text" placeholder="שם משפחה"></input>
            <br />
            <input type="text" placeholder="סיסמא" ref={passwordRef} ></input>
            <br />
            <input type="text" placeholder="מייל" ref={emailRef} ></input>
            <br />
            <input type="text" placeholder="כתובת" ref={addressRef} ></input>
            <br />
            <button onClick={()=>{signUp()}}>הרשמה</button>
            <br />

        </>
    )
}