// @ts-check
import React from "react";
import PropTypes from "prop-types";

const Tab = ({ eventId, onClick, children }) => <>{children}</>;

Tab.propTypes = {
  eventId: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

export default Tab;
