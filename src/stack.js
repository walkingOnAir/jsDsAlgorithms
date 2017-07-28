/**
 * 栈
 * Created by wangpeng on 2017/7/27.
 */

class Stack {
    
    _items = [];
    
    //入栈
    push(val) {
        this._items.push(val);
    }
    
    //出栈
    pop() {
        return this._items.pop();
    }
    
    //查看栈顶元素
    peek() {
        return this._items[this._items.length - 1];
    }
    
    //栈是否为空
    isEmpty() {
        return this._items.length === 0;
    }
    
    //清空栈
    clear() {
        this._items = [];
    }
    
    //栈大小
    size() {
        return this._items.length;
    }
    
    toString() {
        return this._items.toString();
    }
}

export default Stack;