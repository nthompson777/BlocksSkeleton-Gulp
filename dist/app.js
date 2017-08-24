define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'BLOCK NAME HERE';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home' },
                { route: 'link2', name: 'link2', moduleId: 'link2', nav: true, title: '[LINK 2]' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'LINK 3' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
