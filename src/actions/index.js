export const fetchedHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching())
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}


export const deletedHeroes = (request, id) => (dispatch) => {
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
        .then(dispatch(heroesDeleted(id)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchedFilters = (request) => (dispatch) => {
    request('http://localhost:3001/filters')
        .then(data => dispatch(filtersFetched(data)))
        .catch(err => console.log(err))
}


export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDeleted = (id) => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
}


export const heroesCreated = (newHeroes) => {
    return {
        type: 'HEROES_CREATE',
        payload: newHeroes
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersChoosed = (activeFilter) => {
    return {
        type: 'FILTERS_CHOOSED',
        payload: activeFilter
    }
}


// export const filtersChoosed = (activeFilter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(
//             {
//                 type: 'FILTERS_CHOOSED',
//                 payload: activeFilter
//             })
//     }, 1000)
// }

export const editHero = (updatedHero) => {
    return {
        type: 'EDIT_HERO',
        payload: updatedHero
    }
}

export const selectEditHero = (id) => {
    return {
        type: 'SELECT_EDIT_HERO',
        payload: id
    }
}

