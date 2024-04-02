const modal = document.querySelector('.modalBox');
const btnSuccess = document.getElementById("btn_signup");
const btnCloseModal = document.getElementById("btnCloseModal");

// validation을 모두 통과하지 못했을 때

// validation을 모두 통과했을 때
// btnSuccess.addEventListener("click", ()=>{
//     modal.classList.remove('hidden');
// });
btnCloseModal.addEventListener("click", ()=>{
    modal.classList.add('hidden');
});