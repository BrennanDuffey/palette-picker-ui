const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PALETTES':
      return action.palettes
    default:
      return state
  };
};

export default palettesReducer;