import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import {getDriver, updateDriver} from "../store/actions/driverAction";
import {connect} from "react-redux";


const EditProfile = ({updateDriver, getDriver, driver, isLoading}) => {
    const [image, setImage] = useState({image: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'})
    const [formData, setFormData] = useState({firstName: "",lastName: "",  email: "", phoneNo: "", residentialAddress: "", licenseNo: "", nin: "", lasdriId: "", stateOfOrigin: '', dateOfBirth:'', bloodGroup: '', facialMark: '', disability: '', eyeGlasses: ''});
    const [id] = useState(sessionStorage.getItem('id'))
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const { firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId, dateOfBirth, stateOfOrigin, bloodGroup, facialMark, disability, eyeGlasses } = formData;

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    }

    useEffect(()=> {
        if(id) {
           getDriver(id)
        }
    },[id])

    useEffect(() => {
        if(driver) {
            setFormData({firstName: driver.firstName, lastName: driver.lastName,  email: driver.email, phoneNo: driver.phoneNo, residentialAddress: driver.residentialAddress, licenseNo: driver.licenseNo?driver.licenseNo: '', nin: driver.nin?driver.nin: '', lasdriId: driver.lasdriId?driver.lasdriId: '', stateOfOrigin: driver.stateOfOrigin?driver.stateOfOrigin:'', dateOfBirth:driver.dateOfBirth?driver.dateOfBirth:'', bloodGroup:driver.bloodGroup?driver.bloodGroup:'', facialMark: driver.facialMark?driver.facialMark:'', disability: driver.disability?driver.disability:'', eyeGlasses: driver.eyeGlasses?driver.eyeGlasses:''});
        }
    },[driver])


    const onSubmit = (e) => {
        e.preventDefault();
        updateDriver(id, firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId, dateOfBirth, stateOfOrigin, bloodGroup, disability, facialMark, eyeGlasses)
    }

    console.log(disability, 'dddddddd')
    console.log(facialMark, 'fffff')
    console.log(eyeGlasses, 'eeeeeeeeeee')

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10"><h1 style={{color:"#337ab7"}}>Lagos State Driver Management System</h1></div>
                <div className="col-sm-2"><Link to="/" className="pull-right"><img title="profile image" className="img-circle img-responsive" src="img/lamatasmall.jpeg"  alt='lamata'/></Link></div>
            </div>
            <div className="row" style={{minHeight: "99vh"}}>
                <div className="col-sm-3">
                    <div className="text-center">
                        <img id="target" src={image.image} className="avatar img-circle img-thumbnail" alt="avatar" />
                            <h6>Upload profile photo</h6>
                        <input type="file" className="center-block file-upload"  style={{marginLeft:"50px"}} onChange={onImageChange}/>
                    </div>
                </div>
            <div className="col-sm-9">
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                            <form className="form" onSubmit={onSubmit}>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>First name</h4></label>
                                        <input type="text" onChange={onChange} className="form-control" name="firstName" placeholder="first name" title="enter your first name if any."  value={firstName}/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>Last name</h4></label>
                                        <input type="text" onChange={onChange} className="form-control" name="lastName"  placeholder="last name" title="enter your last name if any." value={lastName}/>
                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>Phone</h4></label>
                                        <input type="number" onChange={onChange} className="form-control" name="phoneNo" placeholder="enter phone" title="enter your phone number if any."  value={phoneNo}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label><h4>Residential Address</h4></label>
                                        <input type="text" onChange={onChange} className="form-control" placeholder="enter  address" name="residentialAddress" value={residentialAddress}/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>Email</h4></label>
                                        <input type="email" onChange={onChange} className="form-control"  placeholder="you@email.com" title="enter your email."  name="email" value={email}/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>State of Origin</h4></label>
                                        <input type="text" onChange={onChange} className="form-control" placeholder="somewhere" title="enter a location" value={stateOfOrigin} name="stateOfOrigin"/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>Date of Birth</h4></label>
                                        <input type="date" className="form-control" placeholder="password" onChange={onChange} title="enter your password." value={dateOfBirth} name="dateOfBirth"/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>Blood Group</h4></label>
                                        <input type="text" onChange={onChange} className="form-control"  placeholder="example O+" title="enter your blood group." value={bloodGroup} name="bloodGroup"/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>License Number</h4></label>
                                        <input type="text" onChange={onChange} className="form-control"  placeholder="example PL09087878GHb" title="enter your license number." value={licenseNo} name="licenseNo"/>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-xs-6">
                                        <label><h4>NIN Number</h4></label>
                                        <input type="text" onChange={onChange} className="form-control"  placeholder="example 129876565Vg" title="enter your nin."  value={nin} name="nin"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label><h4>LASDRI ID</h4></label>
                                        <input type="text" className="form-control" onChange={onChange}  placeholder="example 098976545PL" title="enter your lasdri id." value={lasdriId} name="lasdriId"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label><h4>Eye Glass</h4></label>
                                        <select className="form-control"  onChange={onChange} value={eyeGlasses} name="eyeGlasses">
                                            <option value={''}>Select</option>
                                            <option value={'Yes'}>Yes</option>
                                            <option value={'No'}>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label><h4>Facial Mark</h4></label>
                                        <select className="form-control"  onChange={onChange} value={facialMark} name="facialMark">
                                            <option value={''}>Select</option>
                                            <option value={0}>Yes</option>
                                            <option value={1}>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-6">
                                        <label><h4>Disability</h4></label>
                                        <select className="form-control"  onChange={onChange} value={disability} name="disability">
                                            <option value={''}>Select</option>
                                            <option value={'Yes'}>Yes</option>
                                            <option value={'No'}>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <br />
                                            <button type="submit" className="btn btn-success" type="submit">Save {isLoading && <i className="fa fa-spinner fa-spin"></i>}</button>
                                        <Link to="/profile" className="btn btn-danger" type="submit">Cancel</Link>
                                    </div>
                                </div>
                            </form>

                    </div>
                </div>
            </div>

        </div>
            <div id="footer" style={{backgroundColor:"white"}}>
                <div className="container text-center bg-white">
                    <p>
                        &copy; 2020 Lagos State Government | Powered by Zeno Digital Limited{" "}
                        {/*<a href="http://www.templatewire.com" rel="nofollow">*/}
                        {/*  TemplateWire*/}
                        {/*</a>*/}
                    </p>
                </div>
            </div>
</div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        updateDriver: (id, firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId, dateOfBirth, stateOfOrigin, bloodGroup, disability, facialMark, eyeGlasses) => dispatch(updateDriver(id, firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId, dateOfBirth, stateOfOrigin, bloodGroup, disability, facialMark, eyeGlasses)),
        getDriver: (id) => dispatch(getDriver(id)),
    };
}

const mapStateToProps = state => ({
    driver: state.driver.driver,
    driverId: state.driver.driverId,
    error: state.driver.error,
    isLoading: state.driver.isLoading,
});

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);


