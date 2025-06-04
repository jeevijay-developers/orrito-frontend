"use client";

import { toast } from "react-toastify";

export default function productQueryForm() {
  const WEB_3_API_KEY = `1c56fd2b-17f0-4b10-9738-fa805a6c6de6`;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", WEB_3_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log("web 3 form res", result);
      // toast.success("Thank you for your message! We will get back to you soon.");
      // event.target.reset();
    }
    try {
      
    } catch (error) {}
  }

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-30 fw-700 text-center mb-30">
              Leave us your info
            </h2>
            <div className="productQueryForm">
              <form onSubmit={handleSubmit} className="row y-gap-30">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="selectedProduct"
                    placeholder="Selected Product"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-1 text-white col-12"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
