import React from 'react';
import './App.scss';
import { FlickrSearch, FlickrPhotoInfo } from './lib/FlickrSearch/FlickrSearch.component';
import { FullScreenContent } from './lib/FullScreenContent/FullScreenContent.component';
import { OpenCVEffect } from './lib/OpenCVEffect/OpenCVEffect.component';


interface IState {
  fullScreenPhoto: FlickrPhotoInfo | undefined
}

interface IProps {

}

export class App extends React.Component<IProps, IState> {

  state: IState = {
    fullScreenPhoto: undefined
  }


  private onClickPhoto = (image: FlickrPhotoInfo) => {
    this.setState({ fullScreenPhoto: image })
  }

  private onClose = () => {
    this.setState({ fullScreenPhoto: undefined })
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <FlickrSearch onClickPhoto={this.onClickPhoto}></FlickrSearch>
        {
          this.state.fullScreenPhoto !== undefined &&
          <FullScreenContent onClose={this.onClose}>
            <OpenCVEffect photo={this.state.fullScreenPhoto}></OpenCVEffect>
          </FullScreenContent>
        }
      </React.Fragment>
    )
  }
}
