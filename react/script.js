class Post extends React.Component {
    render (){
        return (
            <div>
                <h4>{this.props.titulo}</h4>
                <p>{this.props.corpo}</p>
                <hr/>
            </div>
        )
    }
}


class Aviso extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[
                {id: 1, titulo: 'Título do Post 1', corpo: 'Corpo do Post 1'},
                {id: 2, titulo: 'Título do Post 2', corpo: 'Corpo do Post 2'},
                {id: 3, titulo: 'Título do Post 3', corpo: 'Corpo do Post 3'},
                {id: 4, titulo: 'Título do Post 4', corpo: 'Corpo do Post 4'},
                {id: 5, titulo: 'Título do Post 5', corpo: 'Corpo do Post 5'},

            ]
        }
    }

    render(){

        let lista = this.state.posts.map((item)=>{
            return (
                <Post key={item.id} titulo={item.titulo} corpo={item.corpo} />
            )
        })
        return(
            <div>
                {lista}
            </div>
        )
    }
}

let elemento = (
    <div>
        <Aviso/>
    </div>
)

ReactDOM.render(
    elemento, 
    document.getElementById("app")
)

/* TIPOS DE CONDICIONAIS INLINE 

*1

constructor(props){
        super(props)
        this.state = {
        msg: [1,2,3,4,5,6,7,8,9]
        }
    }

    render(){
        return(
            <div>
            {this.state.msg.length > 0 && 
                <h2>Você possui {this.state.msg.length} mensagens não lidas</h2>
            }
                
            </div>
        )
    }

*2 

class Aviso extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        logado: false 
        }
    }

    render(){
        return(
            <div>
                O usuário {this.state.logado ? '' : 'não'} está logado
            </div>
        )
    }
}

*/