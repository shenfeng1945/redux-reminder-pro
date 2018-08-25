import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addReminder,removeReminder,clearReminders} from '../actions'
import PropTypes from 'prop-types'
import moment from 'moment'

class App extends Component {
   constructor(props){
       super(props)
       this.state = {
           text:'',
           time:''
       }
   }
   addReminder(){
       this.props.addReminder(this.state.text,this.state.time)
   }
   removeReminder(id){
      this.props.removeReminder(id);
   }
   clearReminders(){
       this.props.clearReminders()
   }
   renderReminders(){
       const {reminders} = this.props
       return (
           <ul className="list-group col-sm-8 mt-Z">
              {reminders.map(item=>{
                 return (
                  <li key={item.id} className="list-group-item">
                    <div className="list-item">
                     <div>{item.text}</div>
                     <div>{moment(new Date(item.time)).fromNow()}</div>
                    </div>
                    <div className="close" onClick={()=>this.removeReminder(item.id)}>X</div> 
                  </li>
                 ) 
              })}
             
           </ul>
       )
   }
   render(){
       return (
          <div className="App">
            <div className="title">Reminder Pro</div> 
            <div className="form-inline">
               <div className="form-group">
                 <input type="text" 
                        className="form-control" 
                        placeholder="I have to..."
                        onChange={(event)=>this.setState({text:event.target.value})}
                        />
                <input type="datetime-local" 
                       onChange={(event)=>this.setState({time:event.target.value})}
                       className="form-control"/>
               </div> 
               <button type="button"
                       onClick={()=>this.addReminder()}
                       className="btn btn-success">Add Reminder</button>
            </div>
            {this.renderReminders()}
            <div className="btn btn-danger mt-3"
                 onClick={()=>this.clearReminders()}>Clear All Reminders</div>
          </div>
       )
   } 
}
const mapStateToProps = (state) =>{
    return {
        reminders: state
    }
}
 
App.propTypes = {
    reminders: PropTypes.array.isRequired,
    addReminder: PropTypes.func.isRequired,
}
export default connect(mapStateToProps,{addReminder,removeReminder,clearReminders})(App)
