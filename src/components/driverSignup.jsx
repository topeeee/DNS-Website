import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DriverSignup = () => {

  const [formData, setFormData] = useState({firstName: "",lastName: "",  email: "", phoneNo: "", residentialAddress: "", status: "", pin: "", licenseNo: "", nin: "", lasdriId: "", password:'', confirmPassword: ''});

  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginRes, setLoginRes] = useState('');
  const [errorRes, setErrorRes] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { firstName, lastName, email, phoneNo, residentialAddress, status,  licenseNo, nin, lasdriId, password, confirmPassword } = formData;


  const getToken = async () => {
    try {
    const res = await axios.post('http://165.22.116.11:8001/api/login/?username=bruce&password=bruce')
      setToken(res.data.Authorized)
    }catch (e) {

    }
  }

const createDriver = async () => {
    setIsLoading(true)
  const body2 = {username:email, password}
  try {
    const res =   await axios.post("http://165.22.116.11:8001/admin/users/", body2);
    const body = {firstName, lastName, email, phoneNo:'+234' + phoneNo.substr(1), residentialAddress, status, pin:res.data.id, _type: 1};
    await axios.post("http://165.22.116.11:7042/api/me/drivers/", body,
        {
          headers: {
            Authorization: token
          }
        }
        );
    setIsLoading(false)
    setLoginRes('Registration Successful')
    setFormData({firstName: "",lastName: "",  email: "", phoneNo: "", residentialAddress: "", status: "", pin: "", licenseNo: "", nin: "", lasdriId: "", password:'', confirmPassword: ''})
    setTimeout(() => {
      setLoginRes('')
    },5000)
  }catch (error) {
    setErrorRes(error.response.data.result)
    setTimeout(() => {
      setErrorRes('')
    },5000)
    setIsLoading(false)
  }
}

const onSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      setErrorRes('passwords do not match');
      setTimeout(() => {
        setErrorRes('')
      },5000)
    } else {
      createDriver();
    }

}

useEffect(()=> {
  getToken();
},[])

  return (
        <div id="driverSignup" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '110px'}}>
            <div className="col-xs-12 col-md-6"> <img src="img/Revenue.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3 className="text-warning">Sign up as an Driver</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Organisation Name</label>*/}
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="First name"  name="firstName" onChange={onChange}  value={firstName}  required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder=" Last name" name="lastName" onChange={onChange} value={lastName}  required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Organisation Email Address</label>*/}<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Email"  name="email" onChange={onChange}  value={email} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Office Address</label>*/}
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="phone number" name="phoneNo" onChange={onChange}  value={phoneNo} required/>
                  </div>
                  {/*<div className="form-group" style={{marginBottom: "30px"}}>*/}
                  {/*  /!*<label htmlFor="exampleInputEmail1">Organisation Name</label>*!/*/}
                  {/*  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"*/}
                  {/*         placeholder="Residential address" name="residentialAddress" onChange={onChange} value={residentialAddress} required/>*/}
                  {/*</div>*/}
                  {/*<div className="form-group" style={{marginBottom: "30px"}}>*/}
                  {/*  /!*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*!/*/}
                  {/*  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"*/}
                  {/*         placeholder="License number" name="licenseNo" onChange={onChange} value={licenseNo} required/>*/}
                  {/*</div>*/}
                  {/*<div className="form-group" style={{marginBottom: "30px"}}>*/}
                  {/*  /!*<label htmlFor="exampleInputEmail1">Organisation Email Address</label>*!/*/}
                  {/*  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NIM" name="nin" onChange={onChange} value={nin} required/>*/}
                  {/*</div>*/}
                  {/*<div className="form-group" style={{marginBottom: "30px"}}>*/}
                  {/*  /!*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*!/*/}
                  {/*  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"*/}
                  {/*         placeholder="LASDRI Id" name="lasdriId" onChange={onChange} value={lasdriId} required/>*/}
                  {/*</div>*/}
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Password" name="password" onChange={onChange} value={password} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="confirm password" name="confirmPassword" onChange={onChange} value={confirmPassword} required/>
                  </div>
                  {loginRes &&
                  <div className="text-success w-100 text-white text-capitalize" style={{marginBottom: "30px", padding: '10px', backgroundColor: 'green', color: "white"}}>{loginRes}</div>
                  }
                  {errorRes &&
                  <div className="text-success w-100 text-white text-capitalize" style={{marginBottom: "30px", padding: '10px', backgroundColor: 'red', color: "white"}}>{errorRes}</div>
                  }
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center", width: "100%"}}>
                    <button type="submit" className="btn btn-warning">Submit {isLoading && <i className="fa fa-spinner fa-spin"></i>}</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default DriverSignup
