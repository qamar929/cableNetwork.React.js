import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Nav from './component/shared/Nav'
import Welcome from './component/Welcome'
import './App.css';
import Dashboard from './component/dashboard/dashboard';
import NotFound from './component/shared/NotFound';
import CustomerRecord from './component/dashboard/dashboardOperations/CustomerRecord';
import { Provider } from 'react-redux';
import store from './Store'
import UpdateRecord from './component/dashboard/dashboardOperations/UpdateRecord';
import Transaction from './component/transactions/Transaction';
import AddTransaction from './component/transactions/transactionOperations/AddTransaction';
import EditTransactions from './component/transactions/transactionOperations/EditTransactions';
import 'react-app-polyfill/stable'

function App() {
  return (
  

    <Provider store={store}>

    
    <BrowserRouter>
    
    <Route path='/' component={Nav}></Route>
    <Switch>
    
   <Route path='/' exact component={Welcome}></Route>

   <Route path='/dashboard' exact component={Dashboard}></Route>
   <Route path='/addRecord' exact component={CustomerRecord}></Route>
   <Route path='/updateRecord/:id' exact component={UpdateRecord}></Route>

   <Route path="/transaction" exact component={Transaction} />
   <Route path="/trns/add" exact component={AddTransaction}/>
   <Route path="/trns/edit/:id" exact component={EditTransactions}/>
   <Route path='/' component={NotFound}></Route>

    </Switch>
    </BrowserRouter>

    
    </Provider>
  );
}

export default App;
