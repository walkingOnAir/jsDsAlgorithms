/**
 * 二叉搜索树
 * Created by wangpeng on 2017/7/31.
 */
import Stack from "./stack";

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const _insertNode = (node, newNode) => {
    "use strict";
    //新节点key小于父节点key
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            _insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            _insertNode(node.right, newNode);
            
        }
    }
};

const _inOrderTraverseNode = (node, cb) => {
    "use strict";
    if (node !== null) {
        _inOrderTraverseNode(node.left, cb);
        cb(node.key);
        _inOrderTraverseNode(node.right, cb);
    }
};

const _preOrderTracerseNode = (node, cb) => {
    "use strict";
    if (node !== null) {
        cb(node.key);
        _preOrderTracerseNode(node.left, cb);
        _preOrderTracerseNode(node.right, cb);
    }
};

const _postOrderTracerseNode = (node, cb) => {
    "use strict";
    if (node !== null) {
        _postOrderTracerseNode(node.left, cb);
        _postOrderTracerseNode(node.right, cb);
        cb(node.key);
    }
};

class Tree {

    //根节点
    _root = null;
    
    //插入
    insert(key) {
        let node = new Node(key);
        if (this._root === null) {
            this._root = node;
        } else {
            //从根节点开始插入
            _insertNode(this._root, node);
        }
    }
    
    //递归中序遍历 左->根->右
    inOrderTraverse(cb) {
        _inOrderTraverseNode(this._root, cb);
    }
    
    /**
     * 非递归中序遍历
     * 从根节点开始，左移到树的尽头，向栈中push移动过程中的每个节点。
     * 从栈中pop出一个节点，并访问它。
     * 如果该节点有右节点就从右节点开始，重复第一步。
     * 如果该节点没有右节点就重复第二步。
     * @param cb
     */
    inOrderTraverseUnRec(cb) {
        if (this._root !== null) {
            let stack = new Stack(),
                currentNode = this._root;
            while (currentNode !== null || !stack.isEmpty()) {
                if (currentNode !== null) {
                    stack.push(currentNode);
                    currentNode = currentNode.left;
                } else {
                    currentNode = stack.pop();
                    cb(currentNode.key);
                    currentNode = currentNode.right;
                }
            }
        }
    }
   
    
    //递归先序遍历 根->左->右
    preOrderTraverse(cb) {
        _preOrderTracerseNode(this._root, cb)
    }
    
    /**
     * 非递归先序遍历
     * 从根节点开始，先访问当前节点，然后将当前节点的右、左节点依次push到栈中。
     * 从栈中pop出一个节点，重复第一步。
     * @param cb
     */
    preOrderTraverseUnRec(cb) {
        if (this._root !== null) {
            let currentNode = this._root,
                stack = new Stack();
            stack.push(currentNode);
            while (!stack.isEmpty()) {
                currentNode = stack.pop();
                if (cb) {
                    //访问当前节点
                    cb(currentNode.key);
                }
                //右节点入栈
                if (currentNode.right) {
                    stack.push(currentNode.right);
                }
                //左节点入栈
                if (currentNode.left) {
                    stack.push(currentNode.left);
                }
            }
        }
    }
    
    //递归后序遍历 左->右->根
    postOrderTracerse(cb) {
        _postOrderTracerseNode(this._root, cb);
    }
    
    /**
     * 非递归后序遍历
     * 需要两个栈，将先序遍历的访问操作改为入栈操作（另外一个栈），等全部入栈后出栈访问。
     * @param cb
     */
    postOrderTracerseUnRec(cb) {
        if (this._root !== null) {
            let currentNode = this._root,
                stack = new Stack(),
                newStack = new Stack();
            stack.push(currentNode);
            while (!stack.isEmpty()) {
                currentNode = stack.pop();
                //将先序遍历的访问操作改为入栈操作
                newStack.push(currentNode);
                //右节点入栈
                if (currentNode.right) {
                    stack.push(currentNode.right);
                }
                //左节点入栈
                if (currentNode.left) {
                    stack.push(currentNode.left);
                }
            }
            //等全部入栈后出栈访问
            while (!newStack.isEmpty()) {
                currentNode = newStack.pop();
                if (cb) {
                    cb(currentNode.key);
                }
            }
        }
    }
    
    //按照某种遍历方式查找所有值
    values(traverseFunc) {
        let keyList = [];
        if (traverseFunc) {
            this[traverseFunc]((key) => {
                keyList.push(key);
            });
        }
        return keyList;
    }
    
}

export default Tree;
