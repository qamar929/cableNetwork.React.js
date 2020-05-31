import React, { Component } from 'react'
import background from '../image/Background.jpg'
class Welcome extends Component {
  render() {
    return (
      
    <div className="landing"  style={{  
        backgroundImage: "url(" + background + ")",
        backgroundPosition: 'center',
        width: '100%',
         height: 'auto',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}>
    <div className="light-overlay landing-inner text-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Cable Area Manager</h1>
                    <p className="lead">
                        Create your account to manage your Customer Record
                    </p>
                    <hr />
                    <a href="register.html" className="btn btn-lg btn-primary mr-2">
                        Sign Up
                    </a>
                    <a href="login.html" className="btn btn-lg btn-secondary mr-2">
                        Login
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default Welcome
