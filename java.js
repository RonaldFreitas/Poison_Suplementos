const frm = document.querySelector("form")
const show = document.querySelector("#show")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = frm.inName.value;
    const email = frm.inEmail.value;
    const password = frm.inPassword.value;
    Date = new Date();
    day = Date.getDate()
    month = Date.getMonth() + 1
    year = Date.getFullYear()

    show.innerText = ("nome: " + name + "\nemail: " + email + "\nsenha: " + password + "\n"  + day + "/" + month + "/" + year)

    
    
    
})