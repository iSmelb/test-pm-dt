import { switch_filtres } from "./types"

const initialState = {
    active: false,
}

export const switchFiltres = (state = initialState, action) => {
    switch (action.type) {
        case switch_filtres:
            return {
                ...state,
                active: !state.active
            }

        default: return state
    }
}