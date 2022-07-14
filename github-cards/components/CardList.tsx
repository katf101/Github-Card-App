import React from "react";
import { profileType } from "../utils";
import Card from "./Card";

const CardList = ({ profiles }: { profiles: profileType[] }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Card key={profile.login} profile={profile} />
      ))}
    </div>
  );
};

export default CardList;
