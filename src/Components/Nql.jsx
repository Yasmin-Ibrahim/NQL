import React from 'react'
import '../Components/CSS/style.css';
import bgSec1 from '../assets/bg-sec1.svg';
import bgSec5 from '../assets/bg-sec5.svg';
import bgSec6 from '../assets/bg-sec6.svg';
import check_mark from '../assets/check-mark (1).svg';
import client1 from '../assets/client1.svg';
import client2 from '../assets/client2.svg';
import client3 from '../assets/client3.svg';
import Ellipse from '../assets/Ellipse 12 (3).svg';
import Frame from '../assets/Frame 520.svg';
import icone1 from '../assets/icon1.svg';
import icone2 from '../assets/icon2.svg';
import icone3 from '../assets/icon3.svg';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';
import index1 from '../assets/index1.svg';
import index2 from '../assets/index2.svg';
import index3 from '../assets/index3.svg';
import item1 from '../assets/item1.svg';
import item2 from '../assets/item2.svg';
import item3 from '../assets/item3.svg';
import pic1 from '../assets/pic1.svg';
import pic2 from '../assets/pic2.svg';
import pic3 from '../assets/pic3.svg';
import Rectangle_7 from '../assets/Rectangle7.svg';
import Rectangle_8 from '../assets/Rectangle8.svg';
import Rectangle_9 from '../assets/Rectangle9.svg';
import WhatsApp from '../assets/WhatsApp Image 2024-05-23 at 16.44 1.svg';

const NQL = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/Responsive.css" />
      <title>NQl</title>
      <header id="header">
        <div className="head">

          <div className="logo">
            <img
              src={WhatsApp}
              alt="NQL Logo"
            />
          </div>

          <div className="menu">
            <div className="menu-start">

              <ul>
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="icons-bar">
              <div className="menu-bar">
                <a href="">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </div>
              <div className="user">
                <a href="#">
                  <i className="fa-solid fa-user icon"></i>
                </a>
              </div>
            </div>
            <div className="menu-end">
              <a href="#" className="login">
                Login
              </a>
              <a href="#" className="sign active">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="sec-one">
          <div className="content-secOne">
            <h1>
              Intermediaries in <span>"NQLYAT solutions"</span>
            </h1>
            <p>
              can now transport more cargo and tackle any logistical challenge,
              thanks to access to the largest fleet and the widest data in the
              market.
            </p>
            <div className="get">
              <a href="" className="touch">
                get in touch
              </a>
            </div>
          </div>
        </section>
        <section className="sec-two">
          <div className="cirlce-left" />
          <div className="content-secTwo">
            <div className="icons">
              <div className="big-icon">
                <i className="fa-solid fa-arrow-up" />
              </div>
              <div className="small-icons">
                <i className="fa-solid fa-arrow-left left" />
                <i className="fa-solid fa-arrow-right right" />
              </div>
            </div>
            <p className="para1">
              Take advantage of the superior load-loading platforms of
              "NQLYATsolutions", which serve intermediaries of all sizes. Whether
              you are an emerging broker or a country-wide operation, the pallets
              for loading cargo for brokers from "transport solutions" guarantee
              prompt delivery of your shipments.
            </p>
            <p className="para2">
              Cargo loading platforms from "NQLYAT solutions" are designed to
              simplify your operations and keep your cargo in constant motion. We
              rely on actual transactions to deliver accurate market prices across
              various routes, while peer reviews direct you to the perfect carrier
              every time. With "transportation solutions", you can publish and
              search for trucks without limits, and stay informed thanks to instant
              alerts even when you are offline.
            </p>
            <div className="links-secTwo">
              <a href="#" className="quote">
                Get A Quote
              </a>
              <a href="#" className="learn">
                Learn More
              </a>
            </div>
          </div>
          <div className="images">
            <img src={index1} alt="picture track" className="index1" />
            <img src={index2} alt="picture boxes" className="index2" />
            <img src={index3} alt="picture ship" className="index3" />
          </div>
          <div className="cirlce-right" />
        </section>
        <section className="sec-three">
          <div className="content-secThree">
            <div className="arrows">
              <div className="icon-arrow">
                <i className="fa-solid fa-arrow-up" />
              </div>
              <div className="icon-arrow-shadow">
                <i className="fa-solid fa-arrow-up" />
              </div>
            </div>
            <div className="cont-cards">
              <div className="col main-color">
                <div className="card">
                  <div className="body-card">
                    <img src={icone1} alt="" />
                    <p className="info">
                      Cargo loading platforms from "NQLYAT solutions" are designed
                      to simplify your operations and keep your cargo in constant
                      motion.{" "}
                    </p>
                  </div>
                  <div className="arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="col bg">
                <div className="card">
                  <div className="body-card">
                    <img src={icone2} alt="" />
                    <p className="info">
                      We rely on actual transactions to deliver accurate market
                      prices across various routes, while peer reviews direct you to
                      the perfect carrier every time.
                    </p>
                  </div>
                  <div className="arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="col bg">
                <div className="card">
                  <div className="body-card">
                    <img src={icone3} alt="" />
                    <p className="info">
                      With "transportation solutions", you can publish and search
                      for trucks without limits, and stay informed thanks to instant
                      alerts even when you are offline.
                    </p>
                  </div>
                  <div className="arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-four">
          <div className="images-secFour">
            <div className="twoImages">
              <img src={img1} alt="image one" className="img1" />
              <img src={img3} alt="image two" className="img2" />
            </div>
            <div className="twoImages">
              <img src={img2} alt="image three" className="img3" />
              <img src={img4} alt="image four" className="img4" />
            </div>
          </div>
          <div className="content-secFour">
            <h3>NQLYAT loading platform</h3>
            <div className="all-data">
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>transportation solutions</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>shipping</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>charger</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>Middle East, </p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>North Africa</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>loads</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>communication</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>agreements</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>acceleration</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>business growth.</p>
                </a>
              </div>
              <div className="data">
                <a href="" className="mark">
                  <img src={check_mark} alt="" />
                  <p>ease</p>
                </a>
              </div>
            </div>
          </div>
        </section>


        <section className="sec-five">
          <div className="arrows">
            <div className="icon-arrow">
              <i className="fa-solid fa-arrow-up" />
            </div>
          </div>
          <div className="icon-arrow-shadow">
            <i className="fa-solid fa-arrow-up" />
          </div>
          <div className="para-head">
            <p>
              Elevate your organization with the leading Naqlyat loading panel for
              Achieve a national vision for your loads and expand your capacity and
              profitability by using industry-leading load loading platforms for
              brokers from "NQLYATsolutions".
            </p>
          </div>
          <div className="cols">
            <div className="col">
              <div className="item">
                <img src={item1} alt="" />
                <p>
                  Take advantage of the reliability and flexibility offered by
                  "NQLYAT solutions" to upgrade your business as a broker.
                </p>
              </div>
            </div>
            <div className="col dif-bg">
              <div className="item">
                <img src={item2} alt="" />
                <p>
                  Cargo loading platforms for brokers from "transport solutions"
                  connect you with the widest network of drivers, allowing you to
                  quickly match truckloads at the right price.
                </p>
              </div>
            </div>
            <div className="col dif-bg">
              <div className="item">
                <img src={item3} alt="" />
                <p>
                  Take a positive step forward by monitoring capacity and taking
                  advantage of our market trend data.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-read">
            <a href="#" className="read">
              Read More
            </a>
          </div>
        </section>


        <div className="height">
          <section className="sec-six">
            <div className="arrows">
              <div className="icon-arrow">
                <i className="fa-solid fa-arrow-up" />
              </div>
              <div className="icon-arrow-shadow">
                <i className="fa-solid fa-arrow-up" />
              </div>
            </div>
            <div className="paras">
              <p className="para1">
                Speeding up the carrier registration process and minimizing risks is
                part of the effective process of shipping agencies.
              </p>
              <p className="para2">
                <span>"NQLYAT Solutions"</span> offers a comprehensive solution that
                goes beyond the basic data of tonnage and freight.
              </p>
            </div>
            <div className="side-para">
              <span>Our customers</span> get exclusive access to the best carrier
              monitoring services and smooth registration processes, as well as
              Advanced Cargo Tracking Solutions, setting a new standard in freight
              brokerage
            </div>
            <div className="cards-imgs">
              <img src={pic1} alt="" />
              <img src={pic2} alt="" />
              <img src={pic3} alt="" />
            </div>
            <div className="btn-read">
              <a href="#" className="read">
                Read More
              </a>
            </div>
          </section>
        </div>
        <section className="sec-seven">
          <h2>
            what <span>our client</span> says
          </h2>
          <div className="circleSmall-left" />
          <div className="clints">
            <div className="col">
              <div className="card">
                <div className="card-info">
                  <img src={client1} alt="" />
                  <div className="info">
                    <h5>Ahmed</h5>
                    <span>Owner</span>
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
                <div className="discription">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis
                    enim donec etiam tellus. Ac malesuada bibendum faucibus
                    sollicitudin in amet at. Mauris donec pellentesque sit velit
                    massa sem eget ligula. Morbi elit quis placerat pharetra in.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-info">
                  <img src={client2} alt="" />
                  <div className="info">
                    <h5>Bakr</h5>
                    <span>Owner</span>
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
                <div className="discription">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis
                    enim donec etiam tellus. Ac malesuada bibendum faucibus
                    sollicitudin in amet at. Mauris donec pellentesque sit velit
                    massa sem eget ligula. Morbi elit quis placerat pharetra in.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-info">
                  <img src={client3} alt="" />
                  <div className="info">
                    <h5>Mohamed</h5>
                    <span>Owner</span>
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
                <div className="discription">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis
                    enim donec etiam tellus. Ac malesuada bibendum faucibus
                    sollicitudin in amet at. Mauris donec pellentesque sit velit
                    massa sem eget ligula. Morbi elit quis placerat pharetra in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="circleSmall-right" />
          <div className="icons">
            <div className="small-icons">
              <i className="fa-solid fa-arrow-left left" />
              <i className="fa-solid fa-arrow-right right" />
            </div>
          </div>
        </section>
        <section className="sec-eight">
          <h3>
            <span>Get</span> a Competitive Instant Quote
          </h3>
          <p>
            Fill out the form for LTL and Full Truckload rates. Quick access without
            login!
          </p>
          <div className="secEight-content">
            <div className="pic">
              <img src={Rectangle_8} alt="" />
            </div>
            <div className="form-container">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pickup-location">Pickup Location</label>
                    <select id="pickup-location" name="pickup-location">
                      <option value="">Pickup Location</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="delivery-location">Delivery Location</label>
                    <select id="delivery-location" name="delivery-location">
                      <option value="">Delivery Location</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="weight">Weight (Tons)</label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      step="0.01"
                      placeholder="Weight (Tons)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="load-category">Load Category</label>
                    <input
                      type="text"
                      id="load-category"
                      name="load-category"
                      placeholder="Load Category"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                      type="text"
                      id="company-name"
                      name="company-name"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-number">First Number</label>
                    <input
                      type="tel"
                      id="first-number"
                      name="first-number"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="second-number">Second Number</label>
                    <input
                      type="tel"
                      id="second-number"
                      name="second-number"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <button type="submit">Request Your Quote</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="sec-nine">
          <div className="footer">
            <div className="the-other-left">
              <div className="left">
                <div className="social">
                  <img
                    src={WhatsApp}
                    alt=""
                  />
                  <div className="text">
                    <p>
                      Nqlyat solutions: the leading shipping platform with superior
                      service quality
                    </p>
                    <h4>Get in touch</h4>
                  </div>
                </div>
                <div className="company-info">
                  <div className="icon-bar">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                      <p>Marie28@yahoo.com</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                      <p>Marie28@yahoo.com</p>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume" />
                      <p>360.766.0553</p>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume" />
                      <p>360.766.0553</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tags">
                <h4>company</h4>
                <div className="tags-names">
                  <ul>
                    <li>
                      <a href="#" className="active-foot">
                        home
                      </a>
                    </li>
                    <li>
                      <a href="#">solution</a>
                    </li>
                    <li>
                      <a href="#">pricing</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">about us</a>
                    </li>
                    <li>
                      <a href="#">news</a>
                    </li>
                    <li>
                      <a href="#">contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="subscribe">
                <div className="email">
                  <h4>subscribe</h4>
                  <div className="subscribe-container">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="email-input"
                    />
                    <button type="button" className="subscribe-button">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="follow">
                  <a
                    href="https://www.instagram.com"
                    className="social-icon"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.threads.net"
                    className="social-icon"
                    target="_blank"
                  >
                    <i className="fab fa-threads" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="social-icon"
                    target="_blank"
                  >
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    className="social-icon"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

export default NQL