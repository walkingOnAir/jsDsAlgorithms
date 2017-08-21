/**
 * 搜索算法
 * Created by wangpeng on 2017/8/21.
 */
import Sort from "./sort";

class Search {
    
    /**
     * 二分搜索算法 从一组有序数组中查找某一特定元素的搜索算法
     * 时间复杂度O(log(n))
     * @param array 数组
     * @param item 匹配项
     */
    static binarySearch(array, item) {
        //将数组排序
        let arr = Sort.quickSort(array);
        let low = 0,
            high = arr.length - 1,
            mid, ele;
        
        while(low <= high) {
            mid = Math.floor((low + high) / 2);
            ele = arr[mid];
            if (ele < item) {
                low = mid + 1;
            } else if (ele > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

export default Search;