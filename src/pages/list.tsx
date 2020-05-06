import React, { Component } from 'react'
import Header from  '../components/header'
import TodoDateLow from  '../components/todo-data-low'

type TodoDataType = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    category: number,
    isFavorite: boolean
}

type Props = {
    history: any
}

type State = {
    todoData: TodoDataType[] | null
}

class List extends Component<Props, State> {
        constructor(props: Props) {
        super(props)

        this.state = {
            todoData: null
        }
    }


    fetchTodoData = () => {
        const todoData: TodoDataType[] = [
            {
                id: 1,
                title: 'タイトル1',
                content: '内容1内容1内容1内容1内容1内容1内容1',
                createdAt: '2020-05-04',
                category: 1,
                isFavorite: false,
            },
            {
                id: 2,
                title: 'タイトル2',
                content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
                createdAt: '2020-05-04',
                category: 2,
                isFavorite: true,
            },
            {
                id: 3,
                title: 'タイトル3',
                content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3',
                createdAt: '2020-05-04',
                category: 1,
                isFavorite: false,
            },
        ]

        setTimeout(() => this.setState({ todoData }), 3000)
    }

    componentWillMount() {
        console.log('componentWillMount!!!')
    }

    componentDidMount() {
        this.fetchTodoData()
        console.log('componentDidMount!!!')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!!!')
    }

    render() {
        const { history } = this.props;
        const { todoData } = this.state;

        return(
            <div>
                <Header history={history} index={1}/>
                <div className='contents-1'>
                    <h1>Todo List</h1>
                </div>
                <table className='table-1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タイトル</th>
                            <th>内容</th>
                            <th>日時</th>
                            <th>カテゴリ</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!todoData ? <TodoDateLow todoData={todoData}/> : "読み込み中..." }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;