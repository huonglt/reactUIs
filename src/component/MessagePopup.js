import React from 'react';
import theme from '../css/Messaging.css';
import cn from 'classnames';
import RecentChattee from './RecentChattee.js';
import ChatPopup from './ChatPopup.js';
import Messaging from './Messaging.js';

export default class Message1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minimized: true, showChat: false };
    this.handleClick = this.handleClick.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }
  handleClick() {
    this.setState({ minimized: !this.state.minimized });
  }
  toggleChat() {
    if(!this.state.showChat) {
      this.setState({ showChat: true });
    }
  }
  closeChat() {
    this.setState({ showChat: false });
  }
  render() {
    let container = cn(theme.baseContainer, this.state.minimized ? theme.containerMinimized : theme.containerPopUp);

    return (
      <div>
        <div className={container}>
          <Messaging theme={theme} handleClick={this.handleClick}/>
          <RecentChattee theme={theme} show={!this.state.minimized} toggleChat={this.toggleChat}/>
        </div>
        <ChatPopup show={this.state.showChat} closeChat={this.closeChat} theme={theme}/>
      </div>
    );
  }
}
