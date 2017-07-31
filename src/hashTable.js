/**
 * 散列表
 * Created by wangpeng on 2017/7/28.
 */

import LinkedList from "./linkedList";

const loseHashCode = (key) => {
    "use strict";
    let hash = 0,
        p = 37;
    for (let i = 0, len = key.length; i < len; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % p;
};

class ValuePair {
    
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class HashTable {

    _table = {};
    
    put(key, val) {
        let pos = loseHashCode(key);
        //不存在链表，新建一个
        if (this._table[pos] === undefined) {
            this._table[pos] = new LinkedList();
        }
        this._table[pos].append(new ValuePair(key, val));
    }
    
    get(key) {
        let pos = loseHashCode(key);
        if (this._table[pos] !== undefined) {
            let currentNode = this._table[pos].getHead();
            if (currentNode.ele.key === key) {
                return currentNode.ele.val;
            }
            while (currentNode.next) {
                if (currentNode.ele.key === key) {
                    return currentNode.ele.val;
                }
                currentNode = currentNode.next;
            }
        }
        return undefined;
    }
    
    remove(key) {
        let pos = loseHashCode(key);
        if (this._table[pos] !== undefined) {
            let currentNode = this._table[pos].getHead(),
                i = 0;
            do {
                if (currentNode.ele.key === key) {
                    this._table[pos].removeAt(i);
                    if (this._table[pos].isEmpty()) {
                        this._table[pos] = undefined;
                    }
                    return true;
                }
                currentNode = currentNode.next;
                i++;
            } while (currentNode.next);
        }
        return false;
    }
}



export default HashTable;
