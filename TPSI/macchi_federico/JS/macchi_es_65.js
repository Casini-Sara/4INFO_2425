function main(){

    let utente = {
        nome: "Jon",
        role: "user"
    }
    let {nome, role, is_admin = false} = utente;
    console.log(nome, role, is_admin)

}


main()

