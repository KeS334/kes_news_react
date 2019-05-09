import {combineReducers} from "redux";
import NewsReducer from "./news"
import ActiveNews from "./news-active"
const allReducers =  combineReducers({
    news: NewsReducer,
    active: ActiveNews
});

export default allReducers;
