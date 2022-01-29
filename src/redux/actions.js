import axios from "axios"
import { loading_summaries, switch_filtres } from "./types"

export function fetchSumarries(page = 1) {
    return async dispatch => {
        const response = await axios.get('http://135.181.30.244:27007/api/summaries/?page=' + page)
        dispatch({type: loading_summaries, payload: response.data})
    }
}

export function switchFiltresStatus() {
    return {
        type: switch_filtres
    }
}