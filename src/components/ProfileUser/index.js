import React from "react";

import "./styles.css";
import Profile from "../../images/profile.jpeg";
import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => {
  return (
    <dl className="profile-user">
      <dd className="avatar">
        <AvatarProfile src={Profile} />
      </dd>
      <dt className="title">Jordan Dionisio</dt>
      <dd className="description">Estudante Dev Front-End</dd>
    </dl>
  );
};

export default ProfileUser;
