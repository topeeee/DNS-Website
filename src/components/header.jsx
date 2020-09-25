import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
        <div className="container" style={{minHeight: '100vh'}}>
              <div className="row" >
                <div className="col-xs-12 col-md-6">
                  <div style={{marginTop: '100px'}}>
                      <img src="img/Lamata.png"  alt=""/>
                  </div>
                  <h1 className="text-primary">The Lagos State Driver Management System</h1>
                    <small>A smart mobility solution that facilitates regulated and efficient delivery of mass transportation as a service. </small>
                    {/*<div>*/}
                    {/*    <img style={{width: "99%", minHeight: '300px', marginTop: '30px'}} src="img/LAMATA-1.png"  alt="" className="img-responsive"/>*/}
                    {/*</div>*/}
                    <div className="col-xs-12 col-md-6" style={{marginTop: '90px'}}><img src="img/driver-exam.jpg" className="img-responsive" alt="" /></div>
                    <div className="col-xs-12 col-md-6" style={{marginTop: '90px'}}> <img src="img/driver-exam2.jpg" className="img-responsive" alt="" /> </div>
                    <div className="col-xs-12 col-md-6" style={{marginTop: '90px'}}> <img src="img/driver-exam1.jpeg" className="img-responsive" alt="" /> </div>
                    <div className="col-xs-12 col-md-6" style={{marginTop: '90px'}}> <img src="img/driver-exam5.jpg" className="img-responsive" alt="" /> </div>

                </div>
                <div className="col-xs-12 col-md-6" style={{marginTop: '90px'}}> <img src="img/driver-exam3.jpeg" className="img-responsive" alt="" /> </div>
                  <div className="col-xs-12 col-md-6" style={{marginTop: '90px'}}> <img src="img/driver-exam4.jpg" className="img-responsive" alt="" /> </div>

                  {/*<div style={{marginTop: "510px"}}>*/}
                  {/*    <img style={{width: "99%",  maxHeight: '250px', display: "block"}} src="img/LAMATA-1.png"  alt="" className="img-responsive" />*/}
                  {/*</div>*/}
                {/*<div className="col-md-8 col-md-offset-2 intro-text">*/}
                {/*  <h1>*/}
                {/*    {this.props.data ? this.props.data.title : "Loading"}*/}
                {/*    <span></span>*/}
                {/*  </h1>*/}
                {/*  <p>*/}
                {/*    {this.props.data ? this.props.data.paragraph : "Loading"}*/}
                {/*  </p>*/}
                {/*  <a*/}
                {/*    href="#features"*/}
                {/*    className="btn btn-custom btn-lg page-scroll"*/}
                {/*  >*/}
                {/*    Learn More*/}
                {/*  </a>{" "}*/}
                {/*</div>*/}
              </div>
            </div>
    );
  }
}

export default Header;
