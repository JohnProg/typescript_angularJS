var moduleJC;
(function (moduleJC) {
    'user strict';
    var demoModule = angular.module('demoModule', ['ngRoute']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider) {
        $routeProvider.when('/inicio', {
            templateUrl: 'app/views/inicio.html'
        }).when('/products', {
            templateUrl: 'app/views/productList.html'
        }).when('/acerca', {
            templateUrl: 'app/views/acerca.html'
        }).otherwise('/inicio');
    }
})(moduleJC || (moduleJC = {}));
//# sourceMappingURL=app.js.map