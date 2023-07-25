
import cartReducers from '@/Reducer/cartReducer';
import { ProductReducer } from '@/Reducer/productReducer';
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const rootReducer = combineReducers({
    products:ProductReducer,
    cart:cartReducers
})

const store = createStore(rootReducer, enhancer);
export default store;
