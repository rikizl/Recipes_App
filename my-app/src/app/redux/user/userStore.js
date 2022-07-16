import produce from 'immer';

const initialState={
    users:[],
    currentUser:{id:0}
}
const reducer= produce((state, action)=>{
    switch (action.type){
        case 'LOAD_USERS':
            state.users = action.payload;
            break;
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;  
        default:
            break;
    }
},initialState);

export default reducer;
