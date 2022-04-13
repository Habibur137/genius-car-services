import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../service/service";

const Services = () => {
  const [services] = useServices();

  return (
    <section>
      <h1>{services.length}</h1>
      {services.map((service) => (
        <Service service={service} key={service.id} />
      ))}
    </section>
  );
};

export default Services;
