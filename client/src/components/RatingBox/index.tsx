import React from "react";
import { withStyles, makeStyles, createStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import RatingIcon from './RatingIcon/index';

const StyledRating = withStyles({
  iconFilled: {
    color: "#EB3D55"
  },
  iconHover: {
    color: "#EB3D55"
  }
})(Rating);

const useStyles = makeStyles(() =>
  createStyles({
    rateHelp: {
      position: 'absolute',
      fontStyle: "italic"
    },
    disableRating: {
      opacity: 0.5
    }
  })
);

const labels: { [index: string]: string } = {
  0: "",
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

export function RatingBoxEditable(ratingValue: number) {
  const [value, setValue] = React.useState<number>(ratingValue);
  const [hover, setHover] = React.useState<number>(-1);
  const classes = useStyles();

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="customized-color"
          defaultValue={value}
          precision={0.5}
          icon={<RatingIcon />}
          onChange={(event: React.ChangeEvent<{}>, newValue: number | null) => {
            if(newValue)
            setValue(newValue);
          }}
          onChangeActive={(event: React.ChangeEvent<{}>, newHover) => {
            setHover(newHover);
          }}
        />
        <Box className={classes.rateHelp} >{labels[hover !== -1 ? hover : 0]}</Box>
      </Box>
    </div>
  );
}

export function RatingBoxReadOnly(ratingValue: number | undefined) {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.disableRating} component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="customized-color"
          defaultValue={ratingValue}
          precision={0.5}
          icon={<RatingIcon />}
          readOnly
        />
      </Box>
    </div>
  );
}
