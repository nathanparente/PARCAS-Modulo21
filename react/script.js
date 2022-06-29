class Botao extends React.Component {


    render(){
        return(
            <button onClick={() => {
                if(this.props.status === 1){
                    this.props.funcaoTrocar(0)
                }else {
                    this.props.funcaoTrocar(1)
                }
            }}>{this.props.status === 1 ? 'DESABILITADO' : 'HABILITADO'}</button>
        )
    }
}


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            status:1
        }

        this.trocarStatus = this.trocarStatus.bind(this)
    }

    trocarStatus(novoStatus){
        this.setState({status:novoStatus})
    }


    render(){
        return(
            <div>
                <p>{this.state.status === 1 ? 'Habilitado' : 'Desabilitado'}</p>
                <Botao status={this.state.status} funcaoTrocar={this.trocarStatus}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)