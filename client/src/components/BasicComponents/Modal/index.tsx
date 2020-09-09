import React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import styles from './styles.module.scss';

export interface IModalButton {
  text: string;
  onClick: () => void;
  buttonType?: ButtonType;
  icon?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

export interface IModalProps {
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
              {button.text}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
