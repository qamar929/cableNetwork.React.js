import React, { Component } from 'react'
import {getRecord,updateRecord} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'
import "react-datepicker/dist/react-datepicker.css";
class UpdateRecord extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id:'',
            billCode: '',
            name: '',
            phoneNumber: '',
            address: '',
            bill: '',
            date: new Date(),
            errors:''
        }


    }


    componentDidMount() {
        this.props.getRecord(this.props.match.params.id)
    
    }

   
    submitHandler = (event) => {

    
        const updateRecord = {
                id: this.state.id,
                name: this.state.name,
                billCode: this.state.billCode,
                phoneNumber: this.state.phoneNumber,
                address:this.state.address,
                bill: this.state.bill,
                date: this.state.date
        }

        this.props.updateRecord(this.state.id,updateRecord,this.props.history)
        event.preventDefault();
    }   

    componentWillReceiveProps(nextProps) {
     
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }

        if (nextProps.record) {
           
            this.setState({

                id: nextProps.record.id,
                name: nextProps.record.name,
                billCode: nextProps.record.billCode,
                phoneNumber: nextProps.record.phoneNumber,
                address:nextProps.record.address,
                bill: nextProps.record.bill,
                date: nextProps.record.date
               

            }

            )
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        });
    }

  
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center text-white">Update Record</h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" value={this.state.billCode} onChange={(event) => this.changeHandler(event, "billCode")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.billCode})} placeholder="Bill code" />
                                    <p className='text-danger'>{this.state.errors.billCode}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                                    <p className='text-danger'>{this.state.errors.name}</p>

                                    </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.phoneNumber} onChange={(event) => this.changeHandler(event, "phoneNumber")} className="form-control form-control-lg"  placeholder="Phone number " />

                                </div>
                                <div className="form-group">
                                    <textarea value={this.state.address} onChange={(event) => this.changeHandler(event, "address")} className="form-control form-control-lg" placeholder="Address"></textarea>

                                </div>

                                <div className="form-group">
                                    <input value={this.state.bill} onChange={(event) => this.changeHandler(event, "bill")} className="form-control form-control-lg" placeholder="bill"></input>

                                </div>

                                <div className="form-group">
                                    <input 
                                    onChange={(event) => this.changeHandler(event, "date")}
                                        className="form-control form-control-lg"
                                        value={this.state.date}
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    errors:state.errors,
    record:state.record.record
    
})

export default connect(mapStateToProps,{updateRecord,getRecord})(UpdateRecord)
