import React from "react";
import { SocialIcon } from "react-social-icons";

function footer() {
  return (
    <div>
      <footer class="bg-dark text-inverse">
        <div class="container py-13 py-md-15">
          <div class="row gy-6 gy-lg-0">
            <div class="col-lg-4">
              <div class="widget">
                TechFusor
                {/* <img
                  class="mb-4"
                  src="./assets/img/logo-light.png"
                  srcset="./assets/img/logo-light@2x.png 2x"
                  alt=""
                /> */}
                <p class="mb-4">© 2024 TechFusor. All rights reserved.</p>
                <nav class="nav social social-white">
                  <a href="#">
                    <i class="uil uil-twitter"></i>
                  </a>
                  {/* <a href="#">
                    <i class="uil uil-facebook-f"></i>
                  </a> */}
                  <a href="https://github.com/TechFusor" target="_blank">
                    <i class="uil uil-github"></i>
                  </a>
                  <a href="#">
                    <i class="uil uil-linkedin"></i>
                  </a>
                  <a href="https://discord.gg/SjHYaSw2" target="_blank">
                    <i class="uil uil-discord"></i>
                  </a>
                </nav>
              </div>
            </div>

            <div class="col-md-4 col-lg-2 offset-lg-2">
              <div class="widget">
                <h4 class="widget-title mb-3 text-white">Need Help?</h4>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Get Started</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-lg-2">
              <div class="widget">
                <h4 class="widget-title mb-3 text-white">Learn More</h4>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>

                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-lg-2">
              <div class="widget">
                <h4 class="widget-title  text-white">Get in Touch</h4>
                <address>
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:techfusor@gmail.com">techfusor@gmail.com</a>
                <br /> 00 (123) 456 78 90
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
