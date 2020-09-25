import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getDriver, isLoading} from "../store/actions/driverAction";
import {connect} from "react-redux"
import Spinner from "./spinner";


const Profile = ({driver, getDriver, isLoading}) => {
    const [id] = useState(sessionStorage.getItem('id'))


    useEffect(()=> {
        if(id) {
          getDriver(id)
        }
    },[id])

    useEffect(()=> {
       window.scroll(0, 0)
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10"><h1 style={{color:"#337ab7"}}>Lagos State Driver Management System</h1></div>
                <div className="col-sm-2"><Link to="/" className="pull-right"><img title="profile image" className="img-circle img-responsive" src="img/lamatasmall.jpeg"  alt='lamata'/></Link></div>
            </div>
            {isLoading &&  <div style={{width: "100%", minHeight:"65vh", display:'flex', alignItems: 'center', justifyContent: 'center'}}>
               <Spinner />
            </div>}
            {(driver && !isLoading) &&
            <div className="row">
                <div className="col-sm-3">
                    <div className="text-center">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                        <h6>{driver.firstName} {driver.lastName}</h6>
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i>
                        </li>
                        <li className="list-group-item text-right">
                            <span className="pull-left"><strong>Status</strong></span>
                            {(driver.status === '') && <span className="badge-red" style={{backgroundColor:"#f0ad4e"}}>Pending</span> }
                            {(driver.status === '1') && <span className="badge-red" style={{backgroundColor:"green"}}>Active</span> }
                        </li>
                        <li className="list-group-item text-right">
                            <span className="pull-left"><strong>Driver license verified</strong></span>
                            {(driver.licenseStatus === '0') && <span className="badge-red">No</span>}
                            {(driver.licenseStatus === '1') && <span className="badge-red" style={{backgroundColor:"green"}}>Yes</span>}
                        </li>
                        <li className="list-group-item text-right"><span
                            className="pull-left"><strong>NIM verified</strong></span>
                            {(driver.ninStatus === '0') && <span className="badge-red">No</span>}
                            {(driver.ninStatus === '1' )&& <span className="badge-red" style={{backgroundColor:"green"}}>Yes</span>}
                        </li>
                        <li className="list-group-item text-right"><span
                            className="pull-left"><strong>LASDRI Certified</strong></span>
                            {(driver.lasdriIdStatus === '1') && <span className="badge-red" style={{backgroundColor:"green"}}>Yes</span>}
                            {(driver.lasdriIdStatus === '0') && <span className="badge-red">No</span>}
                        </li>
                        <li className="list-group-item text-right"><span
                            className="pull-left"><strong>Ratings</strong></span> 5
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right text-muted"><span
                                    className="pull-left">Bio Data</span> <a href="/edit" className="btn btn-warning">Update Profile</a>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>First name</strong></span>{driver.firstName? driver.firstName: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Last name</strong></span>{driver.lastName? driver.lastName: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>phone number</strong></span>{driver.phoneNo? driver.phoneNo: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Residential Address</strong></span>{driver.residentialAddress? driver.residentialAddress: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Email</strong></span>{driver.email? driver.email: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>State of Origin</strong></span>{driver.stateOfOrigin? driver.stateOfOrigin: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Date of birth</strong></span>{driver.dateOfBirth? driver.dateOfBirth: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Eye Glass</strong></span>{driver.eyeGlasses? driver.eyeGlasses: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Blood Group</strong></span>{driver.bloodGroup? driver.bloodGroup: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Facial Marks</strong></span>{driver.facialMark? driver.facialMark: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Disability</strong></span>{driver.disability? driver.disability: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>license Number</strong></span>{driver.licenseNo? driver.licenseNo: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>NIM</strong></span>{driver.nin? driver.nin: 'not available'}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>LASDRI ID</strong></span>{driver.lasdriId? driver.lasdriId: 'not available'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>}
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
        getDriver: (id) => dispatch(getDriver(id)),
    };
}

const mapStateToProps = state => ({
    driver: state.driver.driver,
    driverId: state.driver.driverId,
    error: state.driver.error,
    isLoading: state.driver.isLoading,
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
