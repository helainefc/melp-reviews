import React from "react";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

const Starts = ({ rating }) => {

    if (rating.length === 0) {
        return (
            <span><AiOutlineStar /></span>
        );
      }
      var stars = [], i = 0, len = rating;
      while (++i <= len) stars.push(i);
      return (
        <span>
            {stars.map((x, i) => {
              return <AiFillStar key={i}/>;
            })}
        </span>
      );

};

export default Starts;