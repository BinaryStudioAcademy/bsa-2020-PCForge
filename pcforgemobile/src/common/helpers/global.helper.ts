import moment from 'moment';

export const formatDateFromNow = (date: moment.MomentInput) => {
  return moment(date).fromNow();
};
