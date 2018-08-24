import {ADD_REMINDER,REMOVE_REMINDER} from '../constants'
export const addReminder = (text,time)=>{
    return {
        type: ADD_REMINDER,
        text,
        time,
    }
}
export const removeReminder = (id) =>{
    return {
        type: REMOVE_REMINDER,
        id,
    }
}