import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router,browserHistory} from "react-router";
import rootRoute,{reducer} from "./pages/router.jsx";
import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
// import immutable from "immutable";
import '../base.scss';
import '..css/components.scss';
const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);
const rootElement = document.getElementById('container');
render((
    <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
    </Provider>
), rootElement);
store.dispatch((dispatch)=>{
    dispatch({type: "__"})
    dispatch({type: "__"})
    dispatch({type: "__"})
});

window.store = store;
window.reducer = reducer;
