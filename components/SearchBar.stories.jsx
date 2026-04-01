import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
        query: {
          q: '',
        },
      },
    },
  },
};

export const Default = {};

export const WithPreFilledQuery = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          q: 'Inception',
        },
      },
    },
  },
};
