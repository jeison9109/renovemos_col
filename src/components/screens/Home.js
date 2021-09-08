import React from "react";
import "../styles/home.css";
//import fondo from "../img/fondo.jpg";
//import rayas from "../img/rayas.png";
import logo from "../img/logo.png";
import "../styles/footer.css";

export const Home = () => {
  return (
    <>
      <div className="fond-ini">
        {/*  <img src={fondo} alt={fondo} />*/}
        <div className="container1">
          <div className="row">
            <div className="col-md-8">
              <div className="main-content">
                <h1>Renovemos Colombia</h1>
                <h4>
                  Somos un movimiento político renovador, con pensamiento
                  incluyente, en donde con las distintas posiciones ideológicas,
                  religiosas, raciales, sociales, económicas y de género,
                  podamos construir un nuevo proyecto de nación. Basados en la
                  libertad de un pensamiento vanguardista y defensor incansable
                  de los Derechos Constitucionales. Conformada por líderes
                  empresariales, juventudes, campesinos, religiosos, culturales
                  y sociales, libres e independientes, con vocación de
                  participación política a nivel local, regional y nacional,
                  como alternativa de pensamiento ideológico y participativo en
                  Colombia.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="logo">
          <img className="logo" src={logo} logo={logo} />
        </div>
      </div>

      {/** <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>*/}
    </>
  );
};
