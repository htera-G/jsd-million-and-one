// make ajax call to get current total from server
function getTotal() {
    $.ajax({
        url: "/total",
        type: "GET",
        success: function (data) {
            // update total on page
            $("#total").text(data.total);
        },
    });
}

function getAmount() {
    let subtractAmount = $("#amount").val();
}

function checkPin() {
    let pin = $("#inputPass").val();
    if (pin == 1234) {
        $(".login-container").hide();
        $("h1").text("Enter Details");
        $(".score-container").show();
    } else {
        $("#inputPass").val("");
        Toastify({
            text: "Incorrect Pin",
            duration: 2000,
            gravity: "top",
            position: "center",
            style: {
                background: "#414141",
            },
        }).showToast();
    }
}

function saveScore() {
    let name = $("#inputPlayer").val();
    let score = $("#inputScore").val();

    Toastify({
        text: "Score Saved",
        duration: 2000,
        gravity: "top",
        position: "center",
        style: {
            background: "#414141",
        },
    }).showToast();
    setTimeout(backToHome, 2000);
    // $.ajax({
    //     url: "/saveScore",
    //     type: "POST",
    //     data: { name: name, score: score },
    //     success: function (data) {
    //         console.log(data);
    //     },
    // });
}

function backToHome() {
    window.location.href = "index.html";
}
