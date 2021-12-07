import React from 'react';
import {Text, View} from 'react-native';

const messages = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력하세요.',
};

function EmptySearchResult({type}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#9e9e9e', fontSize: 16}}>{messages[type]}</Text>
    </View>
  );
}

export default EmptySearchResult;
