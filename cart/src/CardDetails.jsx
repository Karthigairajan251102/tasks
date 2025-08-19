import React from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";

function CardDetail({ data }) {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));

  if (!card) {
    return (
      <div className="container">
        <h2>Card Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Card Detail</h1>
      <div className="detail">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <Link className="back" to="/">
          ← Back to All Cards
        </Link>
      </div>
    </div>
  );
}

export default CardDetail;


