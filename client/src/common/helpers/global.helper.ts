import moment from 'moment';

export const formatDate = (date: moment.MomentInput) => {
  return moment(date).format('MM/DD/YYYY');
};

export const concatClassNames = (...classNames: (string | null)[]) => {
  classNames = classNames.filter(Boolean);
  const className = classNames.join(' ');
  return className;
}
