var app = angular.module('core', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    /*
     * Default the route to home because why not?
     */
    $urlRouterProvider.otherwise("/")

    //$locationProvider.html5Mode(true)
    /*
     * page title
     */

    /*
     * Here is a list of the states and routes that will bind to the states.
     * Pretty simple to add a new state. Just append .state and copy one of
     * the examples
     *
     * You can get fancy later on and do some cool stuff like have a sub view
     * that the state will control.
     */
    //$urlRouterProvider.when('/home', '/home');
    $stateProvider
        .state('home', {
            url: "/",
            views: {
                main: {templateUrl: "app/pages/home/home.html"},
                sidebar: {templateUrl: "app/pages/home/home-sidebar.html"}
            }
        })
        .state('games', {
            url: "/games",
            views: {
                main: {templateUrl: "app/pages/games/games.html"},
                sidebar: {templateUrl: "app/pages/home/home-sidebar.html"}
            }
        })
        .state('profile', {
            url: "/profile",
            views: {
                main: {templateUrl: "app/pages/profile/profile.html"},
                sidebar: {templateUrl: "app/pages/home/home-sidebar.html"}
            }
        })
        .state('login', {
            url: "/login",
            views: {
                main: {templateUrl: "app/pages/auth/login.html"},
                sidebar: {templateUrl: "app/pages/home/home-sidebar.html"}
            }
        })
});