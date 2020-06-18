import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      
    <div className="landing" >
    <div className="light-overlay landing-inner text-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4 text-white">Cable Area Manager</h1>
                    <p className="lead text-white">
                        Create your account to manage your Customer Record
                    </p>
                    <hr />
                    <Link to="/dashboard" className="btn btn-lg btn-primary mr-2">
                        Manager Add Records
                    </Link>
                    <Link to="/transaction" className="btn btn-lg btn-info mr-2">
                        Journal general entries
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default Welcome
