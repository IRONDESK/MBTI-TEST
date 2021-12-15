// 문제 모음
let currentQ = 1;
const q = {
    1: {"title": "문제 1번", "type": "EI", "btnA": "E", "btnB": "I"},
    2: {"title": "문제 2번", "type": "EI", "btnA": "E", "btnB": "I"},
    3: {"title": "문제 3번", "type": "EI", "btnA": "E", "btnB": "I"},
    4: {"title": "문제 4번", "type": "SN", "btnA": "E", "btnB": "I"},
    5: {"title": "문제 5번", "type": "SN", "btnA": "E", "btnB": "I"},
    6: {"title": "문제 6번", "type": "SN", "btnA": "E", "btnB": "I"},
    7: {"title": "문제 7번", "type": "TF", "btnA": "E", "btnB": "I"},
    8: {"title": "문제 8번", "type": "TF", "btnA": "E", "btnB": "I"},
    9: {"title": "문제 9번", "type": "TF", "btnA": "E", "btnB": "I"},
    10: {"title": "문제 10번", "type": "JP", "btnA": "E", "btnB": "I"},
    11: {"title": "문제 11번", "type": "JP", "btnA": "E", "btnB": "I"},
    12: {"title": "문제 12번", "type": "JP", "btnA": "E", "btnB": "I"},
}

// 문제 이동
function next() {
    console.log(currentQ);
    if (Object.keys(q).length < currentQ ) {
        $(".question").hide();
        $(".result").show();
    } else {
    $("#title").html(q[currentQ]["title"]);
    $("#type").val(q[currentQ]["type"]);
    $("#btnA").html(q[currentQ]["btnA"]);
    $("#btnB").html(q[currentQ]["btnB"]);
    $(".progress-bar").css("width", 100/Object.keys(q).length*currentQ+"%");
    currentQ++;
    }
}

// 시작 화면
function start() {
    $("#start-btn").click( function() {
        $(".start").hide();
        $(".question").show(); // display
        next();
    })
}

// 버튼 이벤트
$("#btnA").click( function() {
    let selectType = $("#type").val(); //EI
    let preValue = $('#'+selectType).val();
    $('#'+selectType).val(parseInt(preValue) + 2);
    next();
});
$("#btnB").click( function() {
    next();
});

start();