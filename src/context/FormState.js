import React, { useReducer } from 'react';

import FormContext from './FormContext';
import FormReducer from './FormReducer';
import { FILL_FORM1, FILL_FORM2 } from './types';

const FormState = (props) => {

    const initialState = {
        name: "",
        user_id:  1,
        day: null,
        month: null,
        year: null,
        startHr: null,
        startMin: null,
        startZone:  null,
        endHr: null,
        endMin:  null,
        endZone: null
    }

    const  [ state, dispatch ] = useReducer(FormReducer, initialState);

    const fillForm1 = (details) => {

        dispatch({ type: FILL_FORM1, payload: details})

    }
}