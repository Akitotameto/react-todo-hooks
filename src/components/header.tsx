import React, {Component} from 'react';

type Props = {
    history: any
    index: number
}

type State = {}

class Header extends Component<Props, State> {
    pageList = () => {
        this.props.history.push('/')
    }

    pageSet = () => {
        this.props.history.push('/set')
    }

    render() {
        return(
            <div>
                <button onClick={this.pageList}> List {this.props.index === 1 && `(avtive)`} </button>
                <button onClick={this.pageSet}> Set {this.props.index === 2 && `(avtive)`} </button>
            </div>
        )
    }
}

export default Header;