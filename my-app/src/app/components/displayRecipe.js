import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addLikeToRecipe } from "../../services/recipeService";
import { addRecipeToUser } from "../../services/userServise";
import {setCurrentUser, setUsers} from '../redux/user/userAction'
// import store from "../redux/store";
export default function DisplayRecipe() {
    let location = useLocation();
    let dispatch = useDispatch()
    const recipeId = location.pathname[location.pathname.length - 1];
    // const recipe = store.recipes;
    let recipes = useSelector((store) => store.recipeStore.recipes);
    let recipe = recipes[recipeId - 1];
    // let instructions= recipe.instructions
    const currentUser = useSelector((store) => store.userStore.currentUser);

    async function addToMyFavorites() {
        if (currentUser.id !== 0) {
            await addLikeToRecipe(recipe.id);
        } else {
            alert("עדיין לא נרשמת? להרשמה לחץ כאן");
        }
    }
    async function addToMyRecipeList() { 

        let data = await addRecipeToUser(currentUser.id, recipe);
        console.log(data);
        dispatch(setUsers(data.users))
        dispatch(setCurrentUser(data.users.find(u=>u.id===currentUser.id)))
    }

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        addToMyFavorites();
                    }}
                >
                    👍
                </button>
                <br></br>
                <br></br>
                {currentUser.id !== 0 && (
                    <button
                        onClick={() => {
                            addToMyRecipeList();
                        }}
                    >
                        להוסיף למתכונים שלי😉
                    </button>
                )}
                <br></br>
                <br></br>
                {/* {
                    currentUser.id!= 0 && (
                        <button></button>
                    )
                } */}
                <h5>{recipe.type}</h5>
                <h2>{recipe.name}</h2>
                {recipe.ingredients &&
                    recipe.ingredients.map((ingredient) => {
                        return <p>{ingredient}</p>;
                    })}
                <h3>{recipe.instructions}</h3>
            </div>
        </>
    );
}
