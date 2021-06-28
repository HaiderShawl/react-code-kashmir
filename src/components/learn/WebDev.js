import React from 'react';

const WebDev = () => {
    return (
        <div>
            <div className="hero-wrap js-fullheight">
      <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">

            <div className="row">
              <div className="col-md-8">
                <div className="d-flex ">
                  <div className="text p-5">
                    <h1 className="mb-3">Web Development</h1>
                    <h5 className="text-light">By Haider Shawl</h5>
                    <p>Learn how websites are made and deploy your own website.</p>
                    <p><a href="#getstarted" className="btn btn-primary px-4 py-3">Get Started</a></p>
                  </div>
                </div> 
              </div>

              <div className="col-md-4">
                <div className="d-flex ">
                  <div>
                    <h4>What you will do:</h4>
                    <ul style={{textAlign: 'left'}}>
                      <li>Learn about Web Development terminologies</li>
                      <li>Get an understanding of HTML, CSS, Bootstrap and Javascript</li>
                      <li>Deploy your own website for free!</li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="pb-5">
                    <h4>Prerequisites: </h4>
                    <ul style={{textAlign:'left'}}>
                      <li>No Prerequisites</li>
                    </ul>
                  </div>
                </div>                           
              </div>
            </div>
          </div>
        </div>
    </div>


    <a id="getstarted">
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section  fadeInUp ">
            <a id="getstarted"><h2 className="mb-4">Get Started</h2></a>
            <p>
              Web Development is my favourite technology. 
              Not because it is easy to learn (which it is), but because it gives a person the power to share his/her creation with the world instantly.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12  fadeInUp ">
            <div id="accordion">
              <div className="row">
                <div className="col-md-12">


                  <div className="card">
                    <div className="card-header">
                      <a className="card-link" data-toggle="collapse" href="#menuone" aria-expanded="true" aria-controls="menuone">Week 1 <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                    </div>
                    <div id="menuone" className="collapse show">
                      <div className="card-body ">
                        <h4>Introduction</h4>
                        <p>

                        </p>
                        


                        <div>
                          <h4>Free resources:</h4>
                          
                          <ul>
                            <li>
                              <a href="https://www.w3schools.com/default.asp">w3schools</a>
                              <p>This is one of my favourite websites for learning about Web Development. It is the best place to explore and learn more about HTML tags, CSS styles and Javascript functions. They also have an awesome feature called the TryIt Editor which allows you to run the  </p>
                            </li>
                          </ul>
                        </div> 
                        <div>
                          <h4>Weekly Project</h4>
                          <a href="www.github.com">My First Function</a>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="card">
                    <div className="card-header">
                      <a className="card-link" data-toggle="collapse" href="#menutwo" aria-expanded="false" aria-controls="menutwo">Week 2 <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                    </div>
                    <div id="menutwo" className="collapse">
                      <div className="card-body">
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                      </div>
                    </div>
                  </div>


                  <div className="card">
                    <div className="card-header">
                      <a className="card-link" data-toggle="collapse" href="#menu3" aria-expanded="false" aria-controls="menu3">Week 3 <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                    </div>
                    <div id="menu3" className="collapse">
                      <div className="card-body">
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </a>
        </div>
    )
}

export default WebDev