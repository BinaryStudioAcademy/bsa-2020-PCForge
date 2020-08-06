import React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button, { ButtonType } from 'components/BasicComponents/Button';

export interface IModalButton {
  title: string;
  onClick: () => void;
  buttonType?: ButtonType;
  icon?: string;
}

interface IModalProps {
  open: boolean;
  title?: string;
  buttons?: IModalButton[];
}

const Modal: React.FC<DialogProps & IModalProps> = (props) => {
  const { title, buttons, children, ...restProps } = props;

  return (
    <Dialog {...restProps}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {buttons && (
        <DialogActions>
          {buttons.map((button, index) => (
            <Button {...button} key={index}>
              {button.title}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
