import React, { useEffect, useState } from "react";

const useOrders = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service];
};

export default useOrders;
