import './Container.scss';

import React, { PropTypes } from 'react';

const Container = ({ children }) => (
  <div className="Container">{children}</div>
);

export default Container;
