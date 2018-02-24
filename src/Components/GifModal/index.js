import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


var styles = {
    dialogRoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0
    },
    dialogContent: {
        position: 'relative',
        width: '90%',
        maxWidth: 700
    },
    dialogBody: {
        paddingBottom: 0
    }
};

const GifModal = (props) => {
    if (!props.selectedGif) {
        return <div></div>;
    }

    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={() => props.onRequestClose()}
        />,
    ];

    return (
        <Dialog
            title={props.selectedGif.title}
            modal={false}
            autoScrollBodyContent={true}
            autoDetectWindowHeight={true}
            actions={actions}
            open={props.isOpen}
            contentStyle={ styles.dialogContent }
            bodyStyle={ styles.dialogBody }
            style={ styles.dialogRoot }
            repositionOnUpdate={ false }
            onRequestClose={() => props.onRequestClose()}
        >
            <img style={{width:'100%',height:'100%'}} src={ props.selectedGif.images.original.url } alt={props.selectedGif.title}/>
            <p><strong>Source URL:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
            <p><strong>Content rating:</strong> { props.selectedGif.rating }</p>
            <p><strong>Import date:</strong> { props.selectedGif.import_datetime }</p>
        </Dialog>

    );
};

export default GifModal;