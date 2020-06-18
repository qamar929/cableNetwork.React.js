import axios from 'axios'
import {GET_ERRORS,GET_TRANSACTION, GET_RECORD, DELETE_RECORD,GET_RECORDS,GET_TRANSACTIONS,DELETE_TRANSACTION} from './types'


export const AddRecord = (newRecord , history) => async dispath => {

   await axios.post('/customer', newRecord)
    .then((res) =>{

     
      history.push('/dashboard')
       alert("Record successfully add")

    }).catch((err) => {
    
     
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}

export const updateRecord = (id,Record , history) => async dispath => {
   
   await axios.put(`/customer/${id}`, Record)
    .then((res) =>{

   
      history.push('/dashboard')
       

    }).catch((err) => {
    
     
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}

export const getRecords = () => async dispath => {

  await axios.get('/customer')
   .then((res) =>{

      dispath({type:GET_RECORD,payload:res.data})
  
   });

//sync => wait
//async = not wait

}


export const getRecord = (id) => async dispath => {

   await axios.get(`/customer/${id}`)
    .then((res) =>{
 
       dispath({type:GET_RECORDS,payload:res.data})
  
    });
 
 //sync => wait
 //async = not wait
 
 }
export const deleteRecord = (id) => async dispath => {
   
   await axios.delete( '/customer/'+id)
    .then((res) =>{

       dispath({type:DELETE_RECORD,payload:id})
    });
 
 //sync => wait
 //async = not wait
 
 }


 //// Transactions


 
export const createTransaction= (newTrans , history) => async dispath => {
  
   await axios.post(`/transaction/`, newTrans)
    .then((res) =>{

    
      history.push(`/transaction`)
       

    }).catch((err) => {
     
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}

export const getTransactions= () => async dispath => {

   await axios.get(`/transaction`)
    .then((res) =>{

       dispath({type:GET_TRANSACTIONS,payload:res.data})
    });
 
 //sync => wait
 //async = not wait
 
 }

 export const getTransaction= (id) => async dispath => {
   
   await axios.get(`/transaction/${id}`)
    .then((res) =>{

       dispath({type:GET_TRANSACTION,payload:res.data})
    });
 
 //sync => wait
 //async = not wait
 
 }
 
export const deleteTransaction = (id) => async dispath => {


   await axios.delete( `/transaction/${id}`)
    .then((res) =>{
 

       dispath({type:DELETE_TRANSACTION,payload:id})
    });
 
 //sync => wait
 //async = not wait
 
 }


 export const updateTransaction = (id,updatedTransaction , history) => async dispath => {

 
   await axios.put(`/transaction/${id}`, updatedTransaction)
    .then((res) =>{

     
      history.push(`/transaction`)
       

    }).catch((err) => {
    
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}


