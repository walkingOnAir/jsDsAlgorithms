/**
 * 队列
 * Created by wangpeng on 2017/7/27.
 */

let _items = [];

class Queue {

    //入队
    enQueue(val) {
        _items.push(val);
    }
    
    //出队
    deQueue() {
        return _items.shift();
    }
    
    //查看队列第一个元素
    front() {
        return _items[0];
    }
    
    //查看队列是否为空
    isEmpty() {
        return _items.length === 0;
    }
    
    //清空队列
    clear() {
        _items = [];
    }
    
    //获取队列长度
    size() {
        return _items.length;
    }
    
    toString() {
        return _items.toString();
    }
}

export default Queue;