import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// AnimeList取得
import AnimeList from '../containers/AnimeList';

// スタイル
const styles = theme => ({
  titleImage: {
    width: '100%',
    maxWidth: 700,
  },
});

class Home extends React.Component {

  componentDidMount() {
    // 初期表示時にデータを取得
    this.props.actions.getAnimes();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  

  render() {

    // Material-ui関連
    const { classes } = this.props;

    return (
      <div>
        <img src="/images/logo_transparent.png" alt="WANIME" className={classes.titleImage}/>
        <AnimeList/>
      </div>
    );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(Home)
);