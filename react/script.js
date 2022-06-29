class Temperatura extends React.Component {
    render(){
        let temp = parseFloat(this.props.temp);
        if(this.props.escala == "f"){
            temp = (temp * 9 / 5) + 32
        }


        return(
            <div>
                Temperatura em {this.props.escala.toUpperCase()} ----
                {temp}
                {this.props.escala == 'c' ? '°C' : '°F'}
            </div>
        )
    }
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            temperatura:20
        }

        this.tChange = this.tChange.bind(this)
    }

    tChange(e){
        this.setState({temperatura:e.target.value})
    }

    render(){
        return(
            <div>
                <input type="number" value={this.state.temperatura} onChange={this.tChange} />
                <Temperatura temp={this.state.temperatura} escala="c"/>
                <Temperatura temp={this.state.temperatura} escala="f"/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)