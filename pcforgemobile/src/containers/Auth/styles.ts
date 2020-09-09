import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        opacity: 0.1
    },
    header: {
        color: '#fff',
        marginHorizontal: 20,
        marginTop: 100,
        marginBottom: 50
    },
    content: {
        flex: 1,
        display: 'flex',
        // justifyContent: 'center',
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
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    loginButtonText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    loginButton: {
        flex: 1,
        padding: 0,
        margin: 0,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: 3,
        height: 42,
    },
    loginGoogleButton: {
        marginLeft: 20,
        margin: 0,
        padding: 0,
        height: 50,
        width: 150
    },
    gLogo: {
        width: 16,
        height: 16
    },
    gLogoWrapper: {
        padding: 10,
        backgroundColor: '#fff'
    },
    signInGoogleButton: {
        alignSelf: 'stretch',
        backgroundColor: '#4285f4',
        padding: 1
    }
})

export default styles;
