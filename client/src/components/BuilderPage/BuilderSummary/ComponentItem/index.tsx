import { Box, CardActions, CardContent, Collapse, IconButton, Typography, Badge } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import styles from 'components/BuilderPage/BuilderSummary/ComponentItem/styles.module.scss';

interface IProps {
  title: string;
  specification: JSX.Element | null;
  count?: number | null;
}

const ComponentItem = ({ title, specification, count }: IProps): JSX.Element | null => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return specification ? (
    <Box className={styles.cardComponent}>
      <CardActions onClick={handleExpandClick} disableSpacing className={styles.cardTitle}>
        {count ? (
          <Badge badgeContent={count} color="error">
            <Typography variant="subtitle1">{title}</Typography>
          </Badge>
        ) : (
          <Typography variant="subtitle1">{title}</Typography>
        )}
        <IconButton className={styles.expandButton} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={styles.cardContent}>{specification}</CardContent>
      </Collapse>
    </Box>
  ) : null;
};

export default ComponentItem;
