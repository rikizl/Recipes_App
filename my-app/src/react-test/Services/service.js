import axios from "axios";


export function getAll() {
    return axios.get('data.json')
    .then((res) => {
        console.log("res", res.data);
        if (res && res.data )
        {
            console.log("ok");
            return res.data;

        }
    })
    .catch((err) => { alert(err); })
}