import React, { Component } from 'react'

type Props = {}

type State = {
    title: string,
    content: string,
    category: string
}

class Form extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            category: ''
        }
    }

    onChangeTitle = (value: State["title"]) => {
        this.setState({ title: value });
    }

    onChangeContent = (value: State["content"]) => {
        this.setState({ content: value });
    }

    onChangecategory = (value: State["category"]) => {
        this.setState({ category: value });
    }

    send = () => {
        const { title, content, category} = this.state
        console.log('テスト', title, content, category)
    }

    render() {
        const { title, content, category} = this.state

        return(
            <div>
                <label>タイトル</label><br />
                <input type="text" value={title} onChange={e => this.onChangeTitle(e.target.value)} /><br />

                <label>内容</label><br />
                <textarea  value={content} onChange={e => this.onChangeContent(e.target.value)}/><br />

                <label>カテゴリ</label><br />
                <input type="text" value={category} onChange={e => this.onChangecategory(e.target.value)}/><br />

                <button onClick={this.send}>送信</button>
            </div>
        )
    }
}

export default Form;