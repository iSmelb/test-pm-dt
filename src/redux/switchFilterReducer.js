import { switch_filtres, switch_filtres_with_photo } from "./types"

const initialState = {
    active: false,
    photo: false
}

export const switchFiltres = (state = initialState, action) => {
    switch (action.type) {
        case switch_filtres:
            return {
                ...state,
                active: !state.active
            }

        case switch_filtres_with_photo:
            return {
                ...state,
                photo: !state.photo
            }
            
        default: return state
    }
}