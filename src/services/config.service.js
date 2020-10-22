angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://qa-quiz-api.us-west-2.elasticbeanstalk.com/';

    return service;
}]);