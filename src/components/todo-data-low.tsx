import React, {Component} from 'react'

type TodoDataType = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    category: number,
    isFavorite: boolean
}

type Props = {
    todoData: TodoDataType[]
}

type State = {
    todoData: TodoDataType[]
}

class TodoDateLow extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            todoData: this.props.todoData
        }
    }

    componentWillUpdate() {
        console.log('componentWillUpdate!!!')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate!!!')
    }

    onFavorite = (id: number) => {
        const { todoData } = this.state;
        console.log("test", id)
        todoData.map((v, index) => {
            console.log('todo index', index)
            console.log('todo value', v)
            if (v.id === id){
                console.log('favorite!')
                // todoDataのjsonを書き換える
                todoData[index].isFavorite = true
                this.setState({ todoData })
                console.log('todoData', todoData)
                // if (v.isFavorite){
                //     v.isFavorite = false

                // } else if (!v.isFavorite){
                //     v.isFavorite = true
                //     console.log(v.isFavorite)
                // }
            }
        })
    };

    onUnFavorite = (id: number) => {
        const { todoData } = this.state;
        console.log("test", id)
        todoData.map((v, index) => {
            console.log('todo index', index)
            console.log('todo value', v)
            if (v.id === id){
                console.log('favorite!')
                // todoDataのjsonを書き換える
                todoData[index].isFavorite = false
                this.setState({ todoData })
                console.log('todoData', todoData)
                // if (v.isFavorite){
                //     v.isFavorite = false

                // } else if (!v.isFavorite){
                //     v.isFavorite = true
                //     console.log(v.isFavorite)
                // }
            }
        })
    };

    onDeleteLow = (id: number) => {
        const { todoData } = this.state;
        console.log("test", id)
        todoData.map((v, index) => {
            console.log('==================')
            console.log('todo value', v)
            if (v.id === id){
                todoData.splice(index, 1)
                this.setState({ todoData })
                console.log('todoData', todoData)
            }
        })
    };

    render() {
        const { todoData } = this.state;
        return(
            <>
            {this.props.todoData.map((item) =>
            {
                console.log('props',this.props)
                console.log('todoDate', todoData)
                return (<tr key={item.id}>
                    <td>{item.isFavorite && "★"} {item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.category}</td>
                    <td>
                        <button onClick={() => this.onFavorite(item.id)}> お気に入り </button><br />
                        <button onClick={() => this.onUnFavorite(item.id)}> お気に入り </button><br />
                        <button onClick={() => this.onDeleteLow(item.id)}> 削除 </button><br />
                    </td>
                    {console.log('id',item.id)}
                </tr>)
            }
            )}
            </>
        )
    }
}

export default TodoDateLow;