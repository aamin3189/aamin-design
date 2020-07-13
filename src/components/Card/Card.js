import React from 'react';
import './Card.scss';
import Button from '../Button/Button'

const Card = (props) => {
    return (
      <div className="comp-card">
        <div className="head">
          <div className="headings">{props.headings}</div>
          <div className="cost">
            <span>{props.cost}</span>
            <span>&nbsp;{props.costFor}</span>
          </div>
        </div>
        <div className="details">
          <ul>
            {props.features.map((feature, index) => (
              <ol key={index}>{feature}</ol>
            ))}
          </ul>
        </div>
        <div className="action">
          <Button type={props.buttonType} title={props.buttonText}></Button>
        </div>
      </div>
    );
};

export default Card;