import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,

  headerItemsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },

  buttonTextColor: {
    color: theme.palette.primary,
  },

  listButton: {
    color: 'white',
    marginRight: theme.spacing(4),
  },

  addButton: {
    backgroundColor: 'white',
    padding: theme.spacing(1),
  }

}));

export default styles;
