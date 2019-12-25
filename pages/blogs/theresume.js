import React, { Component } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
class Theresume extends Component {

    render() {
        return (           
            <Layout title = "The Resume Game | AOWSAY">                                            
                <div className="container text-center">
                    <h1>The Resume Game</h1>
                    <div className="row d-flex justify-content-center">                        
                        <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
                            <iframe 
                                frameborder="0" 
                                src="https://itch.io/embed-upload/1857824?color=333333" 
                                allowfullscreen=""
                                width="100%"
                                height="500"
                                >
                                <a href="https://msomsap.itch.io/the-resume-game">Play The  Resume Game on itch.io</a>
                            </iframe>
                        </div>
                    </div>
                    <h3>How To Play</h3>
                    <h5>Press button on keyboard [W][A][S][D] to Moving</h5>
                    <h5>Press button on Left Mouse to Shooting</h5>
                    <br />
                </div>          
            </Layout>
        )
    }
}

export default Theresume;