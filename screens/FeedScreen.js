import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

function FeedScreen(props) {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState('false');

  const onScrollToBottom = isBottom =>
    hidden !== isBottom && setHidden(isBottom);

  // console.log(JSON.stringify(logs, null, 2));

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrollToBottom={onScrollToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}
const styles = StyleSheet.create({
  block: {flex: 1},
});
export default FeedScreen;
