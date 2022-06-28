function mostrarHora(){
    let elemento = (
        <div>
            <h1>Bom dia</h1>
            <h3>Agora são: {new Date().toLocaleDateString()} </h3>
        </div>
    )
    
    ReactDOM.render(
        elemento,document.getElementById("app")
    )
}

setInterval(mostrarHora, 1000)