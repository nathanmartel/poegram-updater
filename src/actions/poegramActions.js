export const GET_RANDOM = 'GET_RANDOM';
export const getRandom = () => ({
  type: GET_RANDOM
});

export const SET_POEGRAM = 'SET_POEGRAM';
export const setPoegram = (poegram) =>  ({
  type: SET_POEGRAM,
  payload: poegram
});
