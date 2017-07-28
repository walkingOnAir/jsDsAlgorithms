/**
 * 队列
 * Created by wangpeng on 2017/7/27.
 */

class Queue {
    
    _items = [];
    
    //入队
    enQueue(val) {
        this._items.push(val);
    }
    
    //出队
    deQueue() {
        return this._items.shift();
    }
    
    //查看队列第一个元素
    front() {
        return this._items[0];
    }
    
    //查看队列是否为空
    isEmpty() {
        return this._items.length === 0;
    }
    
    //清空队列
    clear() {
        this._items = [];
    }
    
    //获取队列长度
    size() {
        return this._items.length;
    }
    
    toString() {
        return this._items.toString();
    }
}

export default Queue;