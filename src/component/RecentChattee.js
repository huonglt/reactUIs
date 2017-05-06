import React from 'react';

export default class RecentChattee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    let { theme, toggleChat } = this.props;
    return (
      <div className={theme.recentContainer}>
        <div className={theme.recentBlock}>Recent</div>
        <div className={theme.chattee} onClick={toggleChat}>
          <div className={theme.flexBox}>
            <img alt="Thomas Wong" className={theme.avatar} src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/7/005/095/2f7/380f7c7.jpg"/>
            <div className={theme.contactContainer}>
              <div className={theme.contactName}>Thomas Wong</div>
              <div className={theme.contactTitle}>Managing Director of MRS</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
