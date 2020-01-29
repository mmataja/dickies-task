import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,

  headerItemsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonTextColor: {
    color: theme.palette.primary,
  },

  headerTitle: {
    textDecoration: 'none',
    color: 'white'
  },

  listButton: {
    color: 'white',
    marginRight: theme.spacing(4),
  },

  addButton: {
    backgroundColor: 'white',
    padding: theme.spacing(1),
  },

  textDecorationNone: {
    textDecoration: 'none',
  }

}));

export default styles;
