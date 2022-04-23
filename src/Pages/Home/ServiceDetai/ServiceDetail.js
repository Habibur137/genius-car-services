import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddService from "../Home/Addservice/AddService";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/services/${serviceId}`)
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, []);
  return (
    <div>
      <div style={{ margin: "30px" }}>
        <img src={service.img} alt="" />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>{service.price}</p>
      </div>
      <AddService id={service._id} />
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
