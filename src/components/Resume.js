import React, { Component } from 'react';
import profile1 from '../assets/images/profile1.jpg';

class Resume extends Component{
    render() {

      return (
        <div>
          <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
            <div className="container position-relative">
              <h2 className="page-heading mb-3">Resume</h2>
              <a className="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto" href="https://themes.3rdwavemedia.com/resources/sketch-template/pillar-sketch-sketch-resume-template-for-developers/" target="_blank"><svg className="svg-inline--fa fa-download fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" /></svg>{/* <i class="fas fa-download mr-2"></i> */}Download PDF Version</a>
            </div>{/*//container*/}
          </div>{/*//header-intro*/}
          {/*//header*/}
          <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
              <header className="resume-header pt-4 pt-md-0">
                <div className="media flex-column flex-md-row">
                  <img className="mr-3 img-fluid picture mx-auto" src={profile1} alt="" />
                  <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                    <div className="primary-info">
                      <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Chirag Jain</h1>
                      <div className="title mb-3">MS CS Graduate Student at Arizona State University</div>
                      <ul className="list-unstyled">
                        <li className="mb-2"><a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html#"><svg className="svg-inline--fa fa-envelope fa-w-16 fa-fw mr-2" data-fa-transform="grow-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg style={{transformOrigin: '0.5em 0.5em'}}><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(1.1875, 1.1875)  rotate(0 0 0)"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" transform="translate(-256 -256)" /></g></g></svg>{/* <i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i> */}cnjain@asu.edu</a></li>
                        <li><a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html#"><svg className="svg-inline--fa fa-mobile-alt fa-w-10 fa-fw mr-2" data-fa-transform="grow-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg style={{transformOrigin: '0.3125em 0.5em'}}><g transform="translate(160 256)"><g transform="translate(0, 0)  scale(1.375, 1.375)  rotate(0 0 0)"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" transform="translate(-160 -256)" /></g></g></svg>{/* <i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i> */}480-434-9801</a></li>
                      </ul>
                    </div>{/*//primary-info*/}
                    <div className="secondary-info ml-md-auto mt-2">
                      <ul className="resume-social list-unstyled">
                        <li className="mb-3"><a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html#"><span className="fa-container text-center mr-2"><svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>{/* <i class="fab fa-linkedin-in fa-fw"></i> */}</span>linkedin.com/in/stevedoe</a></li>
                        <li className="mb-3"><a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html#"><span className="fa-container text-center mr-2"><svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" /></svg>{/* <i class="fab fa-github-alt fa-fw"></i> */}</span>github.com/username</a></li>
                        <li className="mb-3"><a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html#"><span className="fa-container text-center mr-2"><svg className="svg-inline--fa fa-codepen fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" /></svg>{/* <i class="fab fa-codepen fa-fw"></i> */}</span>codepen.io/username/</a></li>
                        <li><a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html#"><span className="fa-container text-center mr-2"><svg className="svg-inline--fa fa-globe fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" /></svg>{/* <i class="fas fa-globe"></i> */}</span>yourwebsite.com</a></li>
                      </ul>
                    </div>{/*//secondary-info*/}
                  </div>{/*//media-body*/}
                </div>{/*//media*/}
              </header>
              <div className="resume-body p-5">
                <section className="resume-section summary-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                  <div className="resume-section-content">
                    <p className="mb-0">Summarise your career here.  Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                </section>{/*//summary-section*/}
                <div className="row">
                  <div className="col-lg-9">
                    <section className="resume-section experience-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                      <div className="resume-section-content">
                        <div className="resume-timeline position-relative">
                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">Lead Developer</h3>
                                <div className="resume-company-name ml-auto">Startup Hub</div>
                              </div>{/*//row*/}
                              <div className="resume-position-time">2018 - Present</div>
                            </div>{/*//resume-timeline-item-header*/}
                            <div className="resume-timeline-item-desc">
                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                              <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                              <ul>
                                <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                                <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                                <li>Maecenas tempus tellus eget.</li>
                              </ul>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                              <ul className="list-inline">
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Angular</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Python</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">jQuery</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Webpack</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">PostgresSQL</span></li>
                              </ul>
                            </div>{/*//resume-timeline-item-desc*/}
                          </article>{/*//resume-timeline-item*/}
                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Developer</h3>
                                <div className="resume-company-name ml-auto">Google</div>
                              </div>{/*//row*/}
                              <div className="resume-position-time">2014 - 2018</div>
                            </div>{/*//resume-timeline-item-header*/}
                            <div className="resume-timeline-item-desc">
                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                              <ul className="list-inline">
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Redux</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Webpack</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MySQL</span></li>
                              </ul>
                            </div>{/*//resume-timeline-item-desc*/}
                          </article>{/*//resume-timeline-item*/}
                          <article className="resume-timeline-item position-relative pb-5">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">Co-Founder &amp; Lead Developer</h3>
                                <div className="resume-company-name ml-auto">To-do Lists</div>
                              </div>{/*//row*/}
                              <div className="resume-position-time">2012 - 2014</div>
                            </div>{/*//resume-timeline-item-header*/}
                            <div className="resume-timeline-item-desc">
                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                              <ul className="list-inline">
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Django</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">JavaScript</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Node.js</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Require.js</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/SASS</span></li>
                              </ul>
                            </div>{/*//resume-timeline-item-desc*/}
                          </article>{/*//resume-timeline-item*/}
                          <article className="resume-timeline-item position-relative">
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">Web Developer <small className="text-muted">(Intern)</small></h3>
                                <div className="resume-company-name ml-auto">Amazon</div>
                              </div>{/*//row*/}
                              <div className="resume-position-time">2011 - 2012</div>
                            </div>{/*//resume-timeline-item-header*/}
                            <div className="resume-timeline-item-desc">
                              <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                              <ul className="list-inline">
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Ruby on Rails</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">jQuery</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/LESS</span></li>
                                <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
                              </ul>
                            </div>{/*//resume-timeline-item-desc*/}
                          </article>{/*//resume-timeline-item*/}
                        </div>{/*//resume-timeline*/}
                      </div>
                    </section>{/*//experience-section*/}
                  </div>
                  <div className="col-lg-3">
                    <section className="resume-section skills-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                      <div className="resume-section-content">
                        <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                          <ul className="list-unstyled mb-4">
                            <li className="mb-2">
                              <div className="resume-skill-name">Angular</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '98%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">React</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '94%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">JavaScript</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '96%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">Node.js</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '92%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '96%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                          </ul>
                        </div>{/*//resume-skill-item*/}
                        <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                          <ul className="list-unstyled">
                            <li className="mb-2">
                              <div className="resume-skill-name">Python/Django</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '95%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">Ruby/Rails</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '92%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">PHP</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '86%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="resume-skill-name">WordPress/Shopify</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '82%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </li>
                          </ul>
                        </div>{/*//resume-skill-item*/}
                        <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Wireframing</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Sketch</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Balsamiq</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">WordPress</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Shopify</span></li>
                          </ul>
                        </div>{/*//resume-skill-item*/}
                      </div>{/*resume-section-content*/}
                    </section>{/*//skills-section*/}
                    <section className="resume-section education-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                      <div className="resume-section-content">
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <div className="resume-degree font-weight-bold">MSc in Computer Science</div>
                            <div className="resume-degree-org">University College London</div>
                            <div className="resume-degree-time">2010 - 2011</div>
                          </li>
                          <li>
                            <div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
                            <div className="resume-degree-org">Imperial College London</div>
                            <div className="resume-degree-time">2007 - 2010</div>
                          </li>
                        </ul>
                      </div>
                    </section>{/*//education-section*/}
                    <section className="resume-section reference-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                      <div className="resume-section-content">
                        <ul className="list-unstyled resume-awards-list">
                          <li className="mb-2 pl-4 position-relative">
                            <svg className="svg-inline--fa fa-trophy fa-w-18 resume-award-icon position-absolute" data-fa-transform="shrink-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg style={{transformOrigin: '0.5625em 0.5em'}}><g transform="translate(288 256)"><g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" transform="translate(-288 -256)" /></g></g></svg>{/* <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i> */}
                            <div className="resume-award-name">Award Name Lorem</div>
                            <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</div>
                          </li>
                          <li className="mb-0 pl-4 position-relative">
                            <svg className="svg-inline--fa fa-trophy fa-w-18 resume-award-icon position-absolute" data-fa-transform="shrink-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg style={{transformOrigin: '0.5625em 0.5em'}}><g transform="translate(288 256)"><g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" transform="translate(-288 -256)" /></g></g></svg>{/* <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i> */}
                            <div className="resume-award-name">Award Name Ipsum</div>
                            <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
                          </li>
                        </ul>
                      </div>
                    </section>{/*//interests-section*/}
                    <section className="resume-section language-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                      <div className="resume-section-content">
                        <ul className="list-unstyled resume-lang-list">
                          <li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                          <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                          <li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                        </ul>
                      </div>
                    </section>{/*//language-section*/}
                    <section className="resume-section interests-section mb-5">
                      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                      <div className="resume-section-content">
                        <ul className="list-unstyled">
                          <li className="mb-1">Climbing</li>
                          <li className="mb-1">Snowboarding</li>
                          <li className="mb-1">Cooking</li>
                        </ul>
                      </div>
                    </section>{/*//interests-section*/}
                  </div>
                </div>{/*//row*/}
              </div>{/*//resume-body*/}
            </div>
          </article>
        </div>
       );
    }
  }
  export default Resume;