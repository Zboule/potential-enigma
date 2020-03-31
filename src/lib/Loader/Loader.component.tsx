import * as React from 'react'
import './Loader.component.scss'
import Loader from 'react-loader-spinner'

interface IState {
}

interface IProps {

}

export class MyLoader extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <div className="loader">
              <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        )
    }
}
