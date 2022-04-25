import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useOrders from "../../../hooks/useOrders";
import AddService from "../Home/Addservice/AddService";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useOrders(serviceId);
  // console.log(serviceId);
  // const [service, setService] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/services/${serviceId}`)
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, [serviceId]);
  return (
    <div className="w-50 mx-auto">
      <div style={{ margin: "30px" }}>
        <img src={service.img} alt="" />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>{service.price}</p>
      </div>
      {/* <AddService id={service._id} /> */}
      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-primary ms-5">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
