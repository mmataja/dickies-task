import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  success: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    backgroundColor: 'rgb(237, 247, 237)',
    color: 'rgb(30, 70, 32)',
    height: '100px',
    width: '300px',
    fontSize: '32px',
    padding: theme.spacing(1),

  },

  error: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    backgroundColor: 'rgb(253, 236, 234)',
    color: 'rgb(97, 26, 21)',
    height: '100px',
    width: '300px',
    fontSize: '32px',
    padding: theme.spacing(1),
  }
}));

export default styles;
