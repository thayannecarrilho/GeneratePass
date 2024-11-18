import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 40,
    width: '50%',
    borderRadius: 5,
    marginRight: 8,
    flexDirection: 'row',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  inputer: {
    width: '100%',
    textAlign: 'center',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#7a6541',
    height: 40,
    width: '45%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
