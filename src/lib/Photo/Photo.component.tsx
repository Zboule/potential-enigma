import * as React from 'react'
import './Photo.component.scss'

interface IState {
}

interface IProps {
    url: string
}

export class Photo extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <img src={this.props.url} ></img>
        )
    }
}
