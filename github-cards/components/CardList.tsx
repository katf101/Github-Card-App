import React from "react";
import { profileType } from "../utils";
import Card from "./Card";
import { useProfileContext } from "../pages";

const CardList = () => {
  const [profiles] = useProfileContext();

  return (
    <div>
      {profiles.map((profile) => (
        <Card key={profile.login} profile={profile} />
      ))}
    </div>
  );
};

export default CardList;
