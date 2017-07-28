/**
 * 链表
 * Created by wangpeng on 2017/7/27.
 */

class LinkedList {
    
    head = null;
    length = 0;
    
    //向链表中增加一个元素
    append(ele) {
        const node = new Node(ele);
        let currentNode;
        //链表为null，将head直接指向新元素
        if (this.head === null) {
            this.head = node;
        } else {
            //链表不为空
            currentNode = this.head;
            //遍历找到最后一个节点
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            //将最后一个节点指向新元素
            currentNode.next = node;
        }
        //更新链表长度
        this.length++;
    }
    
    //删除指定位置元素
    removeAt(pos) {
        let currentNode = this.head,
            preNode = null;
        if (this.head === null) {
            return null;
        }
        if (pos < 0) {
            return null;
        }
        if (pos >= length) {
            return null;
        }
        if (pos === 0) {
            this.head = currentNode.next;
        } else {
            while (pos > 0) {
                preNode = currentNode;
                currentNode = currentNode.next;
                pos--;
            }
            preNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.ele;
    }
    
    //从指定位置插入元素
    insert(pos, ele) {
        let node = new Node(ele),
            currentNode = this.head,
            preNode;
        if (pos < 0) {
            return false;
        }
        if (pos >= length) {
            return false;
        }
        if (pos === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (pos > 0) {
                preNode = currentNode;
                currentNode = currentNode.next;
                pos--;
            }
            preNode.next = node;
            node.next = currentNode;
        }
        this.length++;
        return true;
    }
    
    //返回指定元素的位置
    indexOf(ele) {
        let currentNode = this.head,
            index = 0;
        while (currentNode) {
            if (ele === currentNode.ele) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    }
    
    //获取链表头
    getHead() {
        return this.head;
    }
    
    size() {
        return this.length;
    }
    
    toString() {
        let currentNode = this.head,
            str = "";
        while (currentNode) {
            str += currentNode.ele + (currentNode.next ? "," : "");
            currentNode = currentNode.next;
        }
        return str;
    }

}

//链表节点
class Node {
    
    constructor(ele) {
        this.ele = ele;
        this.next = null;
    }
}

export default LinkedList;
