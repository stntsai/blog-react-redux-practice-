import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPosts=()=>{
    return {
        type: 'FETCH_POSTS'
    }
}