const Mock = require('mockjs')
const navList = require('./mock/navList.json')
const newsList = require('./mock/newsList.json')
const hotList = require('./mock/hotList.json')
Mock.mock('/api/getNavList', function (options) {
  return Mock.mock(navList)
})
Mock.mock('/api/deleteNavList', 'post', function (options) {
  let obj = JSON.parse(options.body)
  navList.data.channelList.hasChannelList.list = obj.hasChannelList;
  navList.data.channelList.noChannelList.list = obj.noChannelList;
  return Mock.mock(navList)
})
Mock.mock('/api/getNewsList', 'post', function (options) {
  let data = JSON.parse(options.body)
  let newsId = data.id
  let newsArr = []
  newsList.data.newsList.forEach((value, index, arr) => {
    if (value.type === newsId) {
      newsArr.push(value)
    }
  })
  let newsListTwo = {
    "state": 1,
    "data": {
      newsList: newsArr
    }
  }
  return Mock.mock(newsListTwo)
})
Mock.mock('/api/getHotList', function (options) {
  return Mock.mock(hotList)
})
Mock.mock('/api/searchNewsList', 'post', function (options) {
  let data = JSON.parse(options.body)
  let newsArr = [];
  let key = data.key;
  newsList.data.newsList.forEach((value, index, arr) => {
    if (value.title.match(key)) {
      let exchangeKey = '<highlight>' + key + '</highlight>'
      arr[index].title = arr[index].title.replace(key, exchangeKey)
      newsArr.push(arr[index])
    }
  })
  let newsListTwo = {
    "state": 1,
    "data": {
      newsList: newsArr
    }
  }
  return Mock.mock(newsListTwo)
})