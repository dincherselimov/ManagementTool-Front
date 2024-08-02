import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
        <div className="logo">
            <span>ZenTTechnology</span>
        </div>
        <div className="columns">
            <div className="column">
                <h3>Product</h3>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Platform</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Enterprise</a></li>
                </ul>
            </div>
            <div className="column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">FAQs</a></li>              
                </ul>
            </div>
            <div className="column">
                <h3>About Us</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
        <div className="newsletter">
            <h3>Subscribe Our Newsletter</h3>
            <div className="inputGroup">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
</footer>
  );
}
