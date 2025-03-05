import './App.css'
import './reset.css'

function App() {
  return (
    <>
      <header className="header-js">
      <div className="left">
        <div className="logo-area">
          <div className="logo-padding">
            <div className="logo-body">
              <a href="../index.html" className="logo">
                <img src="image/logo.png" alt="home page link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
 
    <nav className="menulist-container">
      <ul className="menulist">
        <li>
          <a href="../index.html">Home</a>
        </li>
        <li>
          <a href="Q&A.html">Quiz</a>
        </li>
        <li>
          <a href="donation.html">Support Us</a>
        </li>
      </ul>
    </nav>
    
    <div className="table-of-contents">
      <hr />
      <a className="toc" data-id="1">
        <p>Introduction</p>
        <h4>1</h4>
      </a>

      <a className="toc" data-id="2">
        <p>Animals</p>
        <h4>2</h4>
      </a>

      <a className="toc" data-id="3">
        <p>Data</p>
        <h4>3</h4>
      </a>

      <a className="toc" data-id="4">
        <p>News</p>
        <h4>4</h4>
      </a>

      <a className="toc" data-id="5">
        <p>Other</p>
        <h4>5</h4>
      </a>
      <hr />
    </div>

    <main>
      <section className="plastic-intro-section">
        <img src="image/fishing-net-new.svg" alt="" />
        <div className="padding">
          <div className="column">
            <div className="left">
              <div className="section-title">
                <h1><span>01</span><span>Fishing Net</span></h1>
              </div>
              <p className="txt" id="area1">
                How do fishing nets impact seabirds and marine mammals?
              </p>
            </div>
            <div className="right">
              <h2 className="sub-title">
                Fishing nets, especially lost or discarded ones, have severely
                impacted the lives of seabirds and marine mammals around the
                world.
              </h2>
              <p className="txt">
                Fishing nets are useful tools for fishermen to catch fish,
                allowing them to capture large quantities at once. However,
                during use, they can become damaged or lost. When this happens,
                the nets can be left behind in the ocean, contributing to the
                problem of marine debris.
              </p>

              <div className="img-wrapper">
                <a href="#marine-creature-1">
                  <div className="img-bg">
                    <div className="circle"></div>
                    <div className="circle-small marine-creature-1">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <img src="image/dophins.svg" alt="dolphins" /></div
                ></a>
                <a href="#marine-creature-2">
                  <div className="img-bg">
                    <div className="circle"></div>
                    <div className="circle-small marine-creature-2">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <img src="image/whale.svg" alt="whales" /></div
                ></a>
                <a href="#marine-creature-3">
                  <div className="img-bg">
                    <div className="circle"></div>
                    <div className="circle-small marine-creature-3">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <img src="image/seagulls.svg" alt="seagulls" /></div
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="animal-intro-section">
        <div className="bg">
          <div className="padding">
            <div className="slider-container">
              <div className="slider">
                <div className="slide-wrapper" id="slide-wrapper">
                  <div className="slide active" id="marine-creature-1">
                    <div className="context">
                      <h3 id="area2">DOLPHINS</h3>
                      <p>
                        Dolphins are highly intelligent mammals with excellent
                        memory. They often appear in human sight in various
                        ways, such as at marine parks or during boat excursions.
                        In the ocean, dolphins are skilled swimmers, capable of
                        reaching speeds of around 60 kilometers per hour.
                      </p>
                    </div>
                    <img src="image/dophins.svg" alt="dolphins.svg" />
                  </div>

                  <div className="slide" id="marine-creature-2">
                    <div className="context">
                      <h3>WHALE</h3>
                      <p>
                        Whales are the largest mammals on Earth, feeding on
                        marine life such as fish and krill. Notably, they are
                        quite social animals. However, due to their massive
                        size, whales can easily become accidentally entangled in
                        fishing nets.
                      </p>
                    </div>
                    <img src="image/whale.svg" alt="whale.svg" />
                  </div>

                  <div className="slide" id="marine-creature-3">
                    <div className="context">
                      <h3>SEAGULLS</h3>
                      <p>
                        Seagulls are seabirds primarily characterized by their
                        black, white, and gray feathers. They typically feed on
                        small fish, shrimp, and algae. Seagulls can be seen all
                        over the world, and because of this, they are often
                        considered a part of coastal scenery. Unfortunately,
                        human-generated waste poses a threat to these birds.
                      </p>
                    </div>

                    <img src="image/seagulls.svg" alt="seagulls.svg" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="indicator">
        <span className="btn active"></span>
        <span className="btn"></span>
        <span className="btn"></span>
      </div>

      <div className="decoration-img">
        <img src="image/garbage01.svg" alt="image" className="decoration-img-2"/>
      </div>

      <section className="data-garbage-section">
        <div className="data-garbage-bg"></div>
        <div className="data-garbage-container" id="area3">
          <div className="padding">
            <div className="column">
              <div className="left">
                <div className="section-title">
                  <h1 id="special-num"><span>03</span></h1>
                  <h1><span>Amount Of Waste</span></h1>
                </div>
                <div className="circle-container">
                  <div className="data-bg-circle"></div>
                  <div className="data-bg-circle2"></div>
                </div>
              </div>
              <div className="right">
                <h2>2024 Statistical Data</h2>
                <div className="data">
                  <div className="data-color-1" id="Datacolor-1">
                    <h4>Fishing vessel equipment</h4>
                    <div className="data-num">6638</div>
                  </div>
                </div>
                <div className="data">
                  <div className="data-color-2">
                    <h4>Fishing Net</h4>
                    <div className="data-num">5941</div>
                  </div>
                </div>
                <div className="data">
                  <div className="data-color-3">
                    <h4>Fishing gear</h4>
                    <div className="data-num">4063</div>
                  </div>
                </div>
                  
                <a href="https://iocean.oca.gov.tw/OCA_OceanConservation/PUBLIC/Marine_Litter_v2.aspx">
                  <div className="txt">
                    <p>Unit: pieces</p>
                    <p>Statistical data: iOcean</p>
                  </div>
                </a>
                  
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="full-bg"></div>

      <section className="news-intro-section-bg">
        <div className="news-intro-section">
          <h3>NEWS</h3>
          <div className="padding">
            <div className="column">
              <div className="news-container marine-creature-1-news" id="area4">
                <img src="image/dolphin.jpg" alt="dolphin" />
                <h2 className="sub-title">Dolphin</h2>
                <div className="txt">
                  <p>
                    Fishing nets entangle dolphins, leading to the death of a
                    Taiwanese white dolphin stranded on Kinmen.
                  </p>
                  <a
                    href="https://wuo-wuo.com/report/instantnews/1996-20240529news"
                  >
                    <button className="learn-more-btn">
                      <div className="learn-more-txt">
                        <h2>Visit Web</h2>
                        <div className="arrow-wrapper">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>

              <div className="news-container marine-creature-2-news">
                <img src="image/whale.jpg" alt="whale" />
                <h2 className="sub-title">Whale</h2>
                <div className="txt">
                  <p>
                    The whale unfortunately got tangled in fishing nets. The
                    civilians in Colombia worked together to help free it.
                  </p>
                  <a
                    href="https://tw.news.yahoo.com/%E5%BD%B1-%E5%8D%B3%E5%88%BB%E6%95%91%E6%8F%B4%E6%B5%B7%E4%B8%8A%E7%89%88-%E9%AF%A8%E9%AD%9A%E4%B8%8D%E5%B9%B8%E9%81%AD%E6%BC%81%E7%B6%B2%E7%BA%8F%E4%BD%8F-%E5%93%A5%E5%80%AB%E6%AF%94%E4%BA%9E%E8%BB%8D%E6%B0%91%E9%BD%8A%E5%8A%9B%E5%8A%A9%E8%84%AB%E5%9B%B0-094656740.html"
                  >
                    <button className="learn-more-btn">
                      <div className="learn-more-txt">
                        <h2>Visit Web</h2>
                        <div className="arrow-wrapper">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>

              <div className="news-container marine-creature-3-news">
                <img src="image/seagull.jpg" alt="seagull" />
                <h2 className="sub-title">Seagull</h2>
                <div className="txt">
                  <p>Seagull wrapped in fishing net rescued in Weymouth.</p>
                  <a
                    href="https://www.dorsetecho.co.uk/news/24328104.seagull-wrapped-fishing-net-rescued-weymouth/"
                  >
                    <button className="learn-more-btn">
                      <div className="learn-more-txt">
                        <h2>Visit Web</h2>
                        <div className="arrow-wrapper">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="decoration-img">
        <img src="image/garbage02.svg" alt="image" className="decoration-img-3"/>
      </div>

      <div className="plastic-link-section-bg"></div>
      <div className="plastic-link-bg">
        <section
          className="plastic-link-section plastic-intro-section"
          id="plasticbag-link"
        >
          <img src="image/plasticbag-new.svg" alt="plastic bag" />
          <div className="padding">
            <div className="column">
              <div className="left">
                <div className="section-title">
                  <h1>
                    <span>02</span><br /><span id="area5">PLASTIC BAG</span>
                  </h1>
                </div>
              </div>
              <div className="right">
                <p className="txt">
                  Plastic bags are a very convenient daily item for humans, but
                  they pose a threat to marine creatures such as sea turtles,
                  whale sharks, and albatrosses. This may be because they
                  resemble their food or because they become mixed in with their
                  food.
                </p>

                <a href="plastic-bags.html">
                  <button className="learn-more-btn">
                    <div className="learn-more-img">
                      <img src="image/shopping_bag_rejibukuro.png" alt="" />
                    </div>
                    <div className="learn-more-txt">
                      <h2>Learn More</h2>
                      <div className="arrow-wrapper">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="plastic-link-section plastic-intro-section link-right-section"
          id="microplastic-link"
        >
          <img src="image/microplastic-new.svg" alt="microplastic" />
          <div className="padding">
            <div className="column">
              <div className="left">
                <div className="section-title">
                  <h1><span>03</span><br /><span>MICROPLASTICS</span></h1>
                </div>
              </div>
              <div className="right">
                <p className="txt">
                  Plastic microplastics are currently harming the natural
                  environment; they are difficult to remove and filter.
                  Additionally, microplastics have begun to affect human health.
                </p>
                <a href="microplastic.html"
                  ><button className="learn-more-btn">
                    <div className="learn-more-img">
                      <img src="image/petbottle_water_full.png" alt="" />
                    </div>
                    <div className="learn-more-txt">
                      <h2>Learn More</h2>
                      <div className="arrow-wrapper">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </div></button
                ></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer className="footer-section">
      <div className="container">
        <div className="footer-widget-01">
          <div className="footer-logo">
            <a href="../index.html"><img src="image/logo1.svg" alt="logo" /></a>
          </div>
          <hr />
          <div className="footer-text">
            <p>
              Through education, advocacy, and hands-on conservation efforts, we
              aim to safeguard ocean biodiversity, reduce pollution, and promote
              sustainable practices.
            </p>
          </div>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-title">
            <h3>Useful Links</h3>
          </div>
          <ul className="inline-grid ul-container">
            <li><a href="../index.html">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-title">
            <h3>Follow Us</h3>
          </div>
          <div className="footer-text">
            <p>
              Follow our social media pages to stay updated with the latest
              marine ecology information.
            </p>
          </div>
          <div className="social-logos inline-flex social-media">
            <a href="#"><i className="ri-instagram-fill"></i></a>
            <a href="#"><i className="ri-facebook-box-fill"></i></a>
            <a href="#"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
