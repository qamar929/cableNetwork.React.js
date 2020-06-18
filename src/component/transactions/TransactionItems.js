import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { deleteTransaction } from './../../actions/projectActions'
import {connect} from 'react-redux'


 class TransactionItems extends Component {


 
  
  deleteBtnClick= () =>
    {

        if(window.confirm("Are you sure, you want to delete this wallet"))
        {
            this.props.deleteTransaction(this.props.transaction.id);
        }
    
    }
  render() {

  
  
   let id =this.props.transaction.id;
    const transaction = this.props.transaction
    return (
     
     
        <tr className="table-Info">
        <td>{transaction.transactionDate}</td>
        <td>{transaction.description}</td>
        <td class="text-success" > {transaction.amount}</td>
        <td>{transaction.type}</td>
        <td>
            <Link className="btn btn-success"   to={`/trns/edit/${id}`}><i className="fas fa-edit fa-2x">Edit</i></Link>
            <Link className="btn btn-danger " to={`/transaction`} onClick={()=>this.deleteBtnClick()}><i className="fas fa-trash fa-2x">Delete</i></Link>
        </td>
    </tr>
    

    )
  }
}

export default connect(null,{deleteTransaction})(TransactionItems)
