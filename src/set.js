/**
 * 集合（无序且唯一）
 * Created by wangpeng on 2017/7/28.
 */

class Set {
    
    _items = {};

    //判断集合中是否存在指定元素
    has(val) {
        return this._items.hasOwnProperty(val);
    }
    
    //向集合中添加不存在的元素
    add(val) {
        if (!this.has(val)) {
            this._items[val] = val;
            return true;
        }
        return false;
    }
    
    //删除集合中存在的元素
    remove(val) {
        if (this.has(val)) {
            delete this._items[val];
        }
        return false;
    }
    
    size() {
        return Object.keys(this._items).length;
    }
    
    //获取所有值
    values() {
        return Object.keys(this._items);
    }
    
    //与另一个集合取并集
    union(otherSet) {
        let unionSet = new Set();
        let values = this.values();
        let oValues = otherSet.values();
        for (let i = 0, len = values.length; i < len; i++) {
            unionSet.add(values[i]);
        }
        for (let j = 0, oLen = oValues.length; j < oLen; j++) {
            unionSet.add(oValues[j]);
        }
        return unionSet;
    }
    
    //与另一个集合取交集
    intersection(otherSet) {
        let intersectionSet = new Set();
        let oValues = otherSet.values();
        for (let i = 0, len = oValues.length; i < len; i++) {
            if (this.has(oValues[i])) {
                intersectionSet.add(oValues[i]);
            }
        }
        return intersectionSet;
    }
    
    //与另一个集合取差集
    difference(otherSet) {
        let differenceSet = new Set();
        let values = this.values();
        for (let i = 0, len = values.length; i < len; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    
    //是否是另一个集合的子集
    subset(otherSet) {
        let values = this.values();
        if (this.size() > otherSet.size()) {
            return false;
        }
        for (let i = 0, len = values.length; i < len; i++) {
            if (!otherSet.has(values[i])) {
             return false;
            }
        }
        return true;
    }
}

export default Set;
