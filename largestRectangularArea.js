/**
 * @dev 히스토그램내에서 가장 큰 면적을 리턴한다
 * @dev 히스토그램내의 모든 bar에 대해서 이 bar가 속하는 rectangular를 구할때는 이 bar가
 * 가장 작은 높이를 갖게 하는 구간을 찾으면 된다. 면적은 이 구간의 길이와 bar의 높이를 구하면 된다
 * stack에는 bar의 높이를 오름차순으로 갖게 index가 들어가는데 자기 자신보다 낮은 높이의 bar를 만난
 * index는 pop아웃 되고 남겨진 stack의 top이 leftbar, 현재 루프의 i값이 right bar가 되어 구간을
 * 정할 수 있다
 * @var leftbar bar왼쪽에서 제일 처음 bar보다 높이가 낮은 bar
 * @var rightbar bar오른쪽에서 제일 처음으로 bar보다 높이가 낮은 bar
 */
const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = [];
  let i = 0;
  let max_area = 0;
  let area_with_top, top, top_index;
  while (i < histogram.length) {
    if (
      stack.length === 0 ||
      histogram[stack[stack.length - 1]] <= histogram[i]
    ) {
      stack.push(i++);
    } else {
      top = stack.pop();
      area_with_top =
        histogram[top] *
        (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);

      if (area_with_top > max_area) {
        max_area = area_with_top;
      }
    }
  }

  // 스택에 값이 남겨져 있기 때문에 남아있는 bar들을 처리한다
  while (stack.length !== 0) {
    top = stack.pop();
    area_with_top =
      histogram[top] *
      (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
    if (area_with_top > max_area) {
      max_area = area_with_top;
    }
  }

  return max_area;
};

let histogram = [2, 1, 4, 5, 1, 3, 3];
let output = largestRectangularArea(histogram);
console.log(output); // --> 8

histogram = [6, 2, 5, 4, 5, 1, 6];
output = largestRectangularArea(histogram);
console.log(output); // --> 12
