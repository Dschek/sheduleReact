import axios from 'axios'

//Auth

function initJWT() {
    try {
        let jwt = localStorage.getItem('JWT');
        if (jwt) {
            axios.defaults.headers = { Authorization: jwt }
            return jwt;
        }
    } catch (err) {
        console.log(err)
    }
    return null;
}
function logout() {
    localStorage.removeItem('JWT')
    axios.defaults.headers = { Authorization: '' }
}
async function login(data) {
    try {
        const res = (await axios.post('/auth/signin', data)).data;
        if (res.token) {
            localStorage.setItem('JWT', res.token)
            axios.defaults.headers = { Authorization: res.token }
        }
        return res;
    } catch (err) {
        console.log(err);
        return 0;
    }
}
async function registration(data) {
    try {
        return (await axios.post('/auth/signup', data)).data.status;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

//User

async function getUserData(id) {
    try {
        console.log(axios.defaults.headers)
        return (await axios.get('/admin/user' + (id ? '/' + id : ''))).data
    } catch (err) {
        console.log(err)
        return {}
    }
}
async function getEmployees() {
    try {
        return (await axios.get('/admin/user/all')).data
    } catch (err) {
        console.log(err)
        return {}
    }
}

//Servis

async function getServis() {
    try {
        return (await axios.get('/admin/user/all')).data
    } catch (err) {
        console.log(err)
        return {}
    }
}

//Kitchen

async function getKitchen() {
    try {
        return (await axios.get('/admin/user/all')).data
    } catch (err) {
        console.log(err)
        return {}
    }
}

//Good

async function getGoods() {
    try {
        return (await axios.get('/good/all')).data
    } catch (err) {
        console.log(err)
        return {}
    }
}
async function getGood(id) {
    try {
        return (await axios('/good/' + id)).data
    } catch (err) {
        console.log(err)
        return {}
    }
}
async function sendGood(data, id) {
    try {
        if (id) {
            return (await axios.post('/admin/good/edit', data)).data.status;
        }
        return (await axios.post('/admin/good/add', data)).data.status;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

//Category

async function getCategory(id) {
    try {
        return (await axios('/category/' + id)).data
    } catch (err) {
        console.log(err)
        return {}
    }
}
async function getCategories() {
    try {
        return (await axios('/category/all')).data
    } catch (err) {
        console.log(err)
        return {}
    }
}
async function sendCategory(data, id) {
    try {
        if (id) {
            return (await axios.post('/admin/category/edit', data)).data.status;
        }
        return (await axios.post('/admin/category/add', data)).data.status;
    } catch (err) {
        console.log(err);
        return 0;
    }
}




export { initJWT, logout, login, registration, getUserData, getEmployees, getServis, getKitchen, getGoods, getGood, sendGood, getCategory, getCategories, sendCategory }