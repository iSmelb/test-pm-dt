import { loading_summaries } from "./types"

const initialState = {
    fetchedSummaries: [],
    pageCount: 0
}

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case loading_summaries:
            return {
                ...state,
                fetchedSummaries: action.payload.results,
                pageCount: action.payload.page_count
            }

        default: return state
    }
}