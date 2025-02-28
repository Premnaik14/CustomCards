import React from 'react';
import './Card.css';

const Card = ({ image, owner, ownerId, creator, creatorId, price, usdPrice }) => {
  return (
    <div className="card">
     
      <div className="card-header">
        <div className="owner-creator">
          <div className="owner">
            <img src={owner} alt="Owner Avatar" className="avatar" />
            <div>
              <p className="label">Owned By</p>
              <p className="id">{ownerId}</p>
            </div>
          </div>
          <div className="creator">
            <div>
              <p className="label">Created by</p>
              <p className="id">{creatorId}</p>
            </div>
            <img src={creator} alt="Creator Avatar" className="avatar" />
          </div>
        </div>
      </div>

  
      <div className="image">
        <img src={image} alt="NFT" />
      </div>

      
      <div className="info">
      <p className="price">
         <strong>Price:</strong> ETH {price} - X1<span className="usd-price"> ($ {usdPrice})</span>
        </p>
      </div>
      <div className="buttons">
        <button className="history-btn">View history</button>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
