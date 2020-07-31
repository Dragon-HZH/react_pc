import api from './ajax'


const CXIPI = '/api'
//登录获取 token
// export const login = ()=>api(url,data,type);
export const login = (data)=>api(CXIPI+'/fpdk/access_token',data,'get');