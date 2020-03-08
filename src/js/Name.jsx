import React from "react";

const TabHeader = ({ children, onClick, id }) => {
  return (
    <div className="react-tab-header">
      {children}
    </div>
  );
};

export default TabHeader;
