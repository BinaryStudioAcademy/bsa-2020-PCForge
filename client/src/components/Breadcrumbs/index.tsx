import React from 'react';
import Crumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from './styles.module.scss';

type PropsType = {
  links: { name: string; href: string }[];
  onClick: (href: string) => void;
  className?: string;
};

const Breadcrumbs = ({ links, onClick, className = '' }: PropsType): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    onClick((event.target as HTMLAnchorElement).href);
  };

  const linkElements = links.slice(0, -1).map((link) => {
    if (!link) return null;
    return (
      <Link key={link?.name} color="inherit" href={link?.href} onClick={handleClick}>
        {link?.name}
      </Link>
    );
  });

  const activeElement = links.length ? <Typography>{links[links.length - 1]?.name}</Typography> : null;

  return (
    <Crumbs
      className={className}
      classes={styles}
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {linkElements}
      {activeElement}
    </Crumbs>
  );
};

export default Breadcrumbs;
