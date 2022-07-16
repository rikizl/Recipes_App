import produce from 'immer';

const initialState={
    recipes: [],
}
const reducer= produce((state, action)=>{
    switch (action.type){
        case 'LOAD_RECIPES':
            state.recipes = action.payload;
            break;
        default:
            break;
    }
},initialState);

// const recipeStore=createStore(reducer);
// window.store=recipeStore;
export default reducer;
