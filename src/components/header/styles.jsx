import {createUseStyles} from 'react-jss'
export const useStyles=createUseStyles({
    header:{
        backgroundColor: '#0066FF',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btn:{
        fontSize: 20,
        margin: 10,
        border: 'none',
        outline: 'none',
        borderRadius: 6,
        padding: 5,
        background: 'white',
        width: 130,
    }
})