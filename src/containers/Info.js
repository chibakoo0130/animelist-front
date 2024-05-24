import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// スタイル
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
  },
  textLeft: {
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
  },
});


class Info extends React.Component {

  render() {

    // Material-ui関連
    const { classes } = this.props;

    return (
      <div>
        <h2>このサイトについて</h2>
        <div className={classes.textLeft}>
        
          <Paper className={classes.root} elevation={1}>
            <Typography component="p">
              このサイトでは翌期アニメの放送情報が確認できます。
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

// Material-ui関連
Info.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Info);