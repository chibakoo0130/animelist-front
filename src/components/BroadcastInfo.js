import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

function BroadcastInfo(props) {
    const { index, tVStation, date } = props;

    return (
        <List>
            {(tVStation === undefined || tVStation === "未定")
            && (date === undefined || date === "未定")
            ? (<ListItemText primary="放送詳細未定"></ListItemText>)
            : <ListItemText key={index} primary={tVStation} secondary={date}></ListItemText>}
        </List>
    );
}

export default BroadcastInfo;