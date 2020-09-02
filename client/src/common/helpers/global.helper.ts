import moment from 'moment';

export const formatDate = (date: moment.MomentInput) => {
  return moment(date).format('MM/DD/YYYY');
};
