import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authreducer from "./reducers/AuthReducer.js";
import thunk from "redux-thunk";
import authErrorReducer from "./reducers/AuthErrorReducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import userReducer from '../redux/reducers/UserReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  currentUser: {
    user: [],
  }
};

const rootReducer = combineReducers({
  authState: authreducer,
  authError: authErrorReducer,
  currentUser: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log('encryption error', Error)
            }
        })
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(configureStore)