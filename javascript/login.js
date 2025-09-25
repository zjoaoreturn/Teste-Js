const usuarios = [ // array sempre começa com 0,1,2 ...
    {
        login:'joao',
        pass:'joao'
    },
    {
        login:'alex',
        pass:'alex'
    },
    {
        login:'lucas',
        pass:'lucas'
    }
]

function logar(){
    const login = window.document.getElementById('login').value; 
    const senha = window.document.getElementById('senha').value;
    let validaLogin = false

    for(let i in usuarios){ // laço de repetição (for, for in, for of, for each)
        if(login == usuarios[i].login && senha == usuarios[i].pass){ 
            validaLogin = true
            location.href = "index.html";
            break
        }
    }
    
    if(validaLogin == false){
            alert('Usuario ou senha incorretos')
        }
} 