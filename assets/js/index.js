const angular = require('angular');

const baseURLRendering = '/rendering';

console.log('Hello World');
let app =
    angular.module("index", [])

        .config(["$interpolateProvider", function ($interpolateProvider) {
            //On change les symboles d'interpolation par défaut d'AngularJs
            $interpolateProvider.startSymbol('//').endSymbol('//');

        }])

        .controller("mainCtrl", ["$scope", "$http", "$timeout", function($scope, $http, $timeout) {
        }]);
