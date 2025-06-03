const locations = [
  {
    id: 1,
    title: "Phone",
    address: "1800 889 4722",
    // contact: "1-800-453-6744 canada@tourz.com",
  },
  {
    id: 2,
    title: "Email",
    address: "sales@oritto.com.",
    // contact: "61-800-123-456 australia@tourz.com",
  },
  {
    "id": 3,
    title: "Working Hours",
    address: "10 AM To 6 PM",
  },
  {
    id: 4,
    title: "Address",
    address:
      "ORITTO LED Lights (Lighting Divison of Prabuddha Power) , Plot no. E-1(D), New II Industrial Area, Near Lupin Industries gate no. 1, Mandideep, Bhopal, Madhya Pradesh. PIN - 462046",
    // contact: "81-800-567-890 asia@tourz.com",
  },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="px-30 text-center">
                <h3 className="text-30 md:text-24 fw-700">{elm.title}</h3>

                <div className="mt-20 md:mt-10">
                  {elm.address}
                  <br />
                  <br />
                  {elm.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
