import React from 'react';

const Home = () => {
    return (
    <div>
      <div className="hero-wrap js-fullheight pl-3">
        <div className="container-fluid px-0">
          <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4" style={{paddingTop: 80}}>
                  <div className="d-flex">
                  {/* <div className="d-flex ftco-animate"> */}
                    <div className="text">
                    <h1 className="mb-3">Technology isn't a choice anymore.</h1>
                    <p>From agriculture to space shuttles to everything in between, all make use of Software Technologies.</p>
                    <p><a href="#getstarted" className="btn btn-primary px-4 py-3">Register</a></p>
                  </div>
                  </div>
                </div>
                <div className="col-md-8 pb-5">
                  <div className="d-flex">
                  {/* <div className="d-flex ftco-animate"> */}
                  <img className="img-fluid" src="images/undraw_pair_programming_njlp.svg" alt="" data-pagespeed-url-hash="880722902" onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ">
              <span className="subheading">Learn</span>
              <h2 className="mb-4">Technologies</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 nav-link-wrap mb-5 pb-md-5 pb-sm-1 ">
              <div className="nav  nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-nextgen-tab" data-toggle="pill" href="#v-pills-nextgen" role="tab" aria-controls="v-pills-nextgen" aria-selected="true">Basic Programming</a>
                <a className="nav-link" id="v-pills-performance-tab" data-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-performance" aria-selected="false">Web Development</a>
                <a className="nav-link" id="v-pills-effect-tab" data-toggle="pill" href="#v-pills-effect" role="tab" aria-controls="v-pills-effect" aria-selected="false">Machine Learning</a>
              </div>
            </div>
            <div className="col-md-12 align-items-center ">
              <div className="tab-content " id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-nextgen" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                  <div className="d-md-flex">
                    <div className="one-forth align-self-center">
                      <img src="images/undraw_laravel_and_vue_59tp.svg" className="img-fluid" alt="" data-pagespeed-url-hash="3715824164" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                    <div className="one-half ml-md-5 align-self-center">
                      <h2 className="mb-4">Basic Programming</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                      <p><a href="basic-programming.html" className="btn btn-primary py-3">Learn Basic Programming</a></p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-performance" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                  <div className="d-md-flex">
                    <div className="one-forth order-last align-self-center">
                      <img src="images/undraw_visual_data_b1wx.svg" className="img-fluid" alt="" data-pagespeed-url-hash="789005919" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                    <div className="one-half order-first mr-md-5 align-self-center">
                      <h2 className="mb-4">Web Development</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                      <p><a href="web-development.html" className="btn btn-primary py-3">Learn Web Development</a></p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-effect" role="tabpanel" aria-labelledby="v-pills-effect-tab">
                  <div className="d-md-flex">
                    <div className="one-forth align-self-center">
                      <img src="images/undraw_business_plan_5i9d.svg" className="img-fluid" alt="" data-pagespeed-url-hash="2444329171" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                    <div className="one-half ml-md-5 align-self-center">
                      <h2 className="mb-4">Machine Learning</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                      <p><a href="machine-learning.html" className="btn btn-primary py-3">Learn Machine Learning</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section services-section bg-white">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ">
              <h2 className="mb-4">About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis, commodi porro, magni ut harum itaque, maxime impedit quam quod ullam? Fugiat sint eum sequi tenetur illum atque voluptate. Veritatis?</p>
            </div>
          </div>
        </div>
      </section>


      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section  fadeInUp ">
              <h2 className="mb-4">FAQ</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12  fadeInUp ">
              <div id="accordion">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menuone" aria-expanded="false" aria-controls="menuone">What is your domain name? <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                      </div>
                      <div id="menuone" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menutwo" aria-expanded="false" aria-controls="menutwo">How long is my domain name valid? <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                      </div>
                      <div id="menutwo" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu3" aria-expanded="false" aria-controls="menu3">Can I sell my domain name? <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                      </div>
                      <div id="menu3" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu4" aria-expanded="false" aria-controls="menu4">Can I cancel a domain? <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                      </div>
                      <div id="menu4" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu5" aria-expanded="false" aria-controls="menu5">How do I transfer a domain name? <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                      </div>
                      <div id="menu5" className="collapse">
                        <div className="card-body">
                          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#menu6" aria-expanded="false" aria-controls="menu6">How do I setup URL forwarding? <span className="collapsed"><i className="ion-ios-arrow-up"></i></span><span className="expanded"><i className="ion-ios-arrow-down"></i></span></a>
                      </div>
                      <div id="menu6" className="collapse">
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
    </div>
    )
}

export default Home