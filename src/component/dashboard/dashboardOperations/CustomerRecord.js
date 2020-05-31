import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import {AddRecord} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'
import "react-datepicker/dist/react-datepicker.css";
class CustomerRecords extends Component {

    constructor(props) {
        super(props)

        this.state = {
            billCode: '',
            name: '',
            phoneNumber: '',
            address: '',
            bill: '',
            date: new Date(),
            errors:''
        }


    }
    handleChange = date => {
        this.setState({
          date: date
        });
      };
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        });
    }

    submitHandler = (event) => {

      
        const newRecord = {

            billCode: this.state.billCode,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            bill: this.state.bill,
            date: this.state.date
        }
        

        this.props.AddRecord(newRecord,this.props.history)
       

        event.preventDefault();

    }
    render() {

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center text-white">Add Record</h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "billCode")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.billCode})} placeholder="Bill code" />
                                    <p className='text-danger'>{this.state.errors.billCode}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                                    <p className='text-danger'>{this.state.errors.name}</p>

                                    </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "phoneNumber")} className="form-control form-control-lg"  placeholder="Phone number " />

                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "address")} className="form-control form-control-lg" placeholder="Address"></textarea>

                                </div>

                                <div className="form-group">
                                    <input onChange={(event) => this.changeHandler(event, "bill")} className="form-control form-control-lg" placeholder="bill"></input>

                                </div>

                                <div className="form-group">
                                    <DatePicker
                                    onChange={this.handleChange}
                                        className="form-control form-control-lg"
                                        selected={this.state.date}
                                      
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Add" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    errors:state.errors
    
})

export default connect(mapStateToProps,{AddRecord})(CustomerRecords)
