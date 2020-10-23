import React from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Index = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Search />
      </div>

      <Tracks />
    </React.Fragment>
  );
};

export default Index;
