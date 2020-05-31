import axios from 'axios'
import {GET_ERRORS, GET_RECORD, DELETE_RECORD,GET_RECORDS} from './types'


export const AddRecord = (newRecord , history) => async dispath => {

   await axios.post('http://localhost:8080/customer', newRecord)
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
   
   await axios.put(`http://localhost:8080/customer/${id}`, Record)
    .then((res) =>{

   
      history.push('/dashboard')
       

    }).catch((err) => {
    
     
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

//sync => wait
//async = not wait
}

export const getRecords = () => async dispath => {

  await axios.get('http://localhost:8080/customer')
   .then((res) =>{

      dispath({type:GET_RECORD,payload:res.data})
  
   });

//sync => wait
//async = not wait

}


export const getRecord = (id) => async dispath => {

   await axios.get(`http://localhost:8080/customer/${id}`)
    .then((res) =>{
 
       dispath({type:GET_RECORDS,payload:res.data})
  
    });
 
 //sync => wait
 //async = not wait
 
 }
export const deleteRecord = (id) => async dispath => {
   
   await axios.delete( 'http://localhost:8080/customer/'+id)
    .then((res) =>{

       dispath({type:DELETE_RECORD,payload:id})
    });
 
 //sync => wait
 //async = not wait
 
 }