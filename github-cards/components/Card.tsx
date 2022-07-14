import React from "react";
import { profileType } from "../utils";

interface CardPropType {
  profile: profileType;
}

const Card = ({ profile }: CardPropType) => {
  return (
    <>
      <h1>Card</h1>
    </>
  );
};

export default Card;
