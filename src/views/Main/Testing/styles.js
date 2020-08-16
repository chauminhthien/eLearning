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

  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#ff7c7c',
    fontWeight:"bold",
    fontSize: 25,
  },
  content: {
    flex: 7,
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
  back: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
    // borderWidth: 0
  }
})