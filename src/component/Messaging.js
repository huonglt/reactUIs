import React from 'react';
import { EditIcon, SettingsIcon, MinimizeIcon } from './Icons.js';

export default class Messaging extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { theme, toggleRecent }  = this.props;
    return (
      <div className={theme.innerContainer}>
        <div className={theme.standardLine} onClick={toggleRecent}>Messaging</div>
        <div  className={theme.iconContainer}>
          <EditIcon/>
          <SettingsIcon/>
          <MinimizeIcon/>
        </div>
      </div>
    );
  }
}
