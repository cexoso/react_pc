let reducerLogic = function (state = {}) {
    
    return state;
};
const Router = {
    path: "index",
    getComponents(location, cb) {
        require.ensure([], (require) => {
            const index = require('./index.jsx');
            cb(null, index.default);
            reducerLogic = index.reducer
        })
    },
    reducer(...arg) {
        return reducerLogic.apply(this,arg)
    }
}

export default Router;
