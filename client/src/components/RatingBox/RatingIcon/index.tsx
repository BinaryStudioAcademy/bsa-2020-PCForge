import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ReactComponent as Rating } from 'assets/icons/rating.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    svgIcon: {
      margin: theme.spacing(0.3),
    },
  })
);

export default function RatingIcon(props: SvgIconProps): ReactElement {
  const classes = useStyles();

  return <SvgIcon {...props} className={classes.svgIcon} component={Rating} />;
}
