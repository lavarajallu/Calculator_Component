import {createStore,compose, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // For redux debugging ->  Refer -- > https://blog.reactnativecoach.com/debugging-react-native-and-redux-with-react-native-debugger-62f6ceef3033

const middleware = [thunk];

const reducer = combineReducers({
// here we can write the components
})

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
)