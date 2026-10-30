let form = document.querySelector("form")
let imputEmail=document.querySelector("#email")
let imputPassword=document.querySelectorAll("password")
form.addEventListener("submit",(e)=>{ 
e.preventDefaut()
let email=imputEmail.value
let= password=imputPassword.value
console.log(email,senha)



if(validarUsuario (email,password)){
    console.log("usuario logado com sucesso")
}
    else{
        console.log("erro")
    }

});

let emailfic="karina.v.silva11@aluno.senai.br"
let passwordfic="123548"

function validarUsuario(email,senha){
    if(email ===emailfic && senha===passwordfic){
        return true;
    }

    else if (email===""||senha===""){
    Message.innerText="não deixe campos vazios"
    Message.style.color ="red";
    return false;
    }

    else if(senha.length<8){
        Message.innerText="senha muito curta"
        Message.style.color="red"
        return false
    }
    else{
        Message.innerText=
    }
}
