import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import { HomeReducer } from 'containers/Home/reducer';

const RootReducer = combineReducers({
    authReducer: AuthReducer,
    homeReducer: HomeReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
