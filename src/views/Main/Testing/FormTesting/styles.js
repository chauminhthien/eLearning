import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  bgPage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 8,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  viewWord: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  txtWord: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
  },
  btnBack: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 100
    // borderWidth: 0
  },
  urlInput:{
    height: 50, 
    color: '#fff',
    width:"100%",
    borderColor: '#fff', 
    borderWidth: 1,
    borderRadius:5,
    padding:10,
    backgroundColor:"transparent",
    marginBottom:20,
    fontSize:20,
    borderRadius: 30,
    paddingLeft: 20
  },
})