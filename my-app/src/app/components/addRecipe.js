import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addRecipeFromUser} from '../../services/recipeService';
import { addRecipeToUser } from "../../services/userServise";
import { setRecipes } from "../redux/recipe/recipeAction";
import { setCurrentUser } from "../redux/user/userAction";
export default function AddRecipe(){
    const currentUser = useSelector((store) => store.userStore.currentUser);
    const dispatch= useDispatch()
    const nameRef =useRef(null)
    const typeRef =useRef(null)
    const levelRef =useRef(null)
    const meatyOrDairyRef =useRef(null)
    const imageRef =useRef(null)
    const ingredientsRef =useRef(null)
    const instructionsRef =useRef(null)


    async function addRecipeToThisUser()
    {
        let recipe = {
            id : 5, 
            name: nameRef.current.value , 
            type: typeRef.current.value ,
            level: levelRef.current.value ,
            meatyOrDairy: meatyOrDairyRef.current.value ,
            image: imageRef.current.value ,
            ingredients: ingredientsRef.current.value ,
            instructions: instructionsRef.current.value ,
            like:0
        }
        let user=await addRecipeToUser(currentUser.id,recipe)
        dispatch(setCurrentUser(user))
    }
    function addRecipeToEveryOne()
    {
        let recipe = {
            name: nameRef.current.value , 
            type: typeRef.current.value ,
            level: levelRef.current.value ,
            meatyOrDairy: meatyOrDairyRef.current.value ,
            image: imageRef.current.value ,
            ingredients: ingredientsRef.current.value ,
            instructions: instructionsRef.current.value ,
            like:0
        }
        addRecipeFromUser(recipe)
    }
    return(
        <>
        <input type="text" placeholder="שם מתכון" ref={nameRef}></input><br></br>
        <input type="text" placeholder="סוג" ref={typeRef}></input><br></br>
        <input type="text" placeholder="רמת קושי" ref={levelRef}></input><br></br>
        <input type="text" placeholder="חלבי/ בשרי / פרווה" ref={meatyOrDairyRef}></input><br></br>
        <input type="text" placeholder=" תמונה" ref={imageRef}></input><br></br>
        <input type="text" placeholder="רכיבים" ref={ingredientsRef}></input><br></br>
        <input type="text" placeholder="הוראות הכנה" ref={instructionsRef}></input><br></br>
        <button onClick={()=>{addRecipeToEveryOne()}} >פרסום לכולם</button> |   <button onClick={()=>{addRecipeToThisUser()}}>הוספה לספר מתכונים האישי</button>
        </>
    )
}