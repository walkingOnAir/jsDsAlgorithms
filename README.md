# JavaScript数据结构与算法
学习数据结构与算法
## 栈
栈是一个后进先出(LIFO)的数据结构。JavaScript的内置对象Array实现了栈的push、pop等相关方法。
## 队列
队列是一个先进先出(FIFO)的数据结构。JavaScript事件循环中有一个事件队列，按照先进先出的规则来处理各种异步事件。
## 链表
链表是一个动态的数据结构，可以任意增删元素，按需扩容。
- 数组的存储有缺陷，增删元素时需要移动元素，效率较低。而链表在内存中的放置不是连续的，元素通过next属性指向下个元素，因此链表的增删只需更改next指向。
## 集合
集合是一种无序且唯一的数据结构。JavaScript中已经实现了集合类Set。
## 字典
字典是一种以键值对的形式存储唯一值的数据结构。JavaScript中已经实现了字典类Map。
- 一个对象通常都有自己的原型(prototype)，不过，通过map = Object.create(null)来创建一个没有原型的对象。
- 一个对象的键只能是字符串或者Symbols，而Map可以是任意值。
- Map具有size方法，可以获取键值对个数，对象不具备直接获取长度的方法。
## 散列表
散列表也是一种以键值对存储数据的数据结构，但是它的键是通过散列函数生成的位置或索引。散列表可以更快地访问某个值，其查找复杂度为O(1)，其他顺序数据结构如栈、队列、链表需要遍历，查找复杂度都为O(n)。
- 散列函数
  - 散列函数是一种从任何一种数据中创建小的数字“指纹”的方法。散列函数把消息或数据压缩成摘要，使得数据量变小，将数据的格式固定下来。
  - 散列函数构造方法：直接定址法、数字分析法、平方取中法、折叠法、随机数法、保留余数法等。
  - 保留余数法：取关键字被某个不大于散列表表长m的数p除后所得的余数为散列地址。p一般取素数或m。
  - 解决冲突：当多个键得到同样的散列地址时就会产生冲突，此时就需要解决冲突。
    - 分离链表法：散列表中存入一个链表，所有散列地址冲突的存入同一个列表。