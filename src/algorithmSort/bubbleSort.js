/**
 * 冒泡排序：相邻元素两两比较，使最大的元素“冒泡”到数组最后。接着缩小比较范围，继续冒泡最大值。
 */
export function bubbleSort(array) {
  const n = array.length;
  let falg = false, tmp = null;

  for(let i = n - 1; i > 0; i--) {
    falg = false;
    for(let j = 0; j < i; j++) {
      if(array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    if(!falg) break;
  }

  return array;
}
