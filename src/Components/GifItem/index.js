import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
    return (
        <div className="gif-item" onClick={() => onGifSelect(gif)}>
            <img style={{width:'100%',height:'100%'}} src={gif.images.original.url} alt={gif.title} />
        </div>
    )
};

export default GifItem;