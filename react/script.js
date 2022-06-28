let nome = 'Antonio'
let sobrenome = 'Lacerda'

let titulo = <h2>{nome}</h2>

let elemento = {
    <div>
        {titulo}
        <p>{sobrenome}</p>
        <small>Seja Bem Vindo</small>
    </div>
}

ReactDOM.render(
    elemento,
    document.getElementById("app")
)