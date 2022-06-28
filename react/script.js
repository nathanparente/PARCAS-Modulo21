class Aviso extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        logado: true
        }
    }

    render(){
        return(
            <div>
                {this.state.logado == true &&
                    <p>Você está logado</p>
                }
                {this.state.logado == false &&
                    <p>Você não está logado</p>

                }
            </div>
        )
    }
}

let elemento = (
    <div>
        <Aviso/>
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