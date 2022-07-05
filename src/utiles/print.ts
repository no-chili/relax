import { ElMessage } from "element-plus";

//这是封装的一个打印函数
export function printTable(table: HTMLElement) {
  const newwin = window.open(window.document.URL);
  if (newwin) {
    newwin.document.body.innerHTML = table.innerHTML;
    newwin.print();
    newwin.close();
  } else {
    ElMessage.error({
      message: "打印出错",
    });
  }
}
