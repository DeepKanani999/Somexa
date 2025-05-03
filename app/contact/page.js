"use client";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";

const Contact = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+917779096777"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/DV8NxwoPHecb7eh4A", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917779096777", "_blank"); // Replace with your number
  };

  const handleMail = () => {
    window.location.href = "mailto:info@plixon.in"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://facebook.com/yourprofile", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/yourprofile", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/yourprofile", "_blank");
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Have a look at this amazing website.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  return (
    <Layout>
      <PageBanner title={"Contact us"} />

      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-115 pb-100">
        <div
          className={`floating-social-bar ${showBar ? "visible" : ""}`}
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
            width: "50%",
            backgroundColor: "#fff",
            zIndex: 9999,
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease-in-out",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="d-none d-md-flex row"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="row">
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleCall}>
                  <img
                    src="assets/images/icons/call.webp"
                    alt="Call"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Call Us
                </button>
              </div>
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleLocation}>
                  <img
                    src="assets/images/icons/g-map.png"
                    alt="Location"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  Location
                </button>
              </div>
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleWhatsApp}>
                  <img
                    src="assets/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  WhatsApp
                </button>
              </div>
              <div className="col-auto">
                <button className="social-main-btn" onClick={handleMail}>
                  <img
                    src="assets/images/icons/gmail.png"
                    alt="Mail"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Mail
                </button>
              </div>
              <div className="col-auto">
                <button
                  className="social-rounded-btn"
                  onClick={handleFacebook}
                  style={{
                    padding: "8px",
                    backgroundColor: "#3A559F",
                    marginRight: "10px",
                  }}
                >
                  <img src="assets/images/icons/facebook.png" alt="Facebook" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleInstagram}
                  style={{
                    padding: "8px",
                    backgroundColor: "#D03B98",
                    marginRight: "10px",
                  }}
                >
                  <img
                    src="assets/images/icons/instagram.png"
                    alt="Instagram"
                  />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleLinkedIn}
                  style={{
                    padding: "8px",
                    backgroundColor: "#0B63BD",
                    marginRight: "10px",
                  }}
                >
                  <img src="assets/images/icons/Linkedin.png" alt="LinkedIn" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleShare}
                  style={{ padding: "8px", backgroundColor: "#00ADFF" }}
                >
                  <img src="assets/images/icons/share.png" alt="Share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-title section-title-left mb-50">
                <span className="sub-title">Contact With Us</span>
                <h2>How Can We Help You</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-information-list">
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-location-pin" />
                  </div>
                  <div className="info">
                    <h5>Address</h5>
                    <p>
                      M-167, 4, Gujarat Housing Board Society, Bh. Angle Madras,
                      Cafe Akshar Marg, Near Amin Marg, Rajkot - 360001
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-mobile" />
                  </div>
                  <div className="info">
                    <h5>Phone</h5>
                    <p>
                      <a href="tel:+91 77790 96777">+91 77790 96777</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-email" />
                  </div>
                  <div className="info">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:info@plixon.in">info@plixon.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper-one mb-30 wow fadeInRight">
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="First Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Last Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Subject"
                            name="subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Your Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Map section ======*/}
      <div className="contact-page-map">
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=rajkot&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </div>
      {/*====== End Map section ======*/}
    </Layout>
  );
};
export default Contact;
