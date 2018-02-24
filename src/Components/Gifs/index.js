import React from "react";
import {TextField} from 'material-ui';
import {orange500, blue500} from 'material-ui/styles/colors';
import GifList from '../GifList';
import GifModal from '../GifModal';
import axios from "axios"


const style = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
    input: {
        height: 50,
        width: 300,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    }
};

class Gifs extends React.Component {
    constructor() {
        super();

        this._handleChange = this._handleChange.bind(this);
        this.state = {
            gifs: [],
            selectedGif: null,
            isOpen: false
        }
    }

    _handleChange = event => {
        axios
            .get(
                `http://api.giphy.com/v1/gifs/search?q=${event.target.value.replace(/\s/g, '+')}&api_key=4hGnekcdvxgi5WOrILbtMZC3p0oXEv5h`
            )
            .then(res => {
                this.setState({gifs: res.data.data});
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    openModal = gif => {
        this.setState({
            isOpen: true,
            selectedGif: gif
        });
    }

    closeModal = () => {
        this.setState({
            isOpen: false,
            selectedGif: null
        });
    }

    render() {
        return (
            <div style={style.content}>
                <div style={style.input}>
                    <TextField
                        fullWidth
                        name={"keywords"}
                        floatingLabelText="Enter keywords"
                        floatingLabelStyle={style.floatingLabelStyle}
                        floatingLabelFocusStyle={style.floatingLabelFocusStyle}
                        onChange={this._handleChange}
                        label="Default"/>
                </div>
                <GifList gifs={this.state.gifs} onGifSelect={selectedGif => this.openModal(selectedGif)}/>
                <GifModal isOpen={this.state.isOpen}
                          selectedGif={this.state.selectedGif}
                          onRequestClose={() => this.closeModal()}/>
            </div>
        );
    }
}

export default Gifs;