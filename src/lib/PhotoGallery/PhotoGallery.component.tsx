import * as React from 'react'
import './PhotoGallery.component.scss'

interface IState {
}

interface IProps {
    onScrollEnd?: () => void
}

export class PhotoGallery extends React.Component<IProps, IState> {

    handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.target as HTMLDivElement
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.props.onScrollEnd!()
        }
    }


    public render(): JSX.Element {
        console.log(this.props.children)
        return (
            <div className="photo-gallery" onScroll={this.props.onScrollEnd ? this.handleScroll : undefined}>
                {this.props.children || "Empty gallery" }
            </div>
        )
    }
}
