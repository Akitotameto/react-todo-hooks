import React, { Component } from 'react';
import Header from  '../components/header'
import Form from  '../components/form'

type Props = {
    history: any
}

type State = {}

class Set extends Component<Props, State> {
    render() {
        return(
            <div>
                <Header history={this.props.history} index={2} />
                <h1>登録画面</h1>
                <Form />
            </div>
        )
    }
}

export default Set;