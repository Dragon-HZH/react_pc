import axios from 'axios'
import store from './../store'

// import QS from 'qs'


export default function ajax(url,data={},type,reqType=false){
    return new Promise((resolve, reject) => {
    let res;
    if(type==="get"){
        res = axios.get(
            url,
            {
                params:data
            },
            {
                headers:{token:store.getState().redux_1.token}
            }
        )
    }else if(type === "post" ){
        //是否上传请求
        if(reqType){
            res = axios.post(
                url,
                data,
                {headers: { token: '' ,'Content-Type':'multipart/form-data'},}
            )
        }else{
            res = axios.post(
                url,
                data,
                {
                    headers: { token: store.getState().redux_1.token ,},
                }
            )
        }
    }
    res.then(res=>{
        if(res.status===200){
            // console.log("请求成功")
            resolve(res.data)
        }
    })
    // return res
    })
}