import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import { MatcherReducer } from 'containers/GameMatcher/reducer';

const RootReducer = combineReducers({
    authReducer: AuthReducer,
    matcherReducer: MatcherReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
