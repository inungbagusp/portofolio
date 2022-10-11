import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    wrapperDrawer: {
        '& .MuiButtonBase-root': {
            background: 'transparent',
            minWidth: 'unset',
            padding: '0',
            '&:hover' : {
                background: 'transparent',
            },
        },
    },
    
    sidebar: {
        width: '230px',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        padding: '56px 8px',
        gap: '8px',
        '& .burger-item': {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '28px',
            letterSpacing: '0.2px',
            color: '#838486',
            margin: '0',
        },
        '& .burger-item.active': {
            color: '#128FE1',
            fontWeight: '600',
        },
    },

    icon: {
        color: '#2C3136',
    },

    closeIcon: {
        position: 'absolute',
        left: '5px',
        top: '12px',
        cursor: 'pointer',
        zIndex: '1',
    },
}));

export default useStyles;
