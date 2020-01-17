export default (state, action) => {
  switch (action.type) {
    case 'checked':
      if(action.completed === false) {
        return [
          ...state,
          {
          id: action.payload,
          completed: action.completed
        }
      ]
      } else {
         return state.filter(el => el.id !== action.payload)
      } 
    default:
      return state;
  }
}
