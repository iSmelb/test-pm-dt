import { change_current_page, loading_summaries, loading_summariesWithPhoto } from "./types"

const initialState = {
    fetchedSummaries: [],
    pageCount: 0,
    currentPage: 1
}

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case loading_summaries:
            return {
                ...state,
                fetchedSummaries: action.payload.results,
                pageCount: action.payload.page_count
            }

        case loading_summariesWithPhoto:
            return {
                ...state,
                fetchedSummaries: action.payload.results,
                pageCount: action.payload.page_count,
            }
            
        case change_current_page:
            return {
                ...state,
                currentPage: action.page
            }    
        default: return state
    }
}