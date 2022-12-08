
// refazer essa tela

import "./register.css"

export const Register  = () => {
  return (
    <div className="container"> 
        <a className="links" id="paracadastro"></a>
        <a className="links" id="paralogin"></a>
        
        <div className="content">      
        <div id="cadastro">
            <form method="post" action=""> 

            <p> 
                <label for="email_cad">Seu e-mail</label>
                <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com"/> 
            </p>
            
            <p> 
                <label for="senha_cad">Sua senha</label>
                <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="1234"/>
            </p>
            <p>
                <label for="nome_cad">Nome</label>
                <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Juan Carlos"/>
            </p>
            <p>
                <label for="cpf_cad">CPF</label>
                <input type="number" name="cpf_cad" id="cpf_cad" required="required" placeholder="123.456.789-00"/>
            </p>
            <p>
                <label for="telefone_cad">Telefone</label>
                <input type="tel" name="telefone_cad" id="telefone_cad" required="required" placeholder="XX x xxxx-xxxx"/>
            </p>
            

            <p> 
                <input type="submit" value="Cadastrar" onclick="cadastrar(); return false"/> 
            </p>
            </form>
        </div>
      </div>
  </div>  
  );
};