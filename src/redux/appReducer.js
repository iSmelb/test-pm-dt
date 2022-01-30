import { hide_loader, show_loader } from "./types"

const initialState = {
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case show_loader:
            return {
                ...state,
                loading: true
            }

        case hide_loader:
            return {
                ...state,
                loading: false
            }
            
        default: return state
    }
}