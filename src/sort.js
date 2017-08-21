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
    
    /**
     * 插入排序 时间复杂度为O(n^2) 排序小型数组性能更好
     * @param array 需排序数组
     * @param direction 从小到大或从大到小 默认从小到大
     */
    static insertionSort(array, direction = Sort.POSITIVE) {
        
        if (array.length < 2) {
            return;
        }
        
        for (let i = 1, iLen = array.length; i < iLen; i++) {
            //外层循环从第二个数开始
            for (let j = i; j > 0; j--) {
                //内层循环从外层循环当前位置往前
                if (array[j] < array[j - 1]) {
                    //从小到大
                    if (direction === Sort.POSITIVE) {
                        let temp = array[j - 1];
                        array[j - 1] = array[j];
                        array[j] = temp;
                    }
                } else {
                    //从大到小
                    if (direction === Sort.REVERSE) {
                        let temp = array[j - 1];
                        array[j - 1] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
    }
    
    /**
     * 归并排序 时间复杂度为O(nlogn) 性能更好
     * 先分后合，分治法的应用
     * @param array 需排序数组
     * @param direction 从小到大或从大到小 默认从小到大
     */
    static mergeSort(array, direction = Sort.POSITIVE) {
        
        let mergeSortRec = (array, direction) => {
            //合 从两个数组中依次取出第一个 始终将小的一个放入新数组中
            let merge = (left, right) => {
                let final = [];
                while (left.length && right.length) {
                    if (direction === Sort.POSITIVE) {
                        final.push(left[0] <= right[0] ? left.shift() : right.shift());
                    } else {
                        final.push(left[0] >= right[0] ? left.shift() : right.shift());
                    }
                }
                return final.concat(left.concat(right));
            };
            
            let length = array.length;
            if (length === 1) {
                return array;
            }
            
            //分
            let mid = Math.floor(length / 2),
                left = array.slice(0, mid),
                right = array.slice(mid, length);
            return merge(mergeSortRec(left, direction), mergeSortRec(right, direction));
        };
        
        return mergeSortRec(array, direction);
    }
    
    /**
     * 快速排序 平均状况下时间复杂度为O(nlogn)，最坏状况下时间复杂度为O(n^2)。通常比其他O(nlogn)算法更快。
     * 1、找基准 2、找左右数组 3、将左右数组和基准合并 4、对左右子数组重复上述操作
     * @param array 需排序数组
     * @param direction 从小到大或从大到小 默认从小到大
     */
    static quickSort(array, direction = Sort.POSITIVE) {
        //递归
        let quickSortRec = (array, direction) => {
            if (array.length <= 1) {
                return array;
            }
            let pivot = array[0],
                left = [],
                right = [];
            
            for (let i = 1, len = array.length; i < len; i++) {
                if (array[i] < pivot) {
                    if (direction !== Sort.REVERSE) {
                        left.push(array[i]);
                    } else {
                        right.push(array[i]);
                    }
                } else {
                    if (direction !== Sort.REVERSE) {
                        right.push(array[i]);
                    } else {
                        left.push(array[i]);
                    }
                }
            }
            return quickSortRec(left, direction).concat([pivot], quickSortRec(right, direction));
        };
        
        return quickSortRec(array, direction);
    }
}

export default Sort;
