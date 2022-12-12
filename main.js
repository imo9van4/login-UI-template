const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function forgotPassword() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
