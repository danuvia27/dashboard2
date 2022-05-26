import React from "react";

export const Tables = ({ feed }) => {
  return (
    <div>
      <ul>
        <li> {feed.title}</li>
        <li> {feed.link}</li>
        <li> {feed.updated}</li>
      </ul>
    </div>
  );
};
