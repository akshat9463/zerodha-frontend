import React from "react";

function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      links: [
        "Login Credentials",
        "Account Modification & Segment Addition",
        "DP ID and Bank Details",
        "Your Profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Trading Platforms",
      links: [
        "Product and order types",
        "Kite web & mobile",
        "Trading FAQ's",
        "Corporate Actions",
        "Kite API",
        "Pi and other platforms",
        "Stocker Report",
        "GTT",
      ],
    },
    {
      title: "Console",
      links: [
        "Login Credentials",
        "Account Modification & Segment Addition",
        "DP ID and Bank Details",
        "Your Profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Coin",
      links: [
        "Product and order types",
        "Kite web & mobile",
        "Trading FAQ's",
        "Corporate Actions",
        "Kite API",
        "Pi and other platforms",
        "Stocker Report",
        "GTT",
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="fs-3 mb-4">To create a ticket, select a relevant topic</h1>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <h5 className="mb-3 text-muted">
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>{category.title}
            </h5>
            {category.links.map((link, idx) => (
              <div key={idx}>
                <a href="#" style={{ textDecoration: "none", lineHeight: "2.5", display: "block" }}>
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
