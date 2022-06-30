class Light extends React.Component {
    render(){
        const turnOn = () => {
            document.getElementById('1').classList.remove("red")
            document.getElementById('3').classList.add("green")
        }

        const turnOff = () => {
            document.getElementById('3').classList.remove("green")
            let yesYellow = document.getElementById('2').classList.add("yellow")
            if(yesYellow == yesYellow){
                setTimeout(() => {
                    document.getElementById('2').classList.remove("yellow")
                    document.getElementById('1').classList.add("red")
                }, 1800)
            }
        }
        return(
            <div className="background">
                <div className="semaforo">
                    <div id='1' className="luz-semaforo"></div>
                    <br/>
                    <div id='2' className="luz-semaforo"></div>
                    <br/>
                    <div id='3' className="luz-semaforo"></div>
                    <br/>
                </div>
                <div className="area-botao">
                    <button onClick={turnOn}>Abrir Sinal</button>
                    <button onClick={turnOff}>Fechar Sinal</button>
                </div>
            </div>
        )
    }
}





class App extends React.Component {

    render(){
        return(
            <Light/>
        )
    }
}
ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)