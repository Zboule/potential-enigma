import * as React from 'react'
import './Photo.component.scss'

interface IState {
}

interface IProps {
    url: string
    onClick?: () => void
    onLoad?: () => void
    alt: string
    id?: string
    title: string
}

export class Photo extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (

            <div className={"card"} onClick={() => { this.props.onClick && this.props.onClick() }}>

                <div className={"img-container"}>
                    <img
                        crossOrigin="anonymous"
                        id={this.props.id}
                        src={this.props.url}
                        alt={this.props.alt}
                        onLoad={() => {
                            this.props.onLoad && this.props.onLoad()
                        }}
                    >
                    </img>
                </div>


                <div className="title">{this.props.title}</div>
            </div>

        )
    }
}
