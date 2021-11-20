import env from '../env';

export const setTitle = (title: string) => {
  document.title = `${env.pageTitle} ${title}`;
};
