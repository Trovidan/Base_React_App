import axios from '../../utils/axios';
import { INITIATE_RESET_PASSWORD } from '../../utils/adapter_route';
import {IMPROPER_REQUEST,ERROR} from '../../utils/status'

export default function send_mail(email){
    let params ={
        email: email,
    }
    return new Promise((resolve,reject)=>{
        if(!verify_params(params)){
            reject({status: IMPROPER_REQUEST, payload: "Valid email required!"});
            return;
        }

        axios.post(INITIATE_RESET_PASSWORD,params)
        .then((result)=>{
            resolve(result.data);
        })
        .catch((err)=>{
            if(err.response && err.response.data)   
                reject(err.response.data);
            reject({
                status: ERROR,
                payload: "Something went wrong!",
            });
        })
    })

} 

const verify_params = ({email})=>{

    if(!email){
        return false;
    }else {
        return true;
    }
}