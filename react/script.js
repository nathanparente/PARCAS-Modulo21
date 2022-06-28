class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"teste@gmail.com",
            texto:"texto qualquer",
            sexo:"feminino"
        }
    }

    render(){
        return(
            <form method='POST'>
                <input type="email" name="email" value={this.state.email.toUpperCase()} /><br/><br/>
                <input type="password" name="senha" /><br/><br/>
                <textarea name="corpo" value={this.state.texto} ></textarea>
                <select name="opcoes" value={this.state.sexo}>
                    <option></option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>

                </select>
                <input type="submit" name="enviar" /><br/>
            </form>
        )
    }
}

let elemento = (
    <div>
        <Login/>
    </div>
)

ReactDOM.render(
    elemento, 
    document.getElementById("app")
)

/* TIPOS DE CONDICIONAIS INLINE 

*1

constructor(props){
        super(props)
        this.state = {
        msg: [1,2,3,4,5,6,7,8,9]
        }
    }

    render(){
        return(
            <div>
            {this.state.msg.length > 0 && 
                <h2>Você possui {this.state.msg.length} mensagens não lidas</h2>
            }
                
            </div>
        )
    }

*2 

class Aviso extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        logado: false 
        }
    }

    render(){
        return(
            <div>
                O usuário {this.state.logado ? '' : 'não'} está logado
            </div>
        )
    }
}

*/