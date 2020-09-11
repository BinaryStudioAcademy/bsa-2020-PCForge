import globalTitles from 'common/config/globalTitles';

export default (pageTitleId?: string) => {
  if (pageTitleId) {
    return globalTitles[pageTitleId] || {};
  }

  return {
    name: '',
    description: '',
  };
};
