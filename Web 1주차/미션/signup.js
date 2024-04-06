const form = document.querySelector('.signupBox');
const modal = document.querySelector('.modalBox');
const btnSignUp = document.getElementById("btn_signup");
const btnCloseModal = document.getElementById("btnCloseModal");

let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userAge = document.getElementById('age');
let userPw = document.getElementById('pw');
let userPwCheck = document.getElementById('pw2');

let nameAlert = document.getElementById('name_alert');
let emailAlert = document.getElementById('email_alert');
let ageAlert = document.getElementById('age_alert');
let pwAlert = document.getElementById('pw_alert');
let pwCheckAlert = document.getElementById('pw2_alert');

btnCloseModal.addEventListener("click", ()=>{ // Modal Close
    modal.classList.add('hidden');
});

let bool_success = false;

btnSignUp.addEventListener("click", (event)=>{ // signup Button
    event.preventDefault(); // 기본 이벤트 동작 방지
    // validation
    if (nameValidation() && emailValidation() && ageValidation() && pwValidation() && pwCheckValidation()) {
        bool_success = true;
    } else {
        bool_success = false;
    }

    if (bool_success) {
        modal.classList.remove('hidden');
    }
});

function nameValidation() {
    nameAlert.classList.remove('hidden'); // 수정: remove 대신 classList.add 사용
    if (userName.value.trim() !== "") { // 수정: trim()을 이용하여 앞뒤 공백 제거
        nameAlert.textContent = "멋진 이름이네요!"; // 수정: 조건에 맞게 alert 내용 변경
        nameAlert.style.color = "green"; // 추가: 초록색으로 변경
        return true;
    }
    nameAlert.textContent = "필수 입력 항목입니다!"; // 수정: 조건에 맞게 alert 내용 변경
    nameAlert.style.color = "red"; // 추가: 빨간색으로 변경
    return false;
}

function emailValidation() {
    if (userEmail!="" && userEmail.includes("@")) {
        return true;
    }
    return false;
}

function ageValidation() {

}