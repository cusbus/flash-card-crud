;(function() {
    'use strict';

    angular.module('client', [
        //3rd party
        'ui.router',
        'ui.bootstrap',
        'btford.markdown',

        //base 
        'client.layout',

        //services
        'client.services',

        //views & controllers
        'client.site',
        'client.flash-cards',
        'client.scraper',
        'client.crud'

    ])

    angular.module('client')
        .config(RouteConfig)
        .run(StateErrorHandler)

    StateErrorHandler.$inject = ['$rootScope', '$log']

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', info => $log.log(info))
    }

    RouteConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

})();