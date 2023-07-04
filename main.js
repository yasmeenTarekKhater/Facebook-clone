function signIn(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let error=document.getElementById("error");
    error.style.color="red";
    let text="";
    if(email.indexOf("@")==-1){
        text="please enter vaild email";
        error.innerHTML=text;
        return false;
    }
    else if(pass.length <8){
        text="please enter vaild pass";
        error.innerHTML=text;
        return false;
    }
    else{
      window.location.href="signup.html";
      return true;
    }
}

function signUp(){
  let fname=document.getElementById("fristname").value;
  let email=document.getElementById("emailup").value;
  let pass=document.getElementById("passwordup").value;
  let error=document.getElementById("errorUp");
  error.style.color="red";
  let text="";
  if(email.indexOf("@")==-1){
      text="please enter vaild email";
      error.innerHTML=text;
      return false;
  }
  else if(pass.length <8){
      text="please enter vaild pass";
      error.innerHTML=text;
      return false;
  }
  else if(fname.length<4){
    text="please enter vaild frist Name";
    error.innerHTML=text;
    return false;
  }
  else{
      return true;
  }
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
