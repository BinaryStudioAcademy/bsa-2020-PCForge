import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    content: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: 20,
    },
    inputItem: {
        marginBottom: 20,
    },
    input: {
        color: '#fff',
    },
    errorMessage: {
        color: '#ff5a5a',
        marginTop: 10
    },
    label: {
        color: '#fff'
    },
    loginButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'center',
    },
    loginButtonText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    loginButton: {
        padding: 0,
        margin: 0,
        alignSelf: 'stretch'
    }
})

export default styles;
