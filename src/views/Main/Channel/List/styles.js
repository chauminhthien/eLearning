import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  bgHome: {
    flex: 1,
    width: '100%',
    height: '100%',
    
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  header: {
    flex: 1,
    width: '100%',
    flexWrap:'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  btnBack: {
    width: 50,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  content: {
    flex: 8,
    width: '100%',
  },
  itemChannel: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 5,
    height: 'auto',
    minHeight: 50
  },
  input: {
    height: 50, 
    color: '#000',
    width:"100%",
    borderColor: '#000', 
    borderWidth: 1,
    borderRadius:5,
    padding:10,
    backgroundColor:"transparent",
    marginBottom:20,
    fontSize:20,
    borderRadius: 30,
    paddingLeft: 20
  }
})