"use client";
import ListingDetailsRight from "@/components/ListingDetailsRight";
import VideoPopup from "@/components/VideoPopup";
import Layout from "@/layouts/Layout";
import { GallerySlider2, reletedListingSlider2 } from "@/sliderProps";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../../styles/style.css";
import { products } from "@/products";
import BottomTab from "@/components/BottomBar";
import UserInfoPopup from "@/components/userDetailPopup";

const heroImages = [
  "/assets/Hero-Banner/TV-setup-1.jpg",
  "/assets/Hero-Banner/TV-setup-2.jpg",
  "/assets/Hero-Banner/TV-setup-3.jpg",
];

const populerSearches = [
  "Best TVs 2025",
  "TVs under $500",
  "OLED vs QLED",
  "Gaming smart TV",
  "Top TV brands",
  "TV buying guide",
  "TVs with great sound",
  "Best for streaming",
  "TV with Wi-Fi & BT",
  "Mirror phone to TV",
  "Alexa/Google TV",
  "Connect soundbar",
  "Reset smart TV",
  "Best 4K HDR TV",
  "Dolby vs HDR10",
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500, // 3.5 seconds
  fade: false,
  responsive: [
    {
      breakpoint: 768, // mobile and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const storyItems = [
  { id: 1, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 2, type: "image", src: "/assets/images/Story/story1.jpg" },
  { id: 3, type: "video", src: "/assets/images/Story/story4.mp4" },
  { id: 4, type: "image", src: "/assets/images/Story/story2.jpg" },
  { id: 5, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 6, type: "image", src: "/assets/images/Story/story2.jpg" },
];

export function SocialStoriesSection() {
  return (
    <div>
      <h4
        className="title"
        style={{ marginBottom: "20px", marginLeft: "10px" }}
      >
        Reels
      </h4>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px",
          scrollbarWidth: "none",
          width: "100%",
          height: "300px", // Adjust as needed
        }}
      >
        {storyItems.map((item) => (
          <div
            key={item.id}
            style={{
              flex: "0 0 auto",
              width: "175px",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Story ${item.id}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.src}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                controls
                autoPlay
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What makes Plixon Smart TVs different from other brands?",
    answer:
      "Plixon Smart TVs offer cutting-edge display technology, intuitive user interfaces, and seamless integration with popular streaming platforms—all at an affordable price.",
  },
  {
    question: "Do Plixon Smart TVs support 4K and HDR?",
    answer:
      "Yes! Most Plixon models support 4K Ultra HD resolution and HDR10, delivering stunning picture quality with vibrant colors and crisp details.",
  },
  {
    question: "What operating system do Plixon TVs use?",
    answer:
      "Plixon Smart TVs run on PlixonOS, a user-friendly, fast, and secure smart TV platform designed to give you easy access to your favorite content.",
  },
  {
    question: "Can I install apps on my Plixon Smart TV?",
    answer:
      "Absolutely. Plixon Smart TVs come with an app store where you can download apps like YouTube, Netflix, Amazon Prime Video, Spotify, and more.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  return (
    <div className="mb-20 px-6 md:px-16 py-10">
      <h4
        className="title"
        style={{ marginBottom: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        Frequently Asked Questions
      </h4>
      <div className="space-y-6" style={{ marginLeft: "10px" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{ borderRadius: 20 }}
            className="border my-2 border-gray-300 rounded-lg bg-white transition duration-300"
          >
            <button
              className="w-full flex items-center justify-between text-left pl-4 py-3 md:p-6 text-lg md:text-xl font-bold bg-white rounded-2xl"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="text-3xl ml-4" style={{ color: "#69C8C7" }}>
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && faq.answer && (
              <div className="px-4 md:px-6 py-2 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const HomeScreen = () => {
  const [showBar, setShowBar] = useState(false);
  const [requirementInput, setRequirementInput] = useState("");
  const [video, setVideo] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    const phoneNumber = "917779096777"; // Replace with your number
    const defaultMessage = `Hi, I'm interested in your products. Could you please provide more details?`;

    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleMail = () => {
    window.location.href = "mailto:info.plixon.in"; // Replace with your email
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

  const handleButtonClick = () => {
    if (!mounted) return;
    
    const userInfo = sessionStorage.getItem("userInfo");
    if (!userInfo) {
      setIsPopupOpen(true);
    } else {
      handleWhatsApp();
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const closeTab = () => {
    setVisible(false);
  };

  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      
      {mounted && isPopupOpen && !sessionStorage.getItem("userInfo") && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      )}

      {/*====== Popup ======*/}
      {/* {isClient && isPopupOpen && !sessionStorage.getItem("userInfo") && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      )} */}

      {/*====== Start Hero Banner Carousel ======*/}
      <div className="hero-banner-carousel">
        <Slider {...carouselSettings}>
          {heroImages.map((img, idx) => (
            <div key={idx} className="hero-slide">
              <img
                src={img}
                alt={`Hero Banner ${idx + 1}`}
                className="hero-banner-img"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/*====== End Hero Banner Carousel ======*/}

      {/*====== Contact Info Buttons Starts here ======*/}
      <div
        className="d-md-none"
        style={{
          marginBottom: "-30px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            padding: "10px 0",
            backgroundColor: "transparent",
            overflow: "hidden",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "7px",
          }}
        >
          <button
            className="social-main-btn"
            onClick={handleCall}
            style={{
              width: "70%",
              padding: "12px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "#160E41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFF",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/call.png"
              alt="Call"
              style={{ height: "25px", width: "25px", marginRight: "12px" }}
            />
            Call Us
          </button>

          <button
            className="social-main-btn"
            onClick={() => {
              const userInfo = sessionStorage.getItem("userInfo");
              if (!userInfo) {
                 setIsPopupOpen(true); // Open the popup if session data is not available
               } else {
                handleWhatsApp();
              }
            }}
            style={{
              width: "70%",
              padding: "12px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "#160E41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFF",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/whatsapp.png"
              alt="Call"
              style={{ height: "25px", width: "25px", marginRight: "12px" }}
            />
            WhatsApp
          </button>

          <button
            className="social-main-btn"
            onClick={handleLocation}
            style={{
              width: "70%",
              padding: "12px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "#160E41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFF",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/GMap.png"
              alt="Location"
              style={{ height: "23px", width: "23px", marginRight: "12px" }}
            />
            Location
          </button>

          <button
            className="social-main-btn"
            onClick={handleCall}
            style={{
              width: "70%",
              padding: "12px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "#160E41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFF",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/gmail.png"
              alt="Call"
              style={{ height: "30px", width: "30px", marginRight: "12px" }}
            />
            Mail Us
          </button>

          <button
            className="social-main-btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/images/Plixon-Catalogue-Digital.pdf";
              link.download = "Plixon-Catalogue-Digital.pdf"; // Optional: Specify the file name
              link.click();
            }}
            style={{
              width: "70%",
              padding: "12px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "#160E41",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFF",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <i className="ti-download" style={{ marginRight: "10px" }} />
            Download Brochure
          </button>
        </div>

        {/* Social Media Buttons - More minimal */}
        <div style={{ marginTop: "20px" }}>
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
            <img src="/assets/images/icons/instagram.png" alt="Instagram" />
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
            <img src="/assets/images/icons/linkedin.png" alt="LinkedIn" />
          </button>
          <button
            className="social-rounded-btn"
            onClick={handleShare}
            style={{
              padding: "8px",
              backgroundColor: "#00ADFF",
              marginRight: "10px",
            }}
          >
            <img src="/assets/images/icons/share.png" alt="Share" />
          </button>
        </div>

        {/* Google Review Button - Simplified */}
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "-20px",
          }}
        >
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Rajkot,+Gujarat",
                "_blank"
              )
            }
            style={{
              padding: "12px 20px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/google.png"
              alt="Google Reviews"
              style={{
                height: "30px",
                width: "30px",
                marginRight: "12px",
              }}
            />
            Rate Us
          </button>
        </div>
      </div>
      {/*====== Contact Info Buttons Ends here ======*/}

      {/*====== Start Listing Details Section ======*/}
      <section className="listing-details-section pt-100 pb-90">
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
                  <img src="/assets/images/icons/linkedin.png" alt="LinkedIn" />
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
                <button
                  className="social-main-btn"
                  onClick={handleCall}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/assets/images/icons/call.png"
                    alt="Call"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Call Us
                </button>
                <button
                  className="social-main-btn"
                  onClick={handleLocation}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/assets/images/icons/GMap.png"
                    alt="Location"
                    style={{ height: "25px", width: "25px", marginRight: 10 }}
                  />
                  Location
                </button>
                <button
                  className="social-main-btn"
                  onClick={() => {
                    const userInfo = sessionStorage.getItem("userInfo");
                    if (!userInfo) {
                      setIsPopupOpen(true); // Open the popup if session data is not available
                    } else {
                      handleWhatsApp();
                    }
                  }}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/assets/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    style={{ height: "23px", width: "23px", marginRight: 10 }}
                  />
                  WhatsApp
                </button>
                <button
                  className="social-main-btn"
                  onClick={handleMail}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/assets/images/icons/gmail.png"
                    alt="Mail"
                    style={{ height: "30px", width: "30px", marginRight: 10 }}
                  />
                  Mail Us
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
                  <img src="/assets/images/icons/linkedin.png" alt="LinkedIn" />
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
        <div>
          {/* Desktop View - Hidden on Mobile */}
          <div
            className="row"
            style={{
              marginBottom: "20px",
              marginTop: "-30px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap", // Ensures responsiveness
            }}
          >
            {/* Buttons Section */}
            <div className="row">
              {/* Desktop View */}
              <div
                className="d-none d-md-flex row"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    className="social-main-btn"
                    onClick={handleCall}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/assets/images/icons/call.png"
                      alt="Call"
                      style={{ height: "25px", width: "25px", marginRight: 10 }}
                    />
                    Call Us
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleLocation}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/assets/images/icons/GMap.png"
                      alt="Location"
                      style={{ height: "25px", width: "25px", marginRight: 10 }}
                    />
                    Location
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleButtonClick}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/assets/images/icons/whatsapp.png"
                      alt="WhatsApp"
                      style={{ height: "23px", width: "23px", marginRight: 10 }}
                    />
                    WhatsApp
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleMail}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/assets/images/icons/gmail.png"
                      alt="Mail"
                      style={{ height: "30px", width: "30px", marginRight: 10 }}
                    />
                    Mail Us
                  </button>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                >
                  <button
                    className="social-rounded-btn"
                    onClick={handleFacebook}
                    style={{ padding: "8px", backgroundColor: "#3A559F" }}
                  >
                    <img
                      src="/assets/images/icons/facebook.png"
                      alt="Facebook"
                    />
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
                    <img
                      src="/assets/images/icons/linkedin.png"
                      alt="LinkedIn"
                    />
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

            {/* Mobile Bottom Tab - Hidden on Desktop */}
            <div
              className="d-md-none bg-white fixed-bottom shadow-lg"
              style={{
                padding: "10px 0", // Adjusted padding to avoid extra space
                paddingTop: "0px",
                borderTop: "1px solid #eee",
                zIndex: 1000,
                overflow: "hidden", // Prevents content overflow
                // backgroundColor:'red'
              }}
            >
              <BottomTab visible={visible} closeTab={closeTab} />
              <div
                className="d-flex justify-content-evenly align-items-center"
                style={{
                  gap: "5px", // Ensures proper spacing between buttons
                  width: "100%",
                  padding: "0 10px", // Full width for buttons
                }}
              >
                {/* Call */}
                <button
                  onClick={handleCall}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #FFF",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/images/icons/call.png"
                    alt="Call"
                    style={{
                      height: "17px",
                      width: "17px",
                      marginRight: "5px",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Call</span>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => {
                    const userInfo = sessionStorage.getItem("userInfo");
                    if (!userInfo) {
                      setIsPopupOpen(true); // Open the popup if session data is not available
                    } else {
                      handleWhatsApp();
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    style={{
                      height: "15px",
                      width: "15px",
                      marginRight: "5px",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    WhatsApp
                  </span>
                </button>

                {/* Location */}
                <button
                  onClick={handleLocation}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/images/icons/GMap.png"
                    alt="Location"
                    style={{
                      height: "18px",
                      width: "18px",
                      marginRight: "5px",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    Location
                  </span>
                </button>

                {/* Share */}
                <button
                  onClick={handleShare}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#160E41",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="ti-bookmark"
                    style={{ marginRight: "5px", color: "#FFF" }}
                  ></i>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="listing-details-wrapper listing-details-wrapper-two"
                style={{}}
              >
                <div className="listing-thumbnail mb-30 wow fadeInUp">
                  <img
                    src="/assets/Hero-Banner/TV-setup-4.webp"
                    alt="listing image"
                  />
                </div>
                <div className="listing-content mb-30 wow fadeInUp">
                  <div className="listing-info-area mb-0 wow fadeInUp">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="listing-info-content">
                          <h3 className="title">About Us</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="title">{`Plixon – Smart Way to View On`}</h3>
                  <p>
                    At Plixon, we redefine home entertainment by blending
                    innovation, quality, and design. Our premium range of Smart
                    TVs delivers cinematic visuals, cutting-edge features, and
                    seamless streaming - all designed to create a stunning,
                    immersive viewing experience for every kind of viewer.
                    Whether you're a movie enthusiast, a sports fan, or a gamer,
                    Plixon has the perfect screen for your lifestyle.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          />
                        </div>
                        <div className="info">
                          <h6>OLED Technology</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i
                            className="ti-volume"
                            style={{ color: "#69C8C7" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Smart Voice Control</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          />
                        </div>
                        <div className="info">
                          <h6>HD Resolution</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Smart TV</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i
                            className="ti-volume"
                            style={{ color: "#69C8C7" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Alexa/Google TV</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i
                            className="ti-desktop"
                            style={{ color: "#69C8C7" }}
                          />
                        </div>
                        <div className="info">
                          <h6>Best for streaming</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Discover the future of entertainment with our premium
                    selection of televisions. Engineered for excellence, our TVs
                    combine stunning visuals with cutting-edge technology,
                    delivering an immersive experience for every home. Whether
                    you're looking for cinematic 4K displays, ultra-smooth
                    refresh rates, or smart features for effortless streaming,
                    we offer models to match every lifestyle. Trust in our
                    commitment to quality, innovation, and customer
                    satisfaction.{" "}
                    <a
                      href="/about"
                      style={{
                        color: "#69C8C7",
                        cursor: "pointer",
                        fontSize: "15px",
                        whiteSpace: "nowrap",
                        display: "inline",
                        marginLeft: "4px",
                      }}
                    >
                      Read More
                    </a>
                  </p>
                </div>

                <div className="releted-listing-area wow fadeInUp mb-10">
                  <h3 className="title mb-40">Similar TV Products</h3>
                  <Slider
                    {...reletedListingSlider2}
                    className="releted-listing-slider-one"
                  >
                    {products.map((product, index) => (
                      <div className="listing-item listing-grid-item-two">
                        <div
                          className="listing-thumbnail"
                          style={{
                            backgroundColor: product.backgroundColor,
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                        >
                          <Link href={`/product-details/${product.slug}`}>
                            <img src={product.image} alt="TV Product Image" />
                          </Link>
                          <span
                            className="featured-btn"
                            style={{ borderRadius: "5px" }}
                          >
                            Featured
                          </span>
                        </div>
                        <div className="listing-content">
                          <h3 className="title">
                            <Link href={`/product-details/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <p
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "300px",
                              lineHeight: "1.5",
                              marginBottom: "15px",
                            }}
                          >
                            {product.detail}
                          </p>
                          <div className="features-list">
                            <ul>
                              <li>AI Upscaling</li>
                              <li>8K Ultra HD</li>
                            </ul>
                          </div>
                          <span className="phone-meta"></span>
                          <div className="listing-meta">
                            <ul
                              style={{ width: "100%", padding: 0, margin: 0 }}
                            >
                              <li
                                style={{ width: "100%", padding: 0, margin: 0 }}
                              >
                                <button
                                  onClick={() => {
                                    const userInfo =
                                      sessionStorage.getItem("userInfo");
                                    if (!userInfo) {
                                      setIsPopupOpen(true); // Open the popup if session data is not available
                                    } else {
                                      const phoneNumber = "917779096777";
                                      const message = `Hello, I am interested in knowing the price details for the product. Please share more information.`;
                                      const encodedMessage =
                                        encodeURIComponent(message);
                                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                      window.open(whatsappURL, "_blank");
                                    }
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition w-full justify-center"
                                  style={{
                                    backgroundColor: "#24D07A",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <img
                                    src="/assets/images/WhatsApp_Image.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span className="underline text-white">
                                    Get Price
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <div className="listing-item listing-grid-item-two">
                      <div
                        className="listing-thumbnail"
                        style={{
                          backgroundColor: "#7D5BA6",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                      >
                        <img
                          src="/assets/images/products/tv3.png" // <-- Update TV image here
                          alt="TV Product Image"
                        />
                        <span className="featured-btn">Featured</span>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/">NeoVision 8K Smart TV</Link>
                        </h3>
                        <p>
                          Unmatched 8K clarity, AI-powered upscaling, and sleek
                          minimalist design.
                        </p>
                        <div className="features-list">
                          <ul>
                            <li>AI Upscaling</li>
                            <li>8K Ultra HD</li>
                          </ul>
                        </div>
                        <span className="phone-meta"></span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <button
                                  onClick={() => {
                                    const phoneNumber = "917779096777"; // Replace with your retailer's WhatsApp number
                                    const message = `Hello, I am interested in knowing the price details for the product. Please share more information.`;
                                    const encodedMessage =
                                      encodeURIComponent(message);
                                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                    window.open(whatsappURL, "_blank");
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                                  style={{
                                    backgroundColor: "#24D07A",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    // paddingBottom: "20px",
                                  }}
                                >
                                  <img
                                    src="/assets/images/WhatsApp_Image.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span className="underline text-white">
                                    Get Price
                                  </span>
                                </button>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="listing-item listing-grid-item-two">
                      <div
                        className="listing-thumbnail"
                        style={{
                          backgroundColor: "#FFC857",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                      >
                        <img
                          src="/assets/images/products/tv2.png" // <-- Update TV image here
                          alt="TV Product Image"
                        />
                        <span className="featured-btn">Featured</span>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/">
                            MaxiView Quantum OLED TV
                          </Link>
                        </h3>
                        <p>
                          Deep blacks, dazzling colors, and smart voice control
                          built-in.
                        </p>
                        <div className="features-list">
                          <ul>
                            <li>Quantum Dot Display</li>
                            <li>Smart Voice Assistant</li>
                          </ul>
                        </div>
                        <span className="phone-meta"></span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <button
                                  onClick={() => {
                                    const phoneNumber = "917779096777"; // Replace with your retailer's WhatsApp number
                                    const message = `Hello, I am interested in knowing the price details for the product. Please share more information.`;
                                    const encodedMessage =
                                      encodeURIComponent(message);
                                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                    window.open(whatsappURL, "_blank");
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                                  style={{
                                    backgroundColor: "#24D07A",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    // paddingBottom: "20px",
                                  }}
                                >
                                  <img
                                    src="/assets/images/WhatsApp_Image.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span className="underline text-white">
                                    Get Price
                                  </span>
                                </button>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </Slider>
                </div>
                <div className="listing-gallery-box mb-30 wow fadeInUp">
                  <h4 className="title" style={{ marginBottom: "40px" }}>
                    Features Gallery
                  </h4>
                  <Slider {...GallerySlider2} className="gallery-slider-one">
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 1.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 2.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 3.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 4.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 5.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 6.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 7.jpg"
                        alt="gallery image"
                      />
                    </div>
                  </Slider>
                </div>
                <SocialStoriesSection />
                <FAQSection />
                <div
                  className="d-flex align-items-center justify-content-between p-3 rounded"
                  style={{
                    backgroundColor: "#E5F8F7",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="mb-2 mb-md-0 me-md-3"
                    style={{ minWidth: "250px", paddingLeft: "20px" }}
                  >
                    <span style={{ fontSize: "16px", marginBottom: "5px" }}>
                      Send your requirement
                    </span>
                    <br />
                    <strong
                      style={{
                        fontSize: "25px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      WhatsApp now
                    </strong>
                  </div>

                  <div
                    className="input-group mb-2 mb-md-0"
                    style={{
                      maxWidth: "400px",
                      flexGrow: 1,
                      paddingRight: "20px",
                    }}
                  >
                    <span
                      className="input-group-text bg-white border-end-0"
                      style={{ marginRight: "5px" }}
                    >
                      <img
                        src="/assets/images/whatsapp-image-green.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "25px",
                          width: "25px",
                        }}
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 rounded"
                      placeholder="Hi, I found your business..."
                      aria-label="WhatsApp Message"
                      style={{ marginRight: "5px" }}
                      onChange={(e) => {
                        setRequirementInput(e.target.value);
                      }}
                      value={requirementInput}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-send"
                      onClick={() => {
                        const userInfo = sessionStorage.getItem("userInfo");
                        if (!userInfo) {
                          setIsPopupOpen(true); // Open the popup if session data is not available
                        } else {
                          const phoneNumber = "917779096777"; // Replace with your retailer's WhatsApp number
                          const message = `${requirementInput}`;
                          const encodedMessage = encodeURIComponent(message);
                          const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                          window.open(whatsappURL, "_blank");
                        }
                      }}
                    >
                      Send
                    </button>
                    <div
                      className="ms-md-3 text-nowrap"
                      style={{ marginTop: "5px" }}
                    >
                      Or connect with seller instantly
                      <a
                        href="tel:77790 96777"
                        className="text-decoration-none ms-1"
                      >
                        <strong
                          style={{
                            color: "#007BFF",
                            textDecoration: "underline",
                            marginLeft: "5px",
                          }}
                        >
                          77790 96777
                        </strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="listing-tag-box mb-30 wow fadeInUp mt-15 mb-2">
                  <h4 className="title">Related Searches</h4>
                  {populerSearches.map((val) => {
                    return (
                      <span
                        key={val}
                        className="px-3 my-2 mr-3 py-2 rounded-full border border-gray-300 bg-white text-sm"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>

                {/* <div className="listing-rating-box wow fadeInUp">
                  <h4 className="title">Average Review (10 Reviews)</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Service</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Quality</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Location</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Price</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="listing-review-box mb-50 wow fadeInUp">
                  <h4 className="title">Customer Review</h4>
                  <ul className="review-list">
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="/assets/images/listing/review-1.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="/assets/images/listing/review-2.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="/assets/images/listing/review-3.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="listing-review-form mb-30 wow fadeInUp">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="title">Write a Review</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-rating">
                        <ul className="ratings">
                          <li>
                            <span>Rate Here:</span>
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                        </ul>
                        <span>(02 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email here"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check4"
                              name="checkbox"
                            />
                            <label htmlFor="check4">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details Section ======*/}
    </Layout>
  );
};

export default HomeScreen;

<style jsx global>{`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 767.98px) {
    body {
      position: relative;
      overflow-x: hidden;
      padding-bottom: 70px; /* Reserve space for fixed bottom bar */
    }
  }
`}</style>;
