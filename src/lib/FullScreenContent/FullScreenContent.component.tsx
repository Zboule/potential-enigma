import * as React from 'react'
import './FullScreenContent.component.scss'
import IconButton from '@material-ui/core/IconButton/IconButton'
import CloseIcon from '@material-ui/icons/Close';

interface IState {
}

interface IProps {
    onClose: () => void
}

export class FullScreenContent extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <div className="full-screen-content">
                <div className="close" onClick={() => { this.props.onClose() }}>
                    <IconButton aria-label="close">
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </div>
                {this.props.children}
            </div>
        )
    }
}
