class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status:1
        }
        this.ativar = this.ativar.bind(this)
        this.desativar = this.desativar.bind(this)
    }

    ativar(){
        this.setState({status:1})
    }
    desativar(){
        this.setState({status:0})
    }
    render(){

        let statusMsg;
        let statusBtn;
        
        if(this.state.status == 1){
            statusMsg = 'Ativado';
            statusBtn = <button onClick = {this.desativar}>Deativar</button>
        } else {
            statusMsg = 'Desativado';
            statusBtn = <button onClick = {this.ativar}>Ativar</button>
        }


        return(
            <div>
                <p>Status:{statusMsg}</p>
                {statusBtn}
            </div>
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