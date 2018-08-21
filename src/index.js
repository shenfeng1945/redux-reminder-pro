import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {ReminderContext,ReminderProvider} from './contexts/ReminderContext'



ReactDOM.render(
   <ReminderProvider>
     <ReminderContext.Consumer>
       {({reminders,addReminder,deleteReminder,clearReminders})=>(
         <App addReminder={addReminder} 
              reminders={reminders} 
              clearReminders={clearReminders}
              deleteReminder={deleteReminder}/>
       )}
     </ReminderContext.Consumer>
   </ReminderProvider>,
  document.getElementById('root')
);
registerServiceWorker();
