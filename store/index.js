//
export const state =()=>{
    return {
        posts:{},
        items:{}
    }
}

//getters
export const getters = {
    posts(state){
        return state.posts
    }
}

//Mutations
export const mutations = {
    SET_POSTS(state, posts){
        return state.posts = posts;
    }
}

//actions
export const actions ={
    setPosts({commit}, posts){
        commit("SET_POSTS", posts)
    }
}