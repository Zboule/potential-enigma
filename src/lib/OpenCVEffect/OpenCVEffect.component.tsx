import * as React from 'react'
import './OpenCVEffect.component.scss'
import { FlickrPhoto } from '../FlickrPhoto/FlickrPhoto.component';
import { FlickrPhotoInfo } from '../FlickrSearch/FlickrSearch.component';

interface IState {
}

interface IProps {
    photo: FlickrPhotoInfo
}

export class OpenCVEffect extends React.Component<IProps, IState> {

    private applyTransform = () => {

        console.log("apply effect")
        const cv = (window as any).cv
        let src = cv.imread('full-screen-image');
        let dst = new cv.Mat();

        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
        cv.Canny(src, dst, 50, 100, 3, false);
        cv.imshow('canvasOutput', dst);
        src.delete();
        dst.delete();
    }

    public render(): JSX.Element {

        return (
            <div className="open-cv-effect">
                <FlickrPhoto
                    {...this.props.photo}
                    onLoad={this.applyTransform}
                    divId={"full-screen-image"}
                >
                </FlickrPhoto>
                <canvas id="canvasOutput"></canvas>
            </div>
        )
    }
}
