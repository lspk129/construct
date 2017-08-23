import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) =>
  (<div>
    <Helmet>
      <title>Konstruktyvas</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Helmet>
    {children()}
  </div>);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
