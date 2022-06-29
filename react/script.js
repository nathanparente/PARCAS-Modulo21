

class Moeda extends React.Component {
    render(){
        let novoValor = parseFloat(this.props.valor);

        return(
            <div>
                Câmbio em: {this.props.moeda}<br/><br/>
                {this.props.moeda == "dollar" ? novoValor/5 +' $' : novoValor*5 +' R$'}
                
            </div>
        )
    }
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            valor:5
        }

        this.vChange = this.vChange.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }

    vChange(novoValor){
        this.setState({valor:novoValor})
    }

    inputChange(e){
        this.setState({valor:e.target.value})
    }

    render(){
        return(
            <div>
                <h3>Digite o valor para saber o câmbio:</h3>
                <h4>Valor em Dólar vira Real ; Valor em Real vira Dólar</h4>
                <input type="number" value={this.state.valor} onChange={this.inputChange}/><br/><br/>
                <Moeda valor={this.state.valor} moeda="dollar" mudar={this.vChange}/><br/><br/>
                <Moeda valor={this.state.valor} moeda="real" mudar={this.vChange}/><br/><br/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)