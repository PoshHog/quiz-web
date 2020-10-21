angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://qa-quiz-api.us-west-2.elasticbeanstalk.com/';

    return service;
}]);