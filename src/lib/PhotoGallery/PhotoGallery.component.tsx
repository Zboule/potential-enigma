import * as React from 'react'
import './PhotoGallery.component.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

interface IState {
}

interface IProps {
    onScrollEnd?: () => void
}

export class PhotoGallery extends React.Component<IProps, IState> {

    handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.target as HTMLDivElement
        if (element.scrollHeight - element.scrollTop <= element.clientHeight + 1) {
            this.props.onScrollEnd!()
        }
    }


    public render(): JSX.Element {
        return (
            <div className="photo-gallery" onScroll={this.props.onScrollEnd ? this.handleScroll : undefined}>
                
                {this.props.children || <div className="empty"><p>Start by searching something.</p></div>}
            </div>
        )
    }
}
