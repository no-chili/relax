//这是封装的一个打印函数
export function printTable(table: HTMLElement) {
  const windowInnerHTML = window.document.body.innerHTML;
  window.document.body.innerHTML = table.innerHTML;
  window.print();
  window.document.body.innerHTML = windowInnerHTML;
}
