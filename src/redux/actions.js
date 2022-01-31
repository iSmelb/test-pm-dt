import axios from "axios"
import { change_current_page, error_fetch, hide_loader, loading_summaries, loading_summariesWithPhoto, show_loader, switch_filtres, switch_filtres_with_photo } from "./types"

export function fetchSumarries(page = 1) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get('http://135.181.30.244:27007/api/summaries/?page=' + page)
            console.log(response)
            dispatch({ type: loading_summaries, payload: response.data })
        } catch (e) {
            dispatch(
                {
                    type: error_fetch, error: e.message
                }
            )
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function fetchSumarriesWhithPhoto() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get('http://135.181.30.244:27007/api/summaries/?photo=true')
            console.log(response)
            dispatch({ type: loading_summariesWithPhoto, payload: response.data })
        } catch (e) {
            dispatch(
                {
                    type: error_fetch, error: e.message
                }
            )
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function changeCurrentPage(page) {
    return {
        type: change_current_page,
        page
    }
}

export function showLoader() {
    return {
        type: show_loader
    }
}

export function hideLoader() {
    return {
        type: hide_loader
    }
}

export function switchFiltresStatus() {
    return {
        type: switch_filtres
    }
}

export function switchFiltresPhoto() {
    return {
        type: switch_filtres_with_photo
    }
}