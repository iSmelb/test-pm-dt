import { change_current_page, error_fetch, loading_summaries, loading_summariesWithPhoto } from "./types"

const initialState = {
    fetchedSummaries: [],
    pageCount: 0,
    currentPage: 1,
    error: false
}

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case loading_summaries:
            return {
                ...state,
                fetchedSummaries: action.payload.results,
                pageCount: action.payload.page_count,
                error: false
            }

        case loading_summariesWithPhoto:
            return {
                ...state,
                fetchedSummaries: action.payload.results,
                pageCount: action.payload.page_count,
                error: false
            }

        case error_fetch:
            return {
                ...state,
                error: action.error
            }
            
        case change_current_page:
            return {
                ...state,
                currentPage: action.page
            }    
        default: return state
    }
}