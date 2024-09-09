function Signup() {
  return (
    <>
      <>
        <header>
          <div className="header-container">
            <div className="left-container">
              <a href="#" className="logo">
                Exclusive
              </a>
              <div className="navigation">
                <a href="#home" className="nav-link">
                  Home
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
                <a href="#about" className="nav-link">
                  About
                </a>
                <a href="account.html" className="nav-link">
                  Sign Up
                </a>
              </div>
            </div>
            <div className="right-container">
              <div className="search-shit">
                <input
                  type="text"
                  className="search-input"
                  placeholder="What are you looking for?"
                  maxLength={45}
                />
              </div>
              <div className="header-icons">
                <img
                  src="assets/icons/wishlist icon.svg"
                  alt="wishlist"
                  className="header-icon"
                />
                <img
                  src="assets/icons/cart icon.svg"
                  alt=""
                  className="header-icon"
                />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="sign-up-container">
            <div className="sign-up-image">
              <img src="assets/Side Image.png" alt="" />
            </div>
            <form action="" id="sign-up-form">
              <div className="form-top">
                <p className="sign-title">Create an account</p>
                <p className="sign-desc">Enter your details below</p>
              </div>
              <div className="form-credentials">
                <div className="form-inputs">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="form-input"
                  />
                  <input
                    type="email"
                    id="emailphone"
                    placeholder="Email or Phone Number"
                    autoComplete="off"
                    className="form-input"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="form-input"
                  />
                </div>
                <div className="form-buttons">
                  <button
                    type="submit"
                    id="create-acc-btn"
                    className="form-button"
                  >
                    Create Account
                  </button>
                  <button id="google-btn" className="form-button">
                    <img
                      src="assets/icons/Icon-Google.svg"
                      alt=""
                      className="google-logo"
                    />
                    <span>Sign up with Google</span>
                  </button>
                </div>
                <p className="login-link">
                  Already have an account?
                  <a href="login.html" id="login">
                    Log in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
        <footer>
          <div className="footer-container">
            <div className="footer-block" id="footer-block1">
              <p className="logo">Exclusive</p>
              <p className="subscribe">Subscribe</p>
              <p className="footer-block-desc">Get 10% off your first order</p>
              <div className="email-subsciption">
                <input
                  type="email"
                  name="email"
                  id="newsletterSubscip"
                  className="email-sub"
                  autoComplete="off"
                  placeholder="Enter you email"
                />
              </div>
            </div>
            <div className="footer-block" id="footer-block2">
              <p className="block-title">Support</p>
              <div className="block-detail">
                <p className="address">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
                <p className="email">exclusive@gmail.com</p>
                <p className="number">+88015-88888-9999</p>
              </div>
            </div>
            <div className="footer-block" id="footer-block3">
              <p className="block-title">Acount</p>
              <div className="block-detail">
                <a href="#" className="footer-link">
                  My Account
                </a>
                <a href="#" className="footer-link">
                  Login / Register
                </a>
                <a href="#" className="footer-link">
                  Cart
                </a>
                <a href="#" className="footer-link">
                  Wishlist
                </a>
                <a href="#" className="footer-link">
                  Shop
                </a>
              </div>
            </div>
            <div className="footer-block" id="footer-block4">
              <p className="block-title">Quick Links</p>
              <div className="block-detail">
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Terms Of Use
                </a>
                <a href="#" className="footer-link">
                  FAQ
                </a>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <p className="copyright">Copyright Rimel 2022. All right reserved</p>
        </footer>
      </>
    </>
  );
}

export default Signup;
