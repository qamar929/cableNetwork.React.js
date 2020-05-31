import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getRecords } from '../../actions/projectActions'
import { connect } from 'react-redux'
import RecordTable from './RecordTable'

export class Dashboard extends Component {



    componentDidMount() {
        this.props.getRecords();
    }



    render() {


        const records = this.props.records
        const RecordsComponent = records.map(record => (<RecordTable key={record.id} record={record} />))


        return (




            <div className="projects">
              <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center text-white">Customers Records</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Add
                        </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/addRecord">Customer</Link>
                                    <button disabled className="dropdown-item">Expenses</button>
                                </div>
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>Current Customers (Total)</h4>
                                    <h1>Count. </h1>
                                </div>
                            </div>
                            <hr />
                            {
                                //<!-- Project Item Component -->
                            }



                            <br />
                    
                            <br />
                            <div className="container">
                            <table className="table table-bordered textCs">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Bill Code</th>
                                        <th> Name</th>
                                        <th> Phone Number</th>
                                        <th> Address</th>
                                        <th>bill</th>
                                        <th> Date</th>
                                        <th></th>
                                       
                                    </tr>
                                </thead>
                                {RecordsComponent}

                            </table>
                       
                            </div>


                            
                        </div>
                    </div>


                    </div>





                    {
                        //  <!-- End of Project Item Component --> 
                    }

                </div>
          

        )
    }
}

const mapStateToProps = (state) => ({


    records: state.record.records

});
export default connect(mapStateToProps, { getRecords })(Dashboard)
