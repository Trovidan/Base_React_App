import axios from '../../utils/axios'
import {COMPLETE_RESET_PASSWORD} from '../../utils/adapter_route'
import {IMPROPER_REQUEST,ERROR} from '../../utils/status'

export default function set_new_password(token, new_password){
    let params = {
        token: token,
        password: new_password,
    }
    return new Promise ((resolve,reject)=>{
        if(!verify_params(params)){
            reject({status: IMPROPER_REQUEST, payload: "Valid token and pass required"});
            return;
        }

        axios.post(COMPLETE_RESET_PASSWORD,params)
        .then(result =>{
            resolve(result.data);
        })
        .catch(err=>{
            if(err.response && err.response.data)   
                reject(err.response.data);
            reject({
              status: ERROR,
              payload: "Something went wrong!",
            });
        })

    })   
}

const verify_params = ({token, password})=>{

    if(!token || !password){
        return false;
    }else {
        return true;
    }
}