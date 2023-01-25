import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  viewContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: '#525252',
  },
  description: {
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  dishImage: {
    height: 75,
    aspectRatio: 1,
  },
});
