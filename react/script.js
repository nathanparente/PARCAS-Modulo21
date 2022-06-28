function BemVindo(){
    return (
        <div>
            <h1>Seja Bem Vindo</h1>
            <h2>{props.nome} ({props.idade} anos)</h2>
        </div>
    )
}

let elemento = (
    <div>
        <BemVindo nome="Nathan" idade="20"/>
        <hr/>
        <BemVindo nome="Bonieky" idade="99"/>
    </div>
)

ReactDOM.render(
    elemento, 
    document.getElementById("app")
)