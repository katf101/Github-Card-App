import React from "react";
import { profileType } from "../utils";
import styles from "./Card.module.scss";

interface CardPropType {
  profile: profileType;
}

const Card = ({ profile }: CardPropType) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={profile.avatar_url} alt="Avatar" />
      </div>
      <div>
        <h2>
          {profile.name} ({profile.login})
        </h2>
        <p>{profile.bio}</p>
        <p>
          {profile.blog && (
            <a href={profile.blog} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          <code>Public Repositories: {profile.public_repos}</code>
          <code>Public Gists: {profile.public_gists}</code>
        </p>
      </div>
    </div>
  );
};

export default Card;
