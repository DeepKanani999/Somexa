"use client";
import { useState } from "react";

export default function RetailerPopup({ visible, onClose }) {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    village: "",
    taluka: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  if (!visible) return null;

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.whatsapp || !/^\d{10}$/.test(form.whatsapp))
      errs.whatsapp = "Valid 10-digit WhatsApp number required";
    if (!form.village) errs.village = "Village name is required";
    if (!form.taluka) errs.taluka = "Taluka is required";
    if (!form.pincode || !/^\d{6}$/.test(form.pincode))
      errs.pincode = "Valid 6-digit pincode required";
    return errs;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = `Find Retailer Request:
Name: ${form.name}
WhatsApp: ${form.whatsapp}
Village: ${form.village}
Taluka: ${form.taluka}
Pincode: ${form.pincode}`;

    const whatsappNumber = "917779096777";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    onClose();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div
      //   className="fixed inset-0 bg-black bg-opacity-50 z-50 px-4 py-2 flex justify-center items-center"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "20px",
        position: "absolute",
        zIndex: "1000",
        top: 80,
        right: 100,
      }}
    >
      <div className="bg-white rounded-lg shadow-lg w-full p-6 relative ">
        <h4 className="text-lg font-bold text-center mb-2">Find Retailers</h4>
        <p className="text-sm text-gray-500 text-center mb-6 px-4">
          Enter your details to find the best retailer
        </p>

        <div className="space-y-3">
          {[
            { name: "name", placeholder: "Enter your name" },
            { name: "whatsapp", placeholder: "Enter Whatsapp Number" },
            { name: "village", placeholder: "Enter your Village name" },
            { name: "taluka", placeholder: "Enter your taluka" },
            { name: "pincode", placeholder: "Enter your pincode" },
          ].map((field) => (
            <div
              key={field.name}
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <input
                name={field.name}
                type="text"
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: "#69C8C7" }}
            className="w-full bg-black text-white px-4 py-2 mt-6 rounded hover:bg-gray-800"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            style={{ backgroundColor: "gray", marginLeft: "12px" }}
            className="w-full bg-black text-white px-4 py-2 mt-6 rounded hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
