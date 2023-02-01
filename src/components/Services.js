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
                {/* pic */}
              </div>
              <div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid quod expedita autem obcaecati iusto nisi quis eum
                  quaerat magnam, aut quia cupiditate doloribus nemo ad
                  voluptatibus repellat commodi natus, debitis saepe pariatur
                  eos aliquam sit.
                </p> */}
              </div>
            </div>
            <div className="col-md py-3">
              <div>
                <h3>Group Sessions</h3>
                {/* pic */}
              </div>
              <div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid quod expedita autem obcaecati iusto nisi quis eum
                  quaerat magnam, aut quia cupiditate doloribus nemo ad
                  voluptatibus repellat commodi natus, debitis saepe pariatur
                  eos aliquam sit.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
