import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4)
  },

  formItems: {
    display: 'flex',
    flexDirection: 'column',
  },

  gridContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default styles;