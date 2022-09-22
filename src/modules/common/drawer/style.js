import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    wrapperDrawer: {
        '& button': {
            background: 'transparent',
            minWidth: 'unset',
            padding: '0',
            '&:hover' : {
                background: 'transparent',
            },
        },
    },
    
    sidebar: {
        width: '70%',
    },

    icon: {
        color: '#2C3136',
    },

    closeIcon: {
        position: 'absolute',
        right: '5px',
        top: '12px',
        cursor: 'pointer',
        zIndex: '1',
    },
}));

export default useStyles;
