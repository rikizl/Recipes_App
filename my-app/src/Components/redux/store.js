import preduce from 'immer'
import { createStore } from 'redux'

const intialState = {
    users:[
        {
            name:"Riki",
            id:1
        },
        {
            name:"Sari",
            id:2
        },
        {
            name:"Ayala",
            id:3
        },
        {
            name:"Shani",
            id:4
        }
    ],
    currentUser:{
        name:"Sari",
        id:2
    },
    weather:"nice day"
  //  recipes: []
}
const reducer = preduce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.payload)
            break;
        // case 'SET_RECIPES':
        //     state.recipes = action.payload
        //     break;
        default:
            break;
    }
}, intialState)

const store = createStore(reducer);
window.store = store;
export default store;
