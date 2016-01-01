var app = angular.module('tumble');

app.controller('mainCtrl', function($scope, mainService) {
    var vid = document.getElementById("bgvid");
    vid.playbackRate = 0.55;
    
        // // Create a function to log the response from the Mandrill API
        // function log(obj) {
        //     $('#response').text(JSON.stringify(obj));
        // }

        // // create a new instance of the Mandrill class with your API key
        // var m = new mandrill.Mandrill('tyS3DfHyxNEJ9u6qMJDBEQ');

        // // create a variable for the API call parameters
        // var params = {
        //     "message": {
        //         "from_email":$scope.email,
        //         "to":[{"email":"antonionquijano@gmail.com"}],
        //         "subject": "Sending a text email from the Mandrill API",
        //         "text": "I'm learning the Mandrill API at Codecademy."
        //     }
        // };

        // function sendTheMail() {
        // // Send the email!

        //     m.messages.send(params, function(res) {
        //         log(res);
        //     }, function(err) {
        //         log(err);
        //     });
        // }
    
    $scope.test = function () {
        console.log($scope.name)
        console.log($scope.organization)
        console.log($scope.email)
        var obj = {
            "name": $scope.name,
            "organization": $scope.organization,
            "email": $scope.email
        }
        mainService.subscribe(obj).then(function(res) {
            console.log("Success");
            $scope.name = "";
            $scope.organization = "";
            $scope.email = "";
            alert("Thanks for subscribing! We'll be in contact with you shortly.")
        })
    }
})