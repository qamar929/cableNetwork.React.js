import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTransactions } from './../../actions/projectActions'
import { connect } from 'react-redux'
import TransactionItems from './TransactionItems';
class Transaction extends Component {


    constructor(props) {
        super(props)

        this.state = {
           
            Balance:'',
         
           Expense:''
        

        }
    }

    componentDidMount() {
        this.props.getTransactions();
      
    }

    componentWillReceiveProps(nextProps) {

        // alert(nextProps.wallet.id)

      



            let income = 0;
            let expense = 0;
            for (let i = 0; i < nextProps.transactions.length; i++) {

                if (nextProps.transactions[i].type === "Debit") {
                    expense = expense + nextProps.transactions[i].amount

                } else {

                    income = income + nextProps.transactions[i].amount
               
                }


            }

            let Bal = 0;
            Bal = income - expense;
          // alert(Bal+ " " + income +" " +expense)
          this.setState({ Balance: Bal ,
        Expense:expense})

            
        }





    
   


    render() {
     

        const transactions = this.props.transactions

        const TransactionComponent = transactions.map(transaction =>
            (<TransactionItems key={transaction.id} transaction={transaction}  />))
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3 text-white">
                    Back
        </Link>
                <Link to={`/trns/add`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle "> Add record</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-info text-white">
                        <h4 className="text-white"> Expense : Rs. {this.state.Expense} </h4>
                        <h1 className="text-white"> Income : Rs. {this.state.Balance}</h1>
                    </div>
                </div>
                <hr />

                <table className="table table-bordered textCs">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Transaction</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>


                        {
                            
                            TransactionComponent
                        
                        }


                    </tbody>


                </table>


            </div>

        )
    }
}
const mapStateToProps = (state) => ({

  
    transactions: state.record.transactions


});
export default connect(mapStateToProps, { getTransactions })(Transaction)
