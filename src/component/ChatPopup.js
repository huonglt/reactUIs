import React from 'react';
import GoCloudUpload from 'react-icons/lib/go/cloud-upload';
import TiAttachment from 'react-icons/lib/ti/attachment';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import FaClose from 'react-icons/lib/fa/close';

export default class ChatPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    let { theme, closeChat } = this.props;
    return (
      <div >
        <div className={theme.chatContainer}>
          <div className={theme.chatInnerContainer}>
            <div>Thomas Wong</div>
            <div>
              <FaClose size={18} className={theme.closeIcon} onClick={closeChat}/>
            </div>
          </div>
          <div  className={theme.chatMessage}></div>

          <div className={theme.chatFooterContainer}>
            <form>
              <textarea placeholder="Write a message or attach a file" className={theme.chatTextArea}/>
            </form>
            <div className={theme.chatFooter}>
              <GoCloudUpload size={20} className={theme.footerIcon}/>
              <TiAttachment size={20} className={theme.footerIcon}/>
              <div className={theme.sendContainer}>
                <label className={theme.sendLabel}>Press enter to send</label>
                <FaEllipsisH size={20} className={theme.footerIcon}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
