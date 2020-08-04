import React from 'react';
import Crumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Breadcrumbs.scss';

type PropsType = {
  links: { name: string; href: string }[];
  onClick: (href: string) => void;
};

const Breadcrumbs = ({ links, onClick }: PropsType) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    onClick(event.target.href);
  };

  const linkElements = links.slice(0, -1).map((link) => (
    <Link key={link.name} className="breadcrumbs-item" color="inherit" href={link.href} onClick={handleClick}>
      {link.name}
    </Link>
  ));

  const activeElement = (
    <Typography className="breadcrumbs-opacity" color="textPrimary">
      {links[links.length - 1].name}
    </Typography>
  );

  return (
    <Crumbs
      className="breadcrumbs"
      separator={<NavigateNextIcon className="breadcrumbs-opacity" fontSize="small" />}
      aria-label="breadcrumb"
    >
      {linkElements}
      {activeElement}
    </Crumbs>
  );
};

export default Breadcrumbs;
