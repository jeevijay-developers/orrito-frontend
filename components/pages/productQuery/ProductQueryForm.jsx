"use client";

import { submitProductQuery } from "@/service/product_service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function productQueryForm({ productId, productName }) {
  const router = useRouter();
  console.log("Product ID:", productId);
  console.log("Product Name:", productName);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("productId", productId);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      productId: productId,
      productName: productName,
      message: formData.get("message"),
    };

    try {
      const response = await submitProductQuery(data);
      console.log("Product query submission response: ", response);

      toast.success(
        "Thank you for your message! We will get back to you soon."
      );
      event.target.reset();

      setTimeout(() => {
        // Redirect to the home page after a short delay

        router.push("/");
      }, 2000); // Adjust the delay as needed (2000ms = 2 seconds)
    } catch (error) {
      console.error("Error submitting product query: ", error);
      toast.error("Failed to submit your query. Please try again later.");
    }
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
                    value={productName || ""}
                    readOnly
                    name="productName"
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
