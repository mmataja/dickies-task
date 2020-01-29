import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  card: {
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4)
  },

  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },

  textFieldMargin: {
    marginBottom: theme.spacing(2),
  },

  formItems: {
    display: 'flex',
    flexDirection: 'column',
  },

  marginTop3: {
    marginTop: theme.spacing(3),
  },

  gridContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default styles;