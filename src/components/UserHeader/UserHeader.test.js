import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import UserHeader from "./UserHeader";

test("renders the profile image returned by GitConnected", () => {
  const container = document.createElement("div");
  const user = {
    basics: {
      image: "https://example.com/profile.jpg",
      name: "Naeem Dadi",
    },
  };

  ReactDOM.render(
    <MemoryRouter>
      <UserHeader user={user} />
    </MemoryRouter>,
    container
  );

  expect(container.querySelector("img").getAttribute("src")).toBe(
    user.basics.image
  );

  ReactDOM.unmountComponentAtNode(container);
});
