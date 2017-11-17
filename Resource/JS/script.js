$(document).ready(function () {
    $(".jq-question-box").waypoint(function (direction) {
        if (direction == "down") {
            $(".jq-question-box").addClass("animated fadeInUp");
        }
    }, {
        offset: "100px"
    });
});