import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box: {
    	alignItems: 'center',
    	justifyContent: 'center',
    	padding: 24,
    	backgroundColor: '#DDDDDD',
		margin: 0
    },
    paragraph: {
    	margin: 10,
    	fontSize: 15,
    	fontWeight: 'bold',
    	textAlign: 'center',
    	color: 'black'
    },
    img: {
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: 15
    },
    input:{
      	margin: 10,
    	padding: 10,
      	borderWidth: 2,
      	borderColor: '#FDAA40',
		backgroundColor: 'white',
      	height: 45,
      	fontSize: 17
    },
    btn:{
    	alignItems: 'center',
    	padding: 10,
		margin: 10,
		height: 45,
		backgroundColor: '#FDAA40',
		borderRadius: 10
    },
	tbtn:{
    	alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontSize: 15,
    	fontWeight: 'bold',
    	textAlign: 'center',
    }

  })

export { styles }