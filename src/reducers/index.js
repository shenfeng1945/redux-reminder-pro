import {ADD_REMINDER,REMOVE_REMINDER,CLEAR_REMINDERS} from '../constants'
import {bake_cookie,read_cookie} from 'sfcookies'

const reminder = (action) =>{
    const {text,time} = action
    return {
        id: Math.random(),
        text,
        time,
    }
}
const reminders = (state=read_cookie('reminders')||[],action={}) =>{
    let array = null
    switch(action.type){
        case ADD_REMINDER:
        array = [
            ...state,
            reminder(action)
        ]
        bake_cookie('reminders',array)
        return array;
        case REMOVE_REMINDER:
        array = state.filter(item=>item.id!== action.id)
        bake_cookie('reminders',array)
        return array;
        case CLEAR_REMINDERS:
        array = []
        bake_cookie('reminders',array)
        return array
        default: return state;
    }
}
export default reminders