import React from "react";

const UpdateServices = ({ id }) => {
  const updateService = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const serviceUpdate = { name, description, price };
    fetch(`http://localhost:5000/services/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("update service successfully");
      });
  };
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <form action="" onSubmit={updateService}>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          id=""
          cols="30"
          rows="2"
        ></textarea>
        <br />
        <input type="text" placeholder="Price" name="price" />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateServices;
