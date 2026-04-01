import MovieCard from './MovieCard';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onToggleFavorite: { action: 'toggled favorite' },
  },
};

const mockMovie = {
  id: 1,
  title: 'Inception',
  poster_path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  release_date: '2010-07-15',
  vote_average: 8.8,
};

export const Default = {
  args: {
    movie: mockMovie,
    isFavorite: false,
  },
};

export const Favorited = {
  args: {
    movie: mockMovie,
    isFavorite: true,
  },
};
