/**
 * 图
 * Created by wangpeng on 2017/8/10.
 */
import Map from "./map";
import Queue from "./queue";

//初始化顶点颜色
const initialzeColor = (vertices) => {
    "use strict";
    let color = {};
    for (let i = 0, len = vertices.length; i < len; i++) {
        color[vertices[i]] = "white";
    }
    return color;
};

class Graph {

    //图的所有顶点列表
    _vertices = [];
    //每个顶点以及它相邻顶点列表
    _adjList = new Map();

    //添加顶点
    addVertex(v) {
        this._vertices.push(v);
        this._adjList.set(v, []);
    }
    
    //添加边
    addEdge(v, w) {
        this._adjList.get(v).push(w);
        this._adjList.get(w).push(v);
    }
    
    //获取顶点和相邻顶点组成的字典
    getAdjList() {
        return this._adjList.getItems();
    }
    
    /**
     * 广度优先遍历
     * @param v 遍历的开始节点
     * @param cb 访问函数
     */
    bfs(v, cb) {
        let color = initialzeColor(this._vertices),
            queue = new Queue();
        
        //入队
        queue.enQueue(v);
        color[v] = "black";
        
        while(!queue.isEmpty()) {
            //出队，获取相邻顶点
            let u = queue.deQueue(),
                neighbors = this._adjList.get(u);
            
            for (let i = 0, len = neighbors.length; i < len; i++) {
                //所有相邻顶点入队
                let w = neighbors[i];
                //白色顶点入队，防止重复遍历
                if (color[w] === "white") {
                    queue.enQueue(w);
                    color[w] = "black";
                }
            }
            
            if (cb) {
                //访问当前顶点
                cb(u);
            }
        }
    }
    
    /**
     * 深度优先遍历
     * @param v 遍历的开始节点
     * @param cb 访问函数
     */
    dfs(v, cb) {
        let color = initialzeColor(this._vertices);
        this._dfsVisit(v, color, cb);
    }
    
    _dfsVisit(u, color, cb) {
        if (cb) {
            cb(u);
        }
        let neighbors = this._adjList.get(u);
        color[u] = "black";
        for (let i = 0, len = neighbors.length; i < len; i++) {
            let w = neighbors[i];
            if (color[w] === "white") {
                this._dfsVisit(w, color, cb);
            }
        }
    }
}

export default Graph;