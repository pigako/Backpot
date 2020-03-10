import produce from 'immer';

export const initalState = {};

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default: {
        break;
      }
    }
  });
};

export default reducer;
