import axios from "axios";

const URL='http://localhost:4000/user/';
export function getAllUsers(){
    return axios.get(URL+'getAllUsers')
    .then((res)=>{
        if(res && res.data)
            return res.data;
    })
    .catch ((err)=>alert(err))
}
export function addUser(user){
    return axios.post(URL+'addUser', user )
        .then((res)=>{
            if(res && res.data)
                return res.data;
        })
        .catch((err)=>alert(err))
}
export function login(name, password)
{
    return axios.get(URL+'login'+'/'+name+'/'+password)
    .then((res)=>{
        if(res && res.data)
            return res.data;
    })
    .catch((err)=>{alert(err)})
}

export function addRecipeToUser(id, recipe)
{
    return axios.post(URL+'addRecipeToUser/'+id, recipe)
    .then((res)=>{
        if(res && res.data)
          return res.data;
    })
    .catch((err)=>alert(err))
}