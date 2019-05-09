export const select = (news) =>{
    console.log('news', news);
    return {
        type: "NEWS_SELECTED",
        payload: news
    }
};
