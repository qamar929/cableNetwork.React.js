import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createTransaction } from '../../../actions/projectActions'
import { connect } from 'react-redux'
class AddTransaction extends Component {

    constructor(props) {
        super(props)

        this.state = {
          
            amount: '',
            description: '',
            type: ''
        

        }
    }


    componentWillReceiveProps(nextProps) {

        // alert(nextProps.wallet.id)

       


    }










    changeHandler = (event, fieldName, checkbox) => {
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value
        })
    }
    handleSubmit = (event) => {

        let newTransaction = {
            amount: this.state.amount,
            description: this.state.description,
            type: this.state.type
        }

        this.props.createTransaction(newTransaction, this.props.history)


        event.preventDefault();
     
    }
        render() {
         
            const { amount, description } = this.state;
            return (

                <div className="add-PBI">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to={`/transactions`} className="btn btn-light">
                                    Back to Home
                    </Link>
                                <h4 className="display-4 text-center h1">Record New Transaction</h4>
                                <p className="lead text-center h1">UBL Account</p>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="number"  value={amount} onChange={event => this.changeHandler(event, "amount", false)} className="form-control form-control-lg" placeholder="Amount" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg" value={description} onChange={event => this.changeHandler(event, "description", false)} placeholder="Description"></textarea>
                                    </div>
                                    <div className="form-group">

                                    <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "type",false)} name="type">
                                        <option >Select...</option>
                                        <option value="Credit">Credit</option>
                                        <option value="Debit">Debit</option>
                                        
                                       
                                    </select>
                                </div>




                            
                                       
                                   
                                   
                                   
                                   
                                            </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
  
    export default connect(null, { createTransaction }) (AddTransaction)
