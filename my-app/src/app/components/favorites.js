import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export function Favorite(props) {
  const currentUser = useSelector((store) => store.userStore.currentUser);
  const navigate = useNavigate();
  const style = {
    border: '1px black solid',
    height: '200px',
    width: '200px',
    display: 'inline-block',
    margin: '2%',
    cursor: 'pointer'
}

  return (<>{
    currentUser && currentUser.recipeList && currentUser.recipeList.map
    ((recipe) => {
        return (
            <div key={recipe.id} style={style} onClick={() => {
                navigate('/favorite/recipe/'+recipe.id)
            }}>
                <p>{recipe.image}</p>
                <p>{recipe.name}</p>
                <p>👍 {recipe.like}</p>
            </div>
        ) 
    })
  }</>)
}
