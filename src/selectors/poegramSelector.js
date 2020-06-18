export const getPoegrams = state => state.poegramsReducer;
export const getFirstPoegram = state => state.poegramsReducer[0];
export const getPoegramColor1 = (state) => state.poegramsReducer[0].colors[0];
export const getPoegramColor2 = (state) => state.poegramsReducer[0].colors[1];
export const getPoegramText = (state) => state.poegramsReducer[0].poemId.lines;
