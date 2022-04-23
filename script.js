const form = document.forms[0];
const message = document.querySelector(".content__message");

const matchRegex = () => {
    const regExEmail= new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    if(regExEmail.test(form[0].value)){
        message.innerText = "Merci, votre email est valide."
        form[1].classList.remove("notValid");
        form[0].classList.remove("notValid");
    } else {
        form[1].classList.add("notValid");
        form[0].classList.add("notValid");
        message.innerText = "Please provide a valid email.";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form[0].value === "" ? message.innerText = "Veuillez entrer une adresse email." : matchRegex();
})