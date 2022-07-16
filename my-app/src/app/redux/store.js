import { combineReducers, createStore } from "redux";
import  recipeStore from './recipe/recipeStore'
import  userStore from './user/userStore'



const reducer = combineReducers({recipeStore, userStore})


//יצירת הסטור, פונקציה המיובאת מרידקס
const store = createStore(reducer);
//פרסום הסטור לכל חלון האפליקציה
window.store = store;
// פרסום הסטור החוצה באופן כללי
export default store;