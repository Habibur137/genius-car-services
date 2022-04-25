import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useOrders from "../../hooks/useOrders";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useOrders(serviceId);
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState({
    address: "",
    number: "",
  });
  const form = (e) => {
    e.preventDefault();
    const orderDetails = {
      service: service.name,
      serviceId,
      ...users,
      name: user.displayName,
      email: user.email,
    };
    axios.post("http://localhost:5000/orders", orderDetails).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast("your order booked");
        e.target.reset();
      }
    });
  };
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-50 mx-auto">
      <h3>Service Ordered : {service.name}</h3>
      <form onSubmit={form}>
        <input
          className="mb-2"
          type="text"
          placeholder="Name"
          name="name"
          value={user.displayName}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="mb-2"
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="mb-2"
          type="text"
          placeholder="service"
          name="service"
          value={service.name}
          required
          disabled
        />
        <br />
        <input
          onChange={handleChange}
          className="mb-2"
          type="text"
          placeholder="address"
          name="address"
          required
        />
        <br />
        <input
          onChange={handleChange}
          className="mb-2"
          type="text"
          placeholder="number"
          name="number"
          required
        />
        <br />
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default CheckOut;
