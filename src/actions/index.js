import {ADD_REMINDER,REMOVE_REMINDER,CLEAR_REMINDERS} from '../constants'
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
export const clearReminders = () =>{
    return {
        type: CLEAR_REMINDERS
    }
}