import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.image} alt={user.basics.name} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          {/* <p>Coding in {user.basics.region}</p> */}
          <p>
            {user.basics.yearsOfExperience} years of experience as a developer
          </p>
          <p>{user.basics.headline}</p>
          <p>
            Email:{" "}
            <a type="email" href={`mailto: ${user.basics.email}`}>
              {user.basics.email}
            </a>
          </p>
          <p>
            Blog:{" "}
            <a
              href={user.basics.blog}
              target="_blank"
              rel="noreferrer noopener"
            >
              {user.basics.blog}
            </a>
          </p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          // href={`https://gitconnected.com/${user.basics.username}/resume`}
          href="https://drive.google.com/file/d/1vO_BkFIrkt1UQoRBiYLf6pvkdIdXOij5/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
