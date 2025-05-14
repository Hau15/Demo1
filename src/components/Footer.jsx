import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Cột About */}
          <div className="footer-col">
            <h5>About</h5>
            <div className="divider"></div>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
          </div>

          {/* Cột Informations */}
          <div className="footer-col">
            <h5>Informations</h5>
            <div className="divider"></div>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>

          {/* Cột Other Links */}
          <div className="footer-col">
            <h5>Other links</h5>
            <div className="divider"></div>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>

          {/* Cột Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <div className="divider"></div>
            <ul>
              <li><i className="fa-brands fa-github"></i> My company</li>
              <li><i className="fa fa-envelope"></i>📨 email@example.com</li>
              <li><i className="fa fa-phone"></i>📞 +33 1214 1516</li>
              <li><i className="fa fa-print"></i>📞 +33 1214 1516</li>
            </ul>
          </div>
        </div>

        {/* Phần cuối */}
        <div className="footer-bottom">
          <p><a href="#">Back to top</a></p>
          <p className="text-muted">Devpro</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;