import { Detail } from './detail';
import { Home } from './home';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'detail', component: Detail,
  children: [
    { path: '', component: Home }
  ]
};
