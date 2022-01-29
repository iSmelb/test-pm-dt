import { combineReducers } from "redux";
import { resumeReducer } from "./resumeReducer";
import { switchFiltres } from "./switchFilterReducer";

export const rootReducer = combineReducers({
    summaries: resumeReducer,
    switchFiltres: switchFiltres
})