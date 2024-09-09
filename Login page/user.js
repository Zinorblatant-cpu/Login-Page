class user {
    #email
    #password
    #role
    #ativo
    constructor(email, password, role, ativo = true){
        this.#email = email
        this.#password = password
        this.#role = role || "User"
        this.#ativo = ativo
    }
}
