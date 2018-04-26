import Cookies from 'js-cookie';
import request from './request';

const loginUser = () => {
    return Cookies.get('current-user');
}

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'object'; 
}

async function login() {
    let access_token = sessionStorage.getItem('access_token');
    const response = await request('/api/token/' + access_token, {
        method: 'GET',
        credentials: 'include'
    });
    const userInfo = response.data;
    Cookies.set('current-user', userInfo);
}

export {
    loginUser,
    isLogin,
    login
};
