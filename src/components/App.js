import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addReminder} from '../actions'

class App extends Component {
   constructor(props){
       super(props)
       this.state = {
           text:'',
       }
   }
   addReminder(){
       this.props.addReminder(this.state.text)
   }
   renderReminders(){
       return (
           <ul className="list-group col-sm-8 mt-Z">
              <li className="list-group-item">
                <div className="list-item">
                   <div>text</div>
                   <div>tiem</div>
                </div> 
              </li>
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
               </div> 
               <button type="button"
                       onClick={()=>this.addReminder()}
                       className="btn btn-success">Add Reminder</button>
            </div>
            {this.renderReminders()}
          </div>
       )
   } 
}
const mapStateToProps = (state) =>{
    return {
        reminders: state.reminders
    }
}
 

export default connect(mapStateToProps,{addReminder})(App)
