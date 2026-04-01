import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
        query: {},
      },
    },
  },
};

export const Default = {};

export const OnFavoritesPage = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/favorites',
      },
    },
  },
};
