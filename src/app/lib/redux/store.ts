import { configureStore, Dispatch } from '@reduxjs/toolkit';
import thunk, {ThunkMiddleware, ThunkAction} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import { Action } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;