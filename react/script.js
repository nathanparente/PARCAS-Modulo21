
class App extends React.Component {

    render(){
        return(
            <ToDoList/>
        )
    }
}
ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)