import { Random, mock } from "mockjs";

//一个mock的格式
// mock(path，type，template)
//具体请看mock官网
mock(/mock/, "get", () => {
  //定义返回的data
  return {
    title: Random.ctitle(),
  };
});
