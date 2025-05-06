import { useEffect, useState } from "react";

const ListingDetailsRight = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [marginTop, setMarginTop] = useState("0px");

  const handleLocation = () => {
    window.open("https://g.co/kgs/BLYuxDA", "_blank");
  };

  const handleMail = () => {
    window.location.href = "mailto:info.plixon.in"; // Replace with your email
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

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMarginTop("80px");
    }
  }, []);

  return (
    <div className="col-lg-4">
      <div className="sidebar-widget-area">
        {/* <div
          className="widget newsletter-widget mb-30 wow fadeInUp"
          style={{
            marginTop:
              typeof window !== "undefined" && window.innerWidth >= 768
                ? "80px"
                : "0",
          }}
        > */}
        <div
          className="widget newsletter-widget mb-30 wow fadeInUp"
          style={{ marginTop }}
        >
          <div
            className="newsletter-widget-wrap bg_cover"
            style={{
              backgroundImage: "url(/assets/images/newsletter-widget-1.jpg)",
            }}
          >
            <i className="ti-book" />
            <h3>Get our latest product list</h3>
            <a
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/images/Plixon-Catalogue-Digital.pdf';
                link.target = '_blank'; // Open in a new tab
                link.rel = 'noopener noreferrer'; // Security best practice
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="main-btn"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#69C8C7',
                color: '#FFF',
                textDecoration: 'none',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              View Catalogue
            </a>
          </div>
        </div>

        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h5 className="widget-title">Get the List of TV Brands</h5>
          <span style={{ marginBottom: "10px", marginTop: "10px" }}>
            Get the latest options and prices instantly for free
          </span>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form_group">
              <input
                type="name"
                className="form_control"
                placeholder="Name"
                name="name"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="number"
                className="form_control"
                placeholder="Mobile Number"
                name="numbber"
                required=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form_group">
              <button
                className="main-btn"
                onClick={() => {
                  const phoneNumber = "917779096777"; // Replace with your WhatsApp number (in international format without '+')
                  const message = `Hi, I'm ${name} and my mobile number is ${number}. I want the best price list.`;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(url, "_blank");
                }}
              >
                Get Best Price
              </button>
            </div>
          </form>
        </div>
        <div className="widget contact-info-widget mb-30 wow fadeInUp">
          <div className="contact-info-widget-wrap">
            <div className="contact-map">
              <iframe src="https://maps.google.com/maps?q=rajkot&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              <a href="https://g.co/kgs/BLYuxDA" className="support-icon">
                <i className="flaticon-headphone" />
              </a>
            </div>
            <div className="contact-info-content">
              <div className="info-list my-2">
                <h5 className="widget-title my-2">Contact Info</h5>
                <p>
                  <i className="ti-mobile" />
                  <a href="tel:+91 77790 96777">+91 77790 96777</a>
                </p>
                <hr className="my-2 opacity-25" />
              </div>
              <div className="info-list my-3">
                <h5 className="widget-title my-2">Address</h5>
                <p>
                  <a>
                    M-167, 4, Gujarat Housing Board Society, Bh. Angle Madras,
                    Cafe Akshar Marg, Near Amin Marg, Rajkot - 360001
                  </a>
                  <button
                    className="btn p-0 text-decoration-none d-flex align-items-center"
                    onClick={handleLocation}
                  >
                    <div className="flex items-center px-3 py-1 mt-2 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                      <i className="ti-location-pin me-2" />
                      <span className="underline">Get Direction</span>
                    </div>
                  </button>
                </p>
              </div>
              <hr className="mt-4 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={handleMail}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-email me-2 mx-2" />
                    <span className="underline">Send Enquiry by Email</span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={handleLocation}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-comment-alt me-2 mx-2" />
                    <span className="underline">
                      Get information by SMS/Email
                    </span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={handleShare}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-share me-2 mx-2" />
                    <span className="underline">Share</span>
                  </div>
                </button>
              </div>
              <hr className="mt-3 opacity-25" />
              <div className="my-3">
                <button
                  className="btn p-0 text-decoration-none d-flex align-items-center"
                  onClick={() => {
                    alert("Rate Us!!");
                  }}
                >
                  <div className="flex items-center bg-transparent rounded-lg hover:bg-gray-100 transition">
                    <i className="ti-star me-2 mx-2" />
                    <span className="underline">Tap to rate</span>
                  </div>
                </button>
              </div>
              <div className="info-list ml-2">
                <hr className="my-3 opacity-25" />
                <p>
                  <i className="ti-email" />
                  <a
                    style={{ fontSize: "16px", color: "#000" }}
                    href="mailto:info@plixon.in"
                  >
                    info@plixon.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget business-hour-widget mb-30 wow fadeInUp">
          <h4 className="widget-title">Business Hour</h4>
          <ul className="time-info">
            <li>
              <span className="day">Monday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Tuesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Wednesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Thursday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Friday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Saturday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Sunday</span>
              <span className="time st-close">Close</span>
            </li>
          </ul>
        </div>

        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h5 className="widget-title" style={{marginBottom: "10px"}}>Get the List of TV Brands</h5>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 mr-3 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            4K UltraHD
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Smart TV
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            OLED Technology
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            8K Resolution
          </span>
          <span
            style={{ borderRadius: "20px" }}
            className="px-4 py-2 my-1 rounded-full border border-gray-300 bg-white text-sm shadow-sm"
          >
            Smart Voice Control
          </span>
        </div>
      </div>
    </div>
  );
};
export default ListingDetailsRight;
