import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'BLOCK NAME HERE';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'LINK 1' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'LINK 2' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'LINK 3' }
    ]);

    this.router = router;
  }
}
