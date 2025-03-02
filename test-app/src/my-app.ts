import { IRoute, IRouteableComponent } from '@aurelia/router';
import { Home } from './pages/Home/home';
import { AnimationHooks } from './hooks/animation-hooks';

export class MyApp implements IRouteableComponent {
  static dependencies = [AnimationHooks];

  static routes: IRoute[] = [
    {
      path: 'hello',
      component: import('./pages/Hello-world/hello-world'),
      title: 'Hello world',
    },
    { path: ['', 'home'], component: Home },
  ];

  public message = 'Hello world!';
}
