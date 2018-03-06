import axios from 'axios';

//data
const initialState = {
    user: {},
}



//types

const GET_USER_INFO = "GET_USER_INFO";



//action builder
//43F
export function getUserInfo() {
    let promise = axios.get('/api/me')
    promise.then(user => {
        return user.data
    })
    return {
        type: GET_USER_INFO,
        payload: promise
    }
}






//switch
//43E
//43D
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + "_FULFILLED":
            return Object.assign({}, state, { user: action.payload })
        default: return state
    }
}