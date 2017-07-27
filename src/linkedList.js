/**
 * 链表
 * Created by wangpeng on 2017/7/27.
 */

let head = null;
let length = 0;

class LinkedList {

    //向链表中增加一个元素
    append(ele) {
        const node = new Node(ele);
        let currentNode;
        //链表为null，将head直接指向新元素
        if (head === null) {
            head = node;
        } else {
            //链表不为空
            currentNode = head;
            //遍历找到最后一个节点
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            //将最后一个节点指向新元素
            currentNode.next = node;
        }
        //更新链表长度
        length++;
    }
    
    //删除指定位置元素
    removeAt(pos) {
        let currentNode = head,
            preNode = null;
        if (head === null) {
            return null;
        }
        if (pos < 0) {
            return null;
        }
        if (pos >= length) {
            return null;
        }
        if (pos === 0) {
            head = currentNode.next;
        } else {
            while (pos > 0) {
                preNode = currentNode;
                currentNode = currentNode.next;
                pos--;
            }
            preNode.next = currentNode.next;
        }
        length--;
        return currentNode.ele;
    }
    
    //从指定位置插入元素
    insert(pos, ele) {
        let node = new Node(ele),
            currentNode = head,
            preNode;
        if (pos < 0) {
            return false;
        }
        if (pos >= length) {
            return false;
        }
        if (pos === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (pos > 0) {
                preNode = currentNode;
                currentNode = currentNode.next;
                pos--;
            }
            preNode.next = node;
            node.next = currentNode;
        }
        length++;
        return true;
    }
    
    //返回指定元素的位置
    indexOf(ele) {
        let currentNode = head,
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
    
    size() {
        return length;
    }
    
    toString() {
        let currentNode = head,
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
