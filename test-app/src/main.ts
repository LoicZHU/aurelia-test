import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import {RouterConfiguration} from "@aurelia/router";
import {NotFound} from "./pages/Not-found/not-found";

Aurelia
  // .register(RouterConfiguration)
  .register(    RouterConfiguration.customize({
    fallback: NotFound,
    title: '${componentTitles}${appTitleSeparator}🅰️ My Aurelia test app',
    useHref: false,
    useUrlFragmentHash: false
  }))
  .app(MyApp)
  .start();
