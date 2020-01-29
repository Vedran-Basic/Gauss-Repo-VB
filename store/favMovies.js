export  const state = () =>({
    currentMovie : {},
    favMoviesList : [ ]
} )

export const mutations = {
    tempStoreMovie(state, data){
        state.currentMovie=data
    },
    removeCurrentMovie(){
        state.currentMovie={}
    },
    addToFavs(state, payload){
        state.favMoviesList.push(payload)
    }
}

export const actions = {
    storeMovie({commit}, data){
        commit('tempStoreMovie', data)
    },
    addToFavorites({commit}, data){
        commit('addToFavs', data)
    }
}