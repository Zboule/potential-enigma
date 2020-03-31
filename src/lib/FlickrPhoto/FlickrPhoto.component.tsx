import * as React from 'react'
import './FlickrPhoto.component.scss'
import { Photo } from '../Photo/Photo.component'

interface IState {
}

interface IProps {
    farm: number,
    server: string,
    id: string,
    secret: string,
}

export class FlickrPhoto extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <Photo url={
                "https://farm" +
                this.props.farm +
                ".staticflickr.com/" +
                this.props.server +
                "/" +
                this.props.id +
                "_" +
                this.props.secret +
                ".jpg"
            } />
        )
    }
}
