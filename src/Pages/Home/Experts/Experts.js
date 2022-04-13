import React from "react";
import { Row } from "react-bootstrap";
import Expert1 from "../../../images/experts/expert-1.jpg";
import Expert2 from "../../../images/experts/expert-2.jpg";
import Expert3 from "../../../images/experts/expert-3.jpg";
import Expert4 from "../../../images/experts/expert-4.jpg";
import Expert5 from "../../../images/experts/expert-5.jpg";
import Expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "will smith", img: Expert1 },
    { id: 1, name: "will gakko", img: Expert2 },
    { id: 1, name: "jhon smith", img: Expert3 },
    { id: 1, name: "matha mota", img: Expert4 },
    { id: 1, name: "beka tera", img: Expert5 },
    { id: 1, name: "jomidar mama", img: Expert6 },
  ];
  return (
    <div className="container">
      <h1 className="text-warning text-center my-5">Our Experts</h1>
      <Row xs={1} md={3} className="g-4">
        {experts.map((expert) => (
          <Expert expert={expert} key={expert.id} />
        ))}
      </Row>
    </div>
  );
};

export default Experts;
