/**
 * 选择排序：每轮找出最小的元素，将其放在首位，接着缩小范围仍然找最小的元素...
 */
export function selectionSort(array) {
  const n = array.length;
  let minIndex = 0, min = 0, tmp = null;

  for(let i = 0; i < n - 1; i++) {
    minIndex = i;
    min = array[i];

    for(let j = i + 1; j < n; j++) {
      if(array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }

    tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }

  return array;
}
