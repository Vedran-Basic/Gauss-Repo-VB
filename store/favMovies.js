export  const state = () =>({
    currentMovie : {},
    favMoviesList : [ ]
} )

export const mutations = {
    tempStoreMovie(state, data){
        this.state.currentMovie=data
    },
    removeCurrentMovie(){
        this.state.currentMovie={}
    },
    addToFavs(state, payload){
        this.state.favMoviesList.push(payload)
        console.log(this.favMoviesList)
    }
}

export const actions = {
    handle({commit}, data){
        commit('tempStoreMovie', data)
    }
}