import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
    return async function(dispatch, getState){
        await dispatch(fetchPosts())
        console.log(getState().posts)
        const uniqueUId = _.uniq(_.map(getState().posts, "userId"))
        console.log(uniqueUId)
        uniqueUId.forEach(id=> dispatch(fetchUser(id)))
    }
}

export const fetchPosts = () => {
    return async function(dispatch, getState){
        const results = await jsonPlaceHolder.get("/posts")
        dispatch({type: "FETCH_POST", payload: results.data})
    }    
}

export const fetchUser = (id) => {
    return async function(dispatch, getState){
        const results = await jsonPlaceHolder.get(`/users/${id}`)
        dispatch({type: "FETCH_USER", payload: results.data})
    }    
}
