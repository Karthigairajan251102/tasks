import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function CardList({ data }) {
  return (
    <div className="container">
      <h1 className="page-title">All Cards</h1>
      <div className="card-grid">
        {data && data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link className="btn" to={`/card/${item.id}`}>
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
