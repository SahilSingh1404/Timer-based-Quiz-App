import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import axios, { Axios } from 'axios';
//const axios = require('axios');


const Home = () => (
    <Fragment>
        <Helmet><title>Home - Quiz App</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/logins"  className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

// function HandleBackend() {
//     const [data, setData] = useState();
//     const getData = async () => {
//     const response = await Axios.get("http://localhost:5000/getData");
//     setData(response.data);
//     };

//     useEffect(() => {
//          getData();
//      }, []);

    //     axios.post('/https://ap-south-1.aws.data.mongodb-api.com/app/data-obksp/endpoint/data/v1/submit')
    //   .then(function (response) {
    //     // Handle the response
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // Handle any errors
    //     console.error(error);
    //   });
// }

export default Home;