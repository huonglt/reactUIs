import React, { PropTypes } from 'react';
import { AppBar as _AppBar} from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from '../css/AppBar.css';

const AppBar = ({ children, ...other }) => (
  <_AppBar {...other} theme={theme}>
    <Logo /> Messaging Popups - UI built with ReactJS
    {children}
  </_AppBar>
);

export default AppBar;
