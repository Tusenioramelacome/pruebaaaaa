angular.module('appFortuna', [])
.controller('ControladorFortuna', ['$scope', '$window', '$http', function($scope, $window, $http) {
    $scope.mostrarMensaje = function() {
        $http.get('http://127.0.0.1:8080/mensaje')
        .then(function(response) {
            console.log(response.data); // Agregar este console.log para verificar la respuesta
            localStorage.setItem("mensajeFortuna", response.data.mensaje);
            $window.location.href = 'mensaje.html'; // Redirige a la página mensaje.html
        })
        .catch(function(error) {
            console.error('Error al obtener el mensaje de la fortuna:', error);
        });
    };
}]);