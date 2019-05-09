const initialState = {
    news: []
}
export default  function (state=initialState, action) {

    switch (action.type) {
        case "NEWS_SELECTED":
            return action.payload;
            break;
        default:
            return state;
        
    }
}