"use client";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import { products } from "../products";
import { useEffect, useState } from "react";

const Products = () => {
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
      <PageBanner title={"Products"} />
      <section className="products-area pt-120 pb-120">
      <div
          className={`floating-social-bar ${showBar ? "visible" : ""}`}
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
            width: "80%",
            backgroundColor: "#fff",
            zIndex: 9999,
            justifyContent: "",
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
            {/* <div
              className="row"
              style={{
                justifyContent: "space-between",
                width: "100%",
                // alignItems: "center",
                display: "flex",
              }}
            >
                <div className="col-auto">
                  <button className="social-main-btn" onClick={handleCall}>
                    <img
                      src="/assets/images/icons/call.webp"
                      alt="Call"
                      style={{ height: "25px", width: "25px", marginRight: 10 }}
                    />
                    Call Us
                  </button>
                </div>
                <div className="col-auto">
                  <button className="social-main-btn" onClick={handleLocation}>
                    <img
                      src="/assets/images/icons/g-map.png"
                      alt="Location"
                      style={{ height: "30px", width: "30px", marginRight: 10 }}
                    />
                    Location
                  </button>
                </div>
                <div className="col-auto">
                  <button className="social-main-btn" onClick={handleWhatsApp}>
                    <img
                      src="/assets/images/icons/whatsapp.png"
                      alt="WhatsApp"
                      style={{ height: "30px", width: "30px", marginRight: 10 }}
                    />
                    WhatsApp
                  </button>
                </div>
                <div className="col-auto">
                  <button className="social-main-btn" onClick={handleMail}>
                    <img
                      src="/assets/images/icons/gmail.png"
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
                  <img src="/assets/images/icons/facebook.png" alt="Facebook" />
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
                    src="/assets/images/icons/instagram.png"
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
                  <img src="/assets/images/icons/Linkedin.png" alt="LinkedIn" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleShare}
                  style={{ padding: "8px", backgroundColor: "#00ADFF" }}
                >
                  <img src="/assets/images/icons/share.png" alt="Share" />
                </button>
              </div>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", // Optional: Makes it responsive
                width: "95%",
              }}
            >
              {/* Left Section: Main Social Buttons */}
              <div style={{ display: "flex", gap: "12px" }}>
                <button className="social-main-btn" onClick={handleCall}>
                  <img
                    src="/assets/images/icons/call.webp"
                    alt="Call"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Call Us
                </button>
                <button className="social-main-btn" onClick={handleLocation}>
                  <img
                    src="/assets/images/icons/g-map.png"
                    alt="Location"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  Location
                </button>
                <button className="social-main-btn" onClick={handleWhatsApp}>
                  <img
                    src="/assets/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  WhatsApp
                </button>
                <button className="social-main-btn" onClick={handleMail}>
                  <img
                    src="/assets/images/icons/gmail.png"
                    alt="Mail"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Mail
                </button>
              </div>

              {/* Right Section: Rounded Social Buttons */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  className="social-rounded-btn"
                  onClick={handleFacebook}
                  style={{ padding: "8px", backgroundColor: "#3A559F" }}
                >
                  <img src="/assets/images/icons/facebook.png" alt="Facebook" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleInstagram}
                  style={{ padding: "8px", backgroundColor: "#D03B98" }}
                >
                  <img
                    src="/assets/images/icons/instagram.png"
                    alt="Instagram"
                  />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleLinkedIn}
                  style={{ padding: "8px", backgroundColor: "#0B63BD" }}
                >
                  <img src="/assets/images/icons/Linkedin.png" alt="LinkedIn" />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleShare}
                  style={{ padding: "8px", backgroundColor: "#00ADFF" }}
                >
                  <img src="/assets/images/icons/share.png" alt="Share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="products-item-wrapper">
            <div className="row">
              {products.map((val) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25 wow fadeInUp">
                      <div className="product-img">
                        <Link href={`/product-details/${val.slug}`}>
                          <img
                            src={val?.image}
                            alt="products Image"
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a href={val?.image} className="icon img-popup">
                              <i className="ti-zoom-in" />
                            </a>
                          </div>
                        </div>
                        </Link>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <Link href={`/product-details/${val.slug}`}>
                            {val.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-2.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-2.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Green Plastic Light</Link>
                    </h3>
                    <span className="price">$120.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-3.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-3.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Leaser Photography</Link>
                    </h3>
                    <span className="price">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-4.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-4.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Nike Sports Shoe</Link>
                    </h3>
                    <span className="price">$232.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-5.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-5.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Room Decorator</Link>
                    </h3>
                    <span className="price">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-6.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-6.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Card Showcase</Link>
                    </h3>
                    <span className="price">$852.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-7.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-7.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Hand Watch</Link>
                    </h3>
                    <span className="price">$25.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-8.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-8.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Realstic Dumbell</Link>
                    </h3>
                    <span className="price">$50.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="assets/images/products/products-9.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="assets/images/products/products-9.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-center">
                    <h3 className="title">
                      <Link href="/product-details">Hand Speaker</Link>
                    </h3>
                    <span className="price">$250.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="button text-center mt-50 wow fadeInUp">
                  <a href="#" className="main-btn">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="products-item-wrapper">
            <div className="row">
              {products.map((val) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={val.slug}>
                    <div className="products-item products-item-one mb-25 wow fadeInUp">
                      <div className="product-img">
                        <Link href={`/product-details/${val.slug}`}>
                          <img
                            src={val?.image}
                            alt="products Image"
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        </Link>
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a href={val?.image} className="icon img-popup">
                              <i className="ti-zoom-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <Link href={`/product-details/${val.slug}`}>
                            {val.name}
                          </Link>
                        </h3>
                      </div>
                      <Link
                        href={`/product-details/${val.slug}`}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          className="flex items-center gap-2 px-3 py-1 mt-1 mb-4 border border-gray-300 rounded-lg transition"
                          style={{
                            backgroundColor: "#69C8C7",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center",
                            marginBottom: "30px",
                          }}
                        >
                          {/* <img
                            src="/assets/images/WhatsApp_Image.png"
                            alt="WhatsApp Icon"
                            style={{
                              height: "20px",
                              width: "20px",
                              marginRight: "8px",
                            }}
                          /> */}
                          <span
                            className="underline text-white"
                            style={{ fontSize: "20px" }}
                          >
                            View Details
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Products;
