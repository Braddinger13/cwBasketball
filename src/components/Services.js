import React from "react";
import '../style/services.css';

const Services = () => {
  return (
    <div id="services">
      <section className="p-3">
        <div className="container services">
          <u><h2 className="py-3">Our Services</h2></u>
          <p>Located in Deleware County</p>
          <div className="row">
            <div className="col-md py-3">
              <div>
                <h3>One-On-One Training</h3>
              </div>
             </div>
            <div className="col-md py-3">
              <div>
                <h3>Group Sessions</h3>
                {/* pic */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
