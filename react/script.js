/*
function BemVindo(){
    return (
        <div>
            <h1>Seja Bem Vindo</h1>
            <h2>{props.nome} ({props.idade} anos)</h2>
        </div>
    )
}
*/

class BemVindo extends React.Component {
    render(){
        return 
            <div>
                <PostTopo autor={this.props.nome}/>
                <PostCorpo/>
                <PostRodape likes={this.props.likes} comentarios={this.props.comentarios} />

            </div>       
    }
}

class PostTopo extends React.Component {
    render(){
        return <div>{this.props.autor}</div>
    }
}

class PostCorpo extends React.Component {
    render(){
        return <div>...</div>
    }
}

class PostRodape extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.likes} curtidas</p>
                <p>{this.props.comentarios} comentarios</p>
                <hr/>
            </div>
        )
    }
}

let elemento = (
    <div>
        <Post nome="Bonieky" likes="100" comentarios="15"/>
        <Post nome="Paulo" likes="50" comentarios="340"/>
        <Post nome="Jessica" likes="250" comentarios="200"/>
        <Post nome="Outro Cara" likes="1000" comentarios="2"/>
    </div>
)

ReactDOM.render(
    elemento, 
    document.getElementById("app")
)