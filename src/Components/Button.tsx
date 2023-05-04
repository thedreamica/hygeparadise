import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface ButtonMicroProps {
  buttonText: string;
  textColor: string;
  onHoverColor: string;
  buttonColor: string;
  variant: string;
}


const CustomButton: React.FC<ButtonMicroProps> = ({ buttonText, textColor, onHoverColor, buttonColor }) => {

  const ColorButton: any = styled(Button)(() => ({
    color: textColor,
    backgroundColor: buttonColor,
    '&:hover': {
      backgroundColor: onHoverColor,
      color: 'black'
    },
    '&.MuiButton-contained': {
      color: textColor
    },
    
  }));


  return (
    <ColorButton>
      {buttonText}
    </ColorButton>
  )

}

export default CustomButton