export  const state = () =>({
    currentMovie : {},
    favMoviesList : [ ]
} )

export const mutations = {
    tempStoreMovie(state, data){
        state.currentMovie=data
    },
    removeFromFavs(state, payload){
        state.favMoviesList = state.favMoviesList.filter(item => payload!==item)
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
    },
    removeFromFavorites({commit}, data){
        commit('removeFromFavs', data)
    },
    async fetchSingleMovie({commit}, payload){
        console.log(" bla2")
        payload.$axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${payload.omdbID}`).then(({data})=>{
        commit('tempStoreMovie', data)
    })
    }


    
}
