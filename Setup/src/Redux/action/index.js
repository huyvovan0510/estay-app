import { LIKED } from './type';

export const Liked = item => ({
  type: 'LIKED',
  data: { item },
});
