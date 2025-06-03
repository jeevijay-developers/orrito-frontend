"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    title: "Company",
    links: [
      { id: 1, text: "About Us", href: "/about" },
      // { id: 2, text: "Tourz Reviews", href: "#" },
      { id: 3, text: "Contact Us", href: "#" },
      { id: 4, text: "privacy Policy", href: "#" },
      { id: 5, text: "Terms and Conditions", href: "#" },
      // { id: 6, text: "Cookie Policy", href: "#" },
      // { id: 7, text: "Legal", href: "#" },
      // { id: 8, text: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 9, text: "whatsApp", href: "#", },
      { id: 10, text: "Help center", href: "/help-center" },
      // { id: 11, text: "Live chat", href: "#" },
      // { id: 12, text: "How it works", href: "#" },
    ],
  },
];

export default function FooterLinks() {
const router = useRouter();
  const handleWhatsappClick = () => {
    const phoneNumber = "919993971796";
    const message = "Hello, I have a query regarding your products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
     "hello"
    )}`;
    window.open(whatsappUrl, "_blank");
  };



  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {/* {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href}>
                {elm2.text}
              </a>
            ))} */}
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href} 
              onClick={(e) => {
                e.preventDefault();
                if(elm2.text === "whatsApp")
                {
                  handleWhatsappClick();
                }
                else {
                  router.push(elm2.href)
                }
              }}>
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
      
    </>
  );
}
