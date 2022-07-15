import React from "react";
import { useEffect, useState } from "react"
import { getAllRecipe } from '../../services/recipeService'
import { useDispatch } from "react-redux"
import { setRecipes } from '../redux/recipe/recipeAction';
import {
    useNavigate
} from "react-router-dom";
export default function AllRecipies(){
    let myDispatch = useDispatch();
    let navigate = useNavigate();
    const [myFilter, setMyFilter] =useState('');
    const [recipesList, setRecipesList] = useState([]);

    const style = {
        border: '1px black solid',
        height: '200px',
        width: '200px',
        display: 'inline-block',
        margin: '2%',
        cursor: 'pointer'
    }
    useEffect(async () => {
        let recipesFromServer = await getAllRecipe();
        console.log(recipesFromServer);
        setRecipesList(recipesList.concat(recipesFromServer))
        myDispatch(setRecipes(recipesFromServer))
    }, [])


    return(
        <>
        <input type="text" placeholder="search..."  onChange={(e)=>{ setMyFilter(e.target.value)}}></input>
        <br></br>
        <div>
        {
            recipesList &&
                recipesList.filter(recipe => recipe.name.includes(myFilter)).map((recipe) => {
                return (
                    <div key={recipe._id} style={style} onClick={() => {
                        navigate('/recipe/'+recipe.id)
                    }}>
                        <p>{recipe.image}</p>
                        <p>{recipe.name}</p>
                        <p>👍 {recipe.like}</p>
                    </div>
                ) 
            })
        }
        </div>
        </>
    )
}