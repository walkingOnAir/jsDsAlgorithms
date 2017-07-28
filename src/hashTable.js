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
            do {
                if (currentNode.ele.key === key) {
                    return currentNode.ele.value;
                }
            } while (currentNode.next);
        }
        return undefined;
    }
    
    remove(key) {
        this._table[loseHashCode(key)] = undefined;
    }
}



export default HashTable;
