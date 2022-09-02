import React from 'react';

function Signup(props) {
    return(
        <div className="signupArea">
            <div className="signupHeader">

            </div>
            <div className="signupContent">
                <form>
                    <div className="formCampo">
                        <label>Login:</label>
                        <input type='text' name='login' />
                    </div>
                    <div className="formCampo">
                        <label>Nome Completo:</label>
                        <input type='text' name='nome' />
                    </div>
                    <div className="formCampo">
                        <label>E-mail:</label>
                        <input type='email' name='email' />
                    </div>
                    <div className="formCampo">
                        <label>Senha:</label>
                        <input type='password' name='password' />
                    </div>
                    <div className="formCampo">
                        <input type='submit' value='CADASTRAR' />
                    </div>
                    
                </form>
            </div>
            
        </div> 
    );    
}

export default Signup;