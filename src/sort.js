/**
 * 基本排序算法
 * Created by wangpeng on 2017/8/11.
 */

class Sort {

    //从小到大
    static POSITIVE = "POSITIVE";
    //从大到小
    static REVERSE = "REVERSE";
    
    /**
     * 冒泡排序 时间复杂度为O(n^2)
     * @param array 需排序数组
     * @param direction 从小到大或从大到小 默认从小到大
     */
    static bubbleSort(array, direction = Sort.POSITIVE) {
        
        if (array.length < 2) {
            return;
        }
        
        for (let i = 1, iLen = array.length; i < iLen; i++) {
            //外层循环n - 1次
            for (let j = 0, jLen = array.length; j < jLen - i; j++) {
                //内层循环依次递减
                if (array[j] < array[j + 1]) {
                    //从大到小
                    if (direction === Sort.REVERSE) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                } else {
                    //从小到大
                    if (direction === Sort.POSITIVE) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
    }
    
    /**
     * 选择排序 时间复杂度为O(n^2)
     * @param array 需排序数组
     * @param direction 从小到大或从大到小 默认从小到大
     */
    static selectionSort(array, direction = Sort.POSITIVE) {
        
        if (array.length < 2) {
            return;
        }
    
        for (let i = 0, iLen = array.length; i < iLen - 1; i++) {
            //外层循环n - 1次
            for (let j = i + 1, jLen = array.length; j < jLen; j++) {
                //内层从外层后面开始循环
                if (array[i] < array[j]) {
                    //从大到小
                    if (direction === Sort.REVERSE) {
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                } else {
                    //从小到大
                    if (direction === Sort.POSITIVE) {
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
    }
}

export default Sort;