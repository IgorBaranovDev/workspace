import { combineReducers } from "redux";

import auth from './authReducer';
import workspaces from './workspacesReducer';

const rootReducer = combineReducers({
    auth,
    workspaces
});

export default rootReducer;
