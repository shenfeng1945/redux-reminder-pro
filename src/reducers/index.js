import {ADD_REMINDER} from '../constants'

const reminder = (action) =>{
    const {text,time} = action
    return {
        id: Math.random(),
        text,
        time,
    }
}
const reminders = (state=[],action={}) =>{
    switch(action.type){
        case ADD_REMINDER:
        return [
            ...state,
            reminder(action)
        ]
        default: return state;
    }
}
export default reminders