import React from 'react'

export default function Modal({ isVisible=false, title, content, onClose }) {
    const keydownHandler = ({ key }) => {
        switch (key) {
          case 'Escape':
            onClose();
            break;
          default:
        }
      };
    
      React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
      });
    
    return !isVisible ? null : (
        <div className="modal">
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <span className="modal-close" onClick={onClose}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-content">{content}</div>
            </div>
            <div className="modal-footer"><button onClick={onClose}>Ok</button></div>
          </div>
        </div>
    );
};
