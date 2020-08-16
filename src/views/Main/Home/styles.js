import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  bgHome: {
    flex: 1,
    width: '100%',
    height: '100%',
    // flexWrap:'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listFeature: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap'
  },

  block:{
    // flex: 2,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 25,
    margin: 5,
    fontFamily: 'Roboto-Black',
  }
})