/**
 * 字典类
 * Created by wangpeng on 2017/7/28.
 */

class Map {

    _items = {};
    
    has(key) {
        return key in this._items;
    }
    
    set(key, val) {
        this._items[key] = val;
    }
    
    get(key) {
        return this._items[key];
    }
    
    remove(key) {
        if (this.has(key)) {
            delete this._items[key];
            return true;
        }
        return false;
    }
    
    values() {
        let values = [];
        for (let x in this._items) {
            values.push(this._items[x]);
        }
        return values;
    }
    
    getItems() {
        return this._items;
    }
}

export default Map;
