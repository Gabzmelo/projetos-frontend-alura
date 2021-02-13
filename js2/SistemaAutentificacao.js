/*
 Ser autenticavel signifa ter o método autenticar

 ducky type - aplicação do teste do pato; 
*/

export class SistemaAutentificacao{
    static login(autenticavel, senha){
        if(SistemaAutentificacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}