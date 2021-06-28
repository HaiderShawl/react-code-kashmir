import React from 'react';

const Footer = () => {
    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
    <div className="row mb-5 pb-5 align-items-center d-flex">
        <div className="col-md-6">
        <div className="heading-section heading-section-white ">
            <h2 style={{fontSize: 30}}>Learn to code for free today!</h2>
        </div>
        </div>
        <div className="col-md-3 ">
        <p className="mb-0"><a href="/" className="btn btn-primary py-3 px-4">Register</a></p>
        </div>
    </div>
    <div className="row mb-5">
        <div className="col-md m-5">
        <div className="ftco-footer-widget m-4 p-4">
            <h2 className="ftco-heading-2">&lt;Code Kashmir/&gt;</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled mb-0 ">
            <li className=""><a className="btn" style={{color:'white'}} href="https://www.instagram.com/theteenspace/"><i className="fab fa-discord fa-2x"></i></a></li>
            <li className=""><a className="btn" style={{color:'white'}} href="https://www.instagram.com/code_kashmir/"><i className="fab fa-instagram fa-2x"></i></a></li>
            <li className=""><a className="btn" style={{color:'white'}} href="https://www.twitter.com/code_kashmir/"><i className="fab fa-twitter fa-2x"></i></a></li>
            <li className=""><a className="btn" style={{color:'white'}} href="https://www.instagram.com/theteenspace/"><i className="fab fa-youtube fa-2x"></i></a></li>
            </ul>
        </div>
        </div>

        
        <div className="col-md m-5">
        <div className="ftco-footer-widget m-4 p-4">
            <h2 className="ftco-heading-2">Navigational</h2>
            <ul className="list-unstyled">
            <li><a href="/" className="py-2 d-block">Home</a></li>
            <li><a href="/" className="py-2 d-block">Learn</a></li>
            <ul>
                <li><a href="basic-programming.html" className="py-2 d-block">Basic Programming</a></li>
                <li><a href="web-development.html" className="py-2 d-block">Web Development</a></li>
                <li><a href="/" className="py-2 d-block">Machine Learning</a></li>
            </ul>
            <li><a href="/" className="py-2 d-block">About</a></li>
            <li><a href="contact.html" className="py-2 d-block">Contact</a></li>
            </ul>
        </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12 text-center">
        <p>
            Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> 
            All rights reserved | Developed by Haider Shawl
        </p>
        </div>
    </div>
    </div>
</footer>
    )
}


export default Footer