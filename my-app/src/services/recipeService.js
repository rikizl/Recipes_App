import axios from "axios";

const URL = 'http://localhost:4000/recipe/';
export function getAllRecipe(params) {

    return axios.get(URL+'getAllRecipes')
    .then((res) => {
        if (res && res.data )
            return res.data;
    })
    .catch((err) => { alert(err); })
}
export function addLikeToRecipe(id)
{
    return axios.post(URL+'addLikeToRecipe/'+id)
    .then((res)=>{
        if(res && res.data)
            return res.data;
    })
    .catch((error)=>alert(error))
}

export function addRecipeFromUser(recipe)
{
    return axios.post(URL+'addRecipe', recipe)
    .then((res)=>{
        if(res && res.data)
        return res.data;
    })
    .catch((error)=> alert(error))
}