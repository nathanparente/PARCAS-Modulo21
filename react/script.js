//let elemento = <h1 className="titulo">Olá Mundo</h1>

/*
let elemento = React.createElement(
    'h1',
    {className:'titulo'},
    'Olá Mundo 2.0',
);
*/

let elemento = <h1 className="titulo">Olá Mundo 3.0</h1>

ReactDOM.render(
    elemento,
    document.getElementById("app")
)