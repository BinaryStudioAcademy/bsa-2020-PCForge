import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    svgIcon: {
      margin: theme.spacing(0.3)
    }
  })
);

export default function RatingIcon(props: SvgIconProps) {
  const classes = useStyles();

  return (
    <SvgIcon {...props} className={classes.svgIcon} >
      <path d="M20.5635 0.242004V0.868256C20.3909 1.14651 20.0903 1.33151 19.7484 1.33151C19.4312 1.33151 19.1494 1.17151 18.9727 0.92601V0H5.93598V0.541667L0 0.551758C0.223618 3.48076 2.8099 5.39176 5.17279 5.55551C5.22593 5.55951 5.27955 5.56175 5.33269 5.56375C6.21899 5.65125 6.90595 6.4375 6.90595 7.382C6.90595 7.887 6.70734 8.34375 6.3873 8.673H5.84245V13H18.9183V8.673H18.3735C17.769 8.376 17.3508 7.73651 17.3508 6.99501C17.3508 5.97001 18.1501 5.13901 19.1362 5.13901C19.7193 5.13901 20.2377 5.43051 20.5637 5.88101V5.9295H24V0.242004H20.5635Z" />
    </SvgIcon>
  );
}
