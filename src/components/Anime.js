import React from 'react';
import PropTypes from 'prop-types';

import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import BroadcastInfo from './BroadcastInfo'

const styles = {
  // Cards
  card: {
    width: 330,
    marginTop: 10,
    marginBottom: 10,
  },
  empty: {
    width: 330,
    height: 0,
    margin: 0,
    padding: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
};

const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanelSummary: {
      content: {
        flexFlow: 'column',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        flexFlow: 'column',
      },
    },
  },
});

function Anime(props) {
  const { title, broadcastInfoList, classes } = props;
  console.log(props);


  switch (true) {
    case broadcastInfoList === undefined || broadcastInfoList.length === 0:
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              {title}
            </Typography>
            <Typography>
              放送詳細未定
            </Typography>
          </CardContent>
        </Card>
      );
    case broadcastInfoList.length > 3:
    // 放送情報リストが3つ以上の場合は表示が長くなってしまうためアコーディオンリスト（エクスパンションリスト）にする
      return (
        <MuiThemeProvider theme={theme}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="headline" component="h2">
                {title}
              </Typography>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  {broadcastInfoList.slice(0, 3).map((broadcastInfo, index) => (
                    <BroadcastInfo
                      key = {index}
                      tVStation = {broadcastInfo.tVStation}
                      date = {broadcastInfo.broadcastDate}
                    />
                  ))}
                  <Typography>他のテレビ局はここをクリック</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {broadcastInfoList.slice(3).map((broadcastInfo, index) => (
                    <BroadcastInfo
                      key = {index}
                      tVStation = {broadcastInfo.tVStation}
                      date = {broadcastInfo.broadcastDate}
                    />
                  ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
          </Card>
        </MuiThemeProvider>
      );
    default:
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              {title}
            </Typography>
            {broadcastInfoList.map((broadcastInfo, index) => (
              <BroadcastInfo
                key = {index}
                tVStation = {broadcastInfo.tVStation}
                date = {broadcastInfo.broadcastDate}
              />
            ))}
          </CardContent>
        </Card>
      );
    }
  }
Anime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Anime);