import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import RatingIcon from './RatingIcon/index';
import Tooltip from '@material-ui/core/Tooltip';

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

interface IRatingBox {
  ratingValue: number;
  disabled: boolean;
  name: string;
  iconColor?: iconColors;
  onValueSet?: (value: number) => void;
}

type iconColors = 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error' | undefined;

const StyledRating = withStyles({
  iconFilled: {
    color: '#EB3D55',
  },
  iconHover: {
    color: '#EB3D55',
  },
  iconEmpty: {
    opacity: 0.5,
    color: '#EB3D55',
  },
})(Rating);

const RatingBox: React.FC<IRatingBox> = ({ ratingValue, disabled, name, iconColor, onValueSet}) => {
  const [value, setValue] = React.useState<number>(ratingValue);
  const [hover, setHover] = React.useState<number>(-1);

  const onRatingSet = (value: number) => {
    if (onValueSet) {
      onValueSet(value);
    }
    setValue(value);
  };

  const tooltipValue = disabled ? value : labels[hover !== -1 ? hover : 0.5];
  return (
    <Tooltip title={tooltipValue} placement="right-start" arrow>
      <Box mb={0.5} borderColor="transparent" display="inline-block">
        <StyledRating
          name={`${name}-rating-box`}
          value={value}
          disabled={disabled}
          precision={disabled ? 0.1 : 0.5}
          icon={<RatingIcon viewBox="0 0 24 10" color={iconColor} />}
          size="large"
          onChange={(event: React.ChangeEvent<Record<string, unknown>>, newValue: number | null) => {
            if (newValue) {
              onRatingSet(newValue);
            }
          }}
          onChangeActive={(event: React.ChangeEvent<Record<string, unknown>>, newHover) => {
            setHover(newHover);
          }}
        />
      </Box>
    </Tooltip>
  );
};
export default RatingBox;
// example of using: <RatingBox ratingValue={3.4} disabled={false} name={'rated-element-key-id-is-here'}/>
