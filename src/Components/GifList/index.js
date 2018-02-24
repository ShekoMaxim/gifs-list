import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import GifItem from '../GifItem';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 900,
        overflowY: 'auto',
    },
};

const GifList = (props) => {


    return (
        <div style={styles.root}>
            <GridList
                cellHeight={180}
                cols={4}
                style={styles.gridList}
            >
                {props.gifs.map((image) => (
                    <GridTile
                        key={`grid-item-${image.id}`}
                    >
                        <GifItem key={image.id}
                                 gif={image}
                                 onGifSelect={props.onGifSelect} />
                    </GridTile>
                ))}
            </GridList>
        </div>
    );
};

export default GifList;