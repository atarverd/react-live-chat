import {createUseStyles} from 'react-jss'
export const useStyles=createUseStyles({
    chatArea:{
        height: '80vh',
        oscrollverflowY: 'scroll',
    },
    chat:{
        marginLeft: '20%',
        marginRight: '20%',
    },
    msgInput:{

    },
    msg:{
        borderRadius:50,
        flexDirection: 'column',
        minWidth:150,
        alignItems:props=>props?'flex-end':'flex-start',
        display: 'flex',
    },

    msgContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    msgText:{
        backgroundColor:props=>props?'#0066FF':'#F6F6F7',
        color:props=>props?'white':'black',
        padding:10,
        borderRadius: 15,
        minWidth: 100,
        marginTop: 50,
        wordBreak: 'break-word'
        

    },
    msgImg:{
        height:64,
        borderRadius:50
    },
    me:{
        justifyContent: 'flex-end'
    },
    inputDiv:{
        bottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:20,
        flexWrap:'wrap'
    },
    time:{
        color:'gray',
        fontSize:15,
    },
    input:{
        width: 350,
        minHeight: 80,
        padding: 10,
        borderRadius: 15,
        border: 'none',
        backgroundColor: '#F6F6F7',
        fontSize: 'larger',
        resize:'none',
    },
    btn:{
        backgroundColor: '#0066FF',
        color: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 24,
        marginLeft: 10,
        borderRadius: 7,
        paddingLeft: 25,
        paddingRight: 25,
        height: 45,
        fontWeight: 'bold',
        marginBottom:20,

    },
})