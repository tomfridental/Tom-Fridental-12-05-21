import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';

// import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
