/* 마우스 오버시 이미지 확대*/
function bigger(x) {
    x.style.height = "400px";
    x.style.width = "100%";
}
function normal(x) {
    x.style.height = "300px";
    x.style.width = "100%"
}

/* 패스워드 조건에 만족하는 값인지 Check*/
function passwordCheck() {
    var password = $('#password').val();
    var checkPassword = $('#checkPassword').val();
    var num1 = $('#securityNum1').val();
    var num2 = $('#securityNum2').val();
    var phoneNum1 = $('#phoneNum1').val();
    var phoneNum2 = $('#phoneNum2').val();
    if (password != checkPassword) {
        alert("입력한 두개의 비밀번호가 서로 일치하지 않습니다.");
        return false;
    }
    if (password.length < 8 && password.length < 17) {
        alert("비밀번호는 8~16 자리로 입력해 주세요.");
        return false;
    }
    if (!password.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 8~16자리로 입력해주세요.");
        return false;
    }
    for (var index = 0; index < num1.length; index++) { /*주민등록번호 앞자리 숫자 확인*/
        if (num1.charAt(index) < '0' || num1.charAt(index) > '9') {
            alert("숫자만 입력하세요.");
            return false;
        }
    }
    for (var index = 0; index < num2.length; index++) { /*주민등록번호 뒷자리 숫자 확인*/
        if (num2.charAt(index) < '0' || num2.charAt(index) > '9') {
            alert("숫자만 입력하세요.");
            return false;
        }
    }
    for (var index = 0; index < phoneNum1.length; index++) { /*전화 번호 앞자리 숫자 확인*/
        if (phoneNum1.charAt(index) < '0' || phoneNum1.charAt(index) > '9') {
            alert("숫자만 입력하세요.");
            return false;
        }
    }
    for (var index = 0; index < phoneNum2.length; index++) { /*전화 번호 뒷자리 숫자 확인*/
        if (phoneNum2.charAt(index) < '0' || phoneNum2.charAt(index) > '9') {
            alert("숫자만 입력하세요.");
            return false;
        }
    }
}


/* ----------------------로그인------------------------------------------------------- */
function fnLogin() {   
    var userID = document.getElementById("userID");
    var userPW = document.getElementById("userPW");
    
    if(userID.value == ""){
        alert("아이디를 입력하세요.");
        userID.focus();
        return;
    }
    else if(userPW.value ==""){
        alert("비밀번호를 입력하세요.");
        userPW.focus();
        return;
    }
    /*서버에 정상적으로 로그인 되었다는 응답이 왔을 경우 가정*/
    document.getElementById("login1").style.display = "none";
    
    var loginInfo = document.getElementById("loginInfo");
    loginInfo.innerHTML =userID.value + "님 로그인 되었습니다.";
    
    document.getElementById("login2").style.display =""; 
}
/* ----------------------로그인------------------------------------------------------- */

/* ----------------------로그아웃------------------------------------------------------- */
function fnLogout() {
    document.getElementById("userID").value ="";
    document.getElementById("userPW").value ="";
    
    document.getElementById("login1").style.display = "";
    document.getElementById("login2").style.display = "none";
}
/* ----------------------로그아웃------------------------------------------------------- */

/* --------------------패스워드 필드에서 엔터키 누를경우------------------------------------- */
function onKeyupPW(ev) {
    var evKeyup = null;
    if(ev) evKeyup = ev;
    else evKeyup = window.event;
    
    if(evKeyup.keyCode == 13) { /*엔터키 key code 13*/
        document.getElementById("userPW").blur();
        fnLogin();
    }
}
/* --------------------패스워드 필드에서 엔터키 누를경우------------------------------------- */

/* -----------------로그인 -> 회원가입 페이지 이동 ----------------*/
function moveSignUpPage() { 
    location.href='signUp.html';
}
/*------------------ 로그인 -> 회원가입 페이지 이동 ------------------*/


/* 확인문제 정답을 미리 setting 해 놓고 입력값 확인*/
function output() {
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    var three = document.getElementById("three").value;
    var four = document.getElementById("four").value;
    var five = document.getElementById("five").value;
    
    var array = [one,two,three,four,five];
    var count = calc(array);
   
}

function calc(array){
    var count =0;
    var result=['make','ncurses','keypad','echo','이경용']; /*정답 리스트 미리 저장*/
    var right = [];
    var wrong= [];
    for(var i =0; i<result.length; i++){
        if(array[i] == result[i]) {
            count++;
            right.push(i);
        }
        else wrong.push(i);
    }
    coloring(right,wrong);
    return count;
}

function coloring(right,wrong) {
    for(var i=0; i<right.length; i++){
        if(right[i] ==0) document.getElementById("one").style.backgroundColor = "yellow";
        else if(right[i] ==1) document.getElementById("two").style.backgroundColor = "yellow";
        else if(right[i] ==2) document.getElementById("three").style.backgroundColor = "yellow";
        else if(right[i] ==3) document.getElementById("four").style.backgroundColor = "yellow";
        else if(right[i] ==4) document.getElementById("five").style.backgroundColor = "yellow";
    }
    for(var i=0;i<wrong.length;i++){
        if(wrong[i] ==0){
            document.getElementById("one").style.backgroundColor ="red";
            document.getElementById("one").style.color="white";
        }
        else if(wrong[i] == 1){
            document.getElementById("two").style.backgroundColor ="red";
            document.getElementById("two").style.color="white";
        }
        else if(wrong[i] == 2){
            document.getElementById("three").style.backgroundColor ="red";
            document.getElementById("three").style.color="white";
        }
        else if(wrong[i] == 3){
            document.getElementById("four").style.backgroundColor ="red";
            document.getElementById("four").style.color="white";
        }
        else if(wrong[i] == 4){
            document.getElementById("five").style.backgroundColor ="red";
            document.getElementById("five").style.color="white";
        }
    }
}

/*-----------finish 에서 호빵이미지를 클릭하면 시간 랜덤으로 아래로 떨어졌다가 돌아옴---------------*/
function animHobbang(o){
			var tmp = o;
			var timer = Math.round(Math.random() * 2000) + 500; // 에니메이션 시간 랜덤
			$(o).stop().animate({top:240}, timer, function(){$(tmp).stop().animate({top:0}, 1000)});
}
/*-----------finish 에서 호빵이미지를 클릭하면 시간 랜덤으로 아래로 떨어졌다가 돌아옴---------------*/



