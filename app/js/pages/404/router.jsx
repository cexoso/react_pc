const reducerLogic = function (state = {}) {
    
    return state;
};
const Router = {
    path: "*",
    getComponents(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./index.jsx').default)
        })
    },
    reducer(...arg) {
        return reducerLogic.apply(this,arg)
    }
}
export default Router
