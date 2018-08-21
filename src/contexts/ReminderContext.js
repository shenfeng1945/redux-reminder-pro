import React,{Component,createContext} from 'react'
import { bake_cookie, read_cookie } from 'sfcookies';

export const ReminderContext = createContext()

export class ReminderProvider extends Component {
    state = {
        reminders: read_cookie("reminders") || []
    }
    addReminder = (text,dueDate)=>{
        let reminders = []
        reminders = [
            ...this.state.reminders,
            {id:Math.random(),text,dueDate}
        ]
        this.setState({reminders})
        bake_cookie("reminders", reminders);
    }
    deleteReminder = (id) =>{
        let reminders = []
        reminders = this.state.reminders.filter(reminder => reminder.id !== id);
        this.setState({reminders})
        bake_cookie("reminders", reminders);
    }
    clearReminders = () =>{
        let reminders = [];
        this.setState({reminders})
        bake_cookie("reminders", reminders);
    }
    render(){
        return (
           <ReminderContext.Provider value={{
              reminders: this.state.reminders,
              addReminder: this.addReminder,
              deleteReminder: this.deleteReminder,
              clearReminders: this.clearReminders
           }}>
             {this.props.children}
           </ReminderContext.Provider>
        )
    }
}
