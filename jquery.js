/* -------------------로그인 로그아웃에서 input값 설정---------------------------------*/
$('input').focus(function () {
    $(this).next('span').removeAttr('hidden');
});
$('input').blur(function () {
    $(this).next('span').attr('hidden', 'hidden');
});
/* -------------------로그인 로그아웃에서 input값 설정---------------------------------*/

/*-------------------------------버튼 효과-------------------------------------------*/
$('#resetButton').click(function () {
    $('#display-1').text(" Reset Button is clicked");
    $('#display-1').fadeIn(function() {
        $(this).delay(1000).fadeOut();  // 글씨 다시 사라지게 만들기
    })
});
/*-------------------------------버튼 효과-------------------------------------------*/

/*-------------------회원가입시 다음페이지 버튼 클릭시 다음페이지로 넘기기-------------------*/
function continuePage() {
    $('#signUp1').hide(3000);
    $('#signUp2').show(3000);
}

function backPage() {
    $('#signUp1').show(3000);
    $('#signUp2').hide(3000);
}
/*-------------회원가입시 뒤로가기 버튼 클릭시 이전 페이지로 넘어가기--------------------------*/

/*--------------------------------아이디 유효성 검사-------------------*/
function checkID() {
    var userID = $('#userID').val();
    var idReg = /^[A-za-z0-9]{5,15}/g; /*영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자, 끝날때 제한없음*/
    if (!idReg.test(userID)) $('#idCheck').text(" 잘못된 아이디 입니다.");
    else $('#idCheck').text("   가능한 아이디 입니다.");
}



/*-------------------------------------이미지 슬라이더------------------------------------------------*/
$(document).ready(function () { // 모든 html 페이지가 화면에 뿌려지고 나서 ready 안에서술된 이벤트들이 동작 준비 == $(function() {~~ });
    // 슬라이드의 전체 개수를 구한다.
    var slideMax = $(".control_button").length;
    // 슬라이드 이미지 좌우 이동버튼
    function moveArrow(nextIndex) {
        var num = $(".active").index();
        var idx = num + nextIndex;
        if (idx < 0) {
            idx = slideMax;
        }
        if (idx >= slideMax) {
            idx = 0;
        }
        moveSlider(idx);
    }
    // 슬라이드를 움직여주는 함수
    function moveSlider(index) {
        // 슬라이드를 이동합니다.
        var willMoveLeft = -(index * 600);
        $(".slider_panel").animate({
            left: willMoveLeft
        }, "slow");
        // control_button에 active클래스를 부여/제거합니다.
        $(".control_button[data-index=" + index + "]").addClass("active");
        $(".control_button[data-index!=" + index + "]").removeClass("active");
        // 글자를 이동합니다.
        $(".slider_text[data-index=" + index + "]").show().animate({
            left: 0
        }, "slow");
        $(".slider_text[data-index!=" + index + "]").hide("slow", function () {
            $(this).css("left", -300);
        });
    }
    // 초기 텍스트 위치 지정 및 data-index 할당
    $(".slider_text").css("left", -300).each(function (index) {
        $(this).attr("data-index", index);
    });
    // 좌우 슬라이드 넘김 버튼
    $("#leftMove").on("click", function () {
        moveArrow(-1)
    });
    $("#rightMove").on("click", function () {
        moveArrow(1)
    });
    // 컨트롤 버튼의 클릭 핸들러 지정 및 data-index 할당
    $(".control_button").each(function (index) {
        $(this).attr("data-index", index);
    }).click(function () {
        var index = $(this).attr("data-index");
        moveSlider(index);
    });
    // 초기 슬라이드의 위치 지정
    var randomNumber = Math.round(Math.random() * slideMax);
    var autoSlider=0;  // stop 해주기 위해서 받아 줄 변수를 만든다.
    moveSlider(randomNumber);
    // 5초마다 한번씩 슬라이드를 자동으로 다음 페이지로 넘긴다.
    autoSlider = setInterval(function () { 
        moveArrow(1);
    }, 5000);
    $("#stopSlider").on("click", function() { //stop 버튼 클릭시 stop
        clearInterval(autoSlider);
    });
});
/*-----------------------------이미지 슬라이더------------------------------------------------*/
/*----------------------강조 단어 깜빡거리는 효과-------------------------*/
$(function() {   
    var blink = $("#blink");
    var shown = true;
    setInterval(toggle,500);
    
    function toggle() {
        if(shown) {
            blink.hide()
            shown = false;
        } else {
            blink.show();
            shown= true;
        }
    }
});
/*----------------------강조 단어 깜빡거리는 효과-------------------------*/









