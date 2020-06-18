import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getRecords } from '../../actions/projectActions'
import { connect } from 'react-redux'
import RecordTable from './RecordTable'

export class Dashboard extends Component {

constructor(props) {
  super(props)

  this.state = {
     Count:''
  }
}


    componentDidMount() {
        this.props.getRecords();
    }


    componentWillReceiveProps(nextProps) {

        // alert(nextProps.wallet.id)

        if (nextProps.records) {
            let count = 0;
           
            count=  nextProps.records.length;

               

              


            

          
           
            this.setState({ Count: count })

           
        }





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
                                    <Link className="dropdown-item" to="/transaction">Daily Jounral</Link>
                                </div>
                            </div>
                            <br />
                            <div className="card text-center " >
                                <div className="card-header bg-info text-white">
                                    <h4>Current Customers (Total)</h4>
                                    <h1>Count. {this.state.Count} </h1>
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
