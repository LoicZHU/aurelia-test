import {HelloWorld} from "./pages/Hello-world/hello-world";

export class MyApp {
  static routes = [
    {
      path: 'hello',
      component: HelloWorld,
      title: 'Hello world',
    },
  ];

  public message = 'Hello world!';
}
