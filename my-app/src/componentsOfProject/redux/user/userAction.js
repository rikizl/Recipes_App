
export function setUsers(data){
    return { type:'LOAD_USERS', payload:data}
}

export function setCurrentUser(data){
    return { type:'SET_CURRENT_USER' , payload:data}
}

export function addToMyRecipesList(id, recipe)
{
    console.log("action");
    return {type:'ADD_TO_MY_RECIPES_LIST', payload:{"id":id, "recipe":recipe}}
}