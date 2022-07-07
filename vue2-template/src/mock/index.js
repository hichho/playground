import Mock from 'mockjs'

const mockExample = () => {
  const newList = []
  for (let i = 0; i < 10; i++) {
    const newNewsObject = {
      title: 'aaaa', //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: 'bbbbb',
      createdTime: 'ccccc'
    }
    newList.push(newNewsObject)
  }

  return newList
}

Mock.mock(RegExp('/app/system/download' + '.*'), 'get', mockExample)
export default Mock
