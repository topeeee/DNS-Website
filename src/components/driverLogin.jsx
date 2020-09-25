import React, {useState} from 'react'
import {LogIn} from "../store/actions/authenticationAction";
import {connect} from "react-redux"
// import {Redirect} from 'react-router-dom';

const DriverLogin = ({isAuthenticated, isLoading, error, LogIn}) => {

  const [formData, setFormData] = useState({username: '', password: ''});
  const [loginRes, setLoginRes] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { username, password} = formData;
  //
  // if (isAuthenticated ) {
  //   return <Redirect to="/profile"/>;
  // }


  const onSubmit = (e) => {
    e.preventDefault();
    LogIn(username, password);
  }

  return (
        <div id="driverLogin" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '110px'}}>
            <div className="col-xs-12 col-md-6"> <img src="img/Revenue.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3 className="text-warning">Driver Login</h3>
                {loginRes &&
                <div className="text-success w-100 text-primary text-capitalize bg-danger" style={{marginBottom: "30px", padding: '10px'}}>{loginRes}</div>
                }
                <form onSubmit={onSubmit}>

                  <div className="form-group" style={{marginBottom: "30px"}}>
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="username" onChange={onChange}  value={username} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           name="password" onChange={onChange}  value={password} required/>
                  </div>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center", width: "100%"}}>
                    <button type="submit" className="btn btn-warning">Login {isLoading && <i className="fa fa-spinner fa-spin"></i>}</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

function mapDispatchToProps(dispatch) {
  return {
    LogIn: (username, password) => dispatch(LogIn(username,  password))
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth. isLoading,
  errors: state.auth.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverLogin);


