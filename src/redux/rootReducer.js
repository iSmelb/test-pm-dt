import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { resumeReducer } from "./resumeReducer";
import { switchFiltres } from "./switchFilterReducer";

export const rootReducer = combineReducers({
    summaries: resumeReducer, 
    switchFiltres: switchFiltres,
    app: appReducer
})