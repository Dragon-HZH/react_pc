const initialState = {
    token: '',
    userName: ''
  };
  
export default function someApp(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_TOKEN':
        return { ...state, token: action.text };
      case 'CHANGE_USERNAME':
        return { ...state, userName: action.text };
      default:
        return state
    }
  }