import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import $ from 'jquery';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


import img1 from './img/bojack-0.png'
import img2 from './img/bojack-1.png'
import img3 from './img/bojack-2.png'

import signature from './img/signature.jpg'
import sign from './img/sign.png'

import imgg1 from './img/1.jpg'
import imgg2 from './img/2.jpg'
import imgg3 from './img/3.jpg'
import imgg4 from './img/4.jpg'
import imgg5 from './img/5.jpg'




class App extends Component {



    jQueryCode = () => {
        $('.carousel.carousel-multi-item .carousel-inner.v-2 .carousel-item').each(function(){
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i=0;i<4;i++) {
                next=next.next();
                if (!next.length) {
                    next=$(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }

    componentDidMount() {
        this.jQueryCode()
    };

    shouldComponentUpdate(){
        return false;
    }



    render() {


        const AutoplaySlider = withAutoplay(AwesomeSlider);

        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                }}
            />
        );

        return (

            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark transparent">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item active px-3">
                                <a className="nav-link" href="#">+212 - 6704 23749</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="#">IN 27 BA TRIEU ST, VIETNAM </a>
                            </li>
                        </ul>


                    </div>
                </nav>

                <ColoredLine color="white" />

                <nav className="navbar navbar-expand-lg navbar-dark transparent" id="navbar2">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item active px-3">
                                <a className="nav-link" href="#"><b>GOYA.</b></a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active px-3 hovey">
                                <a className="nav-link" href="#">Home</a>&nbsp;
                            </li>

                            <li className="nav-item active hovey">
                                <a className="nav-link" href="#">About us</a>&nbsp;
                            </li>

                            <li className="nav-item active hovey">
                                <a className="nav-link" href="#">Products</a>&nbsp;
                            </li>

                            <li className="nav-item active hovey">
                                <a className="nav-link" href="#">Contact us</a>&nbsp;
                            </li>


                        </ul>

                    </div>
                </nav>

                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                    bullets={false}
                    organicArrows={false}
                    fillParent={true}
                    style={{zIndex: -1}}
                >
                    <div data-src={img1} />
                    <div data-src={img2} />
                    <div data-src={img3} />
                </AutoplaySlider>

                <div className="intro">
                    <p><b>Lotus Blankets Are A Class Apart In Design, Quality & Finish!</b></p>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div className="aboutme">

                    <img src={signature} alt="About Me" className="pic"></img>

                        <p className="about">

                            <span className="heading"><span className="ab">Ab</span>out Me </span>

                            <br /> <br />

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries

                            <br /> <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries

                            <br /><br />
                            <img src={sign} alt="signature"></img>
                        </p>
                </div>



                <br /><br />


                <div id="carousel-example-multi" className="carousel slide carousel-multi-item" data-ride="carousel">


                    <div className="carousel-inner v-2" role="listbox">

                        <div className="carousel-item active">
                            <div className="col-12 col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={imgg1}
                                         alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-12 col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={imgg2}
                                         alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-12 col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={imgg3}
                                         alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-12 col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={imgg4}
                                         alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-12 col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={imgg5}
                                         alt="Card image cap"></img>
                                </div>

                            </div>
                        </div></div></div>

                <br/><br/><br/><br/><br/><br/><br/><br/>

                <div className="icon">
                    <p>
                        <FontAwesomeIcon icon={faShieldAlt} /> CLIENT SATISFACTION <br />
                        <br />
                        Birmi Group believes that a satisfied customer.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCertificate} /> ISO CERTIFICATION <br />
                        <br />
                        Birmi Group of Companies are ISO 9001 14001
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faAdjust} /> OUR MOTTO <br />
                        <br />
                        Birmi Group’s motto is to provide best
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faQuestionCircle} /> WHY US <br />
                        <br />
                        Many years of experience & quality
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPencilAlt} /> PREMIUM QUALITY <br />
                        <br />
                        Birmi is a globally renowned brand
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faUser} /> OUR TEAM <br />
                        <br />
                        Out team of expert craftsmen & professionals
                    </p>
                </div>






           


            </div>

    );
  }
}

export default App;

