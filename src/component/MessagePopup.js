import React from 'react';
import { EditIcon, SettingsIcon, MinimizeIcon } from './Icons.js';
import ChatPopup from './ChatPopup.js';
import Messaging from './Messaging.js';
import RecentChattee from './RecentChattee.js';
import theme from '../css/Messaging.css';

export default  class MessagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showRecent: false, showChat: false };
    this.toggleRecent = this.toggleRecent.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
  }
  toggleRecent() {
    this.setState({...this.state, showRecent: !this.state.showRecent});
  }
  toggleChat() {
    this.setState({...this.state, showChat: !this.state.showChat});
  }
  render() {
    return (
      <div>
        <div className={theme.container}>
            <Messaging toggleRecent={this.toggleRecent} theme={theme}/>
            <RecentChattee theme={theme} show={this.state.showRecent} toggleChat={this.toggleChat}/>
        </div>
        <ChatPopup show={this.state.showChat} toggleChat={this.toggleChat} theme={theme}/>
      </div>
    );
  }
}
