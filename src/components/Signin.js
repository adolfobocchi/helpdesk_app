import React from 'react';

function Signin(props) {
    return(
        <div className="signinArea">
            <div className="signinHeader">

            </div>
            <div className="signinContent">
                <form>
                    <div className="formCampo">
                        <label>Usuário:</label>
                        <input type='text' name='login' />
                    </div>
                    <div className="formCampo">
                        <label>Senha:</label>
                        <input type='password' name='password' />
                    </div>
                    <div className="formCampo">
                        <input type='submit' value='ENTRAR' />
                    </div>
                    
                </form>
            </div>
            <div className='signupArea'>
                <p>Cadastro para abertura de chamados? Clique <a onClick={()=> props.setOpenSignup(true)}>aqui!</a></p>
            </div>
            
        </div> 
    );    
}

export default Signin;