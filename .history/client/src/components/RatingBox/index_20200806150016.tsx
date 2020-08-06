import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import RatingIcon from './RatingIcon/index';
import Tooltip from '@material-ui/core/Tooltip';

const StyledRating = withStyles({
  iconFilled: {
    color: '#EB3D55',
  },
  iconHover: {
    color: '#EB3D55',
  },
  iconEmpty: {
    opacity: 0.2,
    color: '#EB3D55',
  },
})(Rating);

enum labels {
  'Useless' = 0.5,
  'Better that just useless' = 1,
  'Poor' = 1.5,
  'Better that just poor' = 2,
  'Ok' = 2.5,
  'Better that just ok' = 3,
  'Good' = 3.5,
  'Better that just good' = 4,
  'Excellent' = 4.5,
  'Better that just excellent' = 5,
}

export function RatingBox(ratingValue: number, disabled: boolean) {
  const [value, setValue] = React.useState<number>(ratingValue);
  const [hover, setHover] = React.useState<number>(-1);

  const tooltipValue = disabled ? value : labels[hover !== -1 ? hover : 0.5];
  return (
    <Tooltip title={tooltipValue} placement="right-start" arrow>
      <Box mb={1} borderColor="transparent" display="inline-block">
        <StyledRating
          name="customized-color"
          value={value}
          disabled={disabled}
          precision={disabled ? 0.1 : 0.5}
          icon={<RatingIcon />}
          size="small"
          // eslint-disable-next-line
          onChange={(event: React.ChangeEvent<{}>, newValue: number | null) => {

            if (newValue) {
              setValue(newValue);
              //add function that change reating value
            }
          }}
          // eslint-disable-next-line
          onChangeActive={(event: React.ChangeEvent<{}>, newHover) => {

            setHover(newHover);
          }}
        />
      </Box>
    </Tooltip>
  );
}
