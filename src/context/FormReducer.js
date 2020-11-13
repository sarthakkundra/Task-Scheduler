import {  FILL_FORM1, FILL_FORM2 } from  './types';

export default (state, action) =>  {
    switch(action.type) {
        case  FILL_FORM1: {
            return {
                ...state,
                name: action.paylaod.name,
                day:  action.payload.day,
                month: action.payload.month,
                year: action.payload.year
            }
        }

        case FILL_FORM2: {
            return {
                ...state,
                
            }

        }

        default:
            return state;

    }
}