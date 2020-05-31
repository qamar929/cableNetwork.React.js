import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteRecord } from '../../actions/projectActions'
class RecordTable extends Component {

    deleteBtnClick = () => {

        if (window.confirm("Are you sure, you want to delete this record")) {
            this.props.deleteRecord(this.props.record.id);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }

      
    }
      
            
    render() {

         const record = this.props.record
            return (

                <tr>
                <td>{record.billCode}</td>
                <td>{record.name}</td>
                <td>{record.phoneNumber}</td>
                <td>{record.address}</td>
                <td>{record.bill}</td>
                <td>{record.date}</td>
                <td>
                <Link to={`/updateRecord/${record.id}`  }>
                <li className="btn btn-success">
                <i>Update</i>
              </li>
                </Link>
                <Link To="/Dashboard" onClick={()=>this.deleteBtnClick()}>
                <li className="btn btn-danger">
                <i>Delete </i>
              </li>
                </Link>
                
                </td>
             </tr>

   )
        }
        
    
}



export default connect(null,{deleteRecord})(RecordTable)
