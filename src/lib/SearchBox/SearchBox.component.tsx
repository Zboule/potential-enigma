import * as React from 'react'
import './SearchBox.component.scss'
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Input from '@material-ui/core/Input/Input';
import SearchIcon from '@material-ui/icons/Search';

interface IState {
    value: string
}

interface IProps {
    onSearch: (value: string) => void

}

export class SearchBox extends React.Component<IProps, IState> {

    state = {
        value: ""
    }

    private onChange = (event: any) => {
        this.setState({ value: event.target.value })
    }

    private onClick = () => {
        this.props.onSearch(this.state.value)
    }

    private keyPress = (e:any) => {
        if (e.keyCode === 13) {
            this.props.onSearch(this.state.value)
        }
    }

    public render(): JSX.Element {
        return (

            <Input
                className="search-input"
                id="outlined-size-normal"
                placeholder="Search"
                onChange={this.onChange}
                onKeyDown={this.keyPress}
                autoComplete="off"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.onClick}
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />





        )
    }
}
