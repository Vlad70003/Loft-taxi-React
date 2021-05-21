import {LOG_IN, LOG_OUT, SAVE_CARD} from '../actions.js';

const initialState = {
	isLoggedIn: false,
  saveCard: Boolean,
  cardNumber: '',
  expiryDate: '',
  cardName: '',
  cvc: '',
  token: ''
}

export default function(state = initialState, action){
	switch(action.type) {
  	case LOG_IN: {
    return {isLoggedIn: true}
    }
    case LOG_OUT: {
    return {isLoggedIn: false}
    }
    case SAVE_CARD: {
      if(action.cardNumber.payload == undefined || 
        action.expiryDate.payload == undefined || 
        action.cardName.payload == undefined || 
        action.cvc.payload == undefined || 
        action.token.payload == undefined){
          return initialState.saveCard = false;
        } else {
          return initialState.saveCard = true;
        }
    }

    default: 
    return state;
  }
}