(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{295:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("题目来源于 LeetCode 上第 2 号问题：两数相加。题目难度为 Medium，目前通过率为 33.9% 。")]),t._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("给出两个 "),a("strong",[t._v("非空")]),t._v(" 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 "),a("strong",[t._v("逆序")]),t._v(" 的方式存储的，并且它们的每个节点只能存储 "),a("strong",[t._v("一位")]),t._v(" 数字。")]),t._v(" "),a("p",[t._v("如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。")]),t._v(" "),a("p",[t._v("您可以假设除了数字 0 之外，这两个数都不会以 0 开头。")]),t._v(" "),a("p",[a("font",{attrs:{color:"#FF000"}},[t._v("题目难度: ★★, 中等")])],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/3e4c9739-0b0e-4b89-875f-e5b9faca4dc7.png",alt:""}})]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：l1 = [2,4,3], l2 = [5,6,4]\n输出：[7,0,8]\n解释：342 + 465 = 807.\n")])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：l1 = [0], l2 = [0]\n输出：[0]\n")])])]),a("p",[t._v("示例 3：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n输出：[8,9,9,9,0,0,0,1]\n")])])]),a("p",[t._v("提示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("每个链表中的节点数在范围 [1, 100] 内\n0 <= Node.val <= 9\n题目数据保证列表表示的数字不含前导零\n")])])]),a("h3",{attrs:{id:"题目解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目解析"}},[t._v("#")]),t._v(" 题目解析")]),t._v(" "),a("p",[t._v("设立一个表示进位的变量"),a("code",[t._v("carried")]),t._v("，建立一个新链表，把输入的两个链表从头往后同时处理，每两个相加，将结果加上"),a("code",[t._v("carried")]),t._v("后的值作为一个新节点到新链表后面。")]),t._v(" "),a("h3",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("blockquote",[a("p",[t._v("tips: 以下代码是使用Go代码实现的不同解法, 文章最后可以看C++、C、Java、Python实现")])]),t._v(" "),a("h4",{attrs:{id:"_1、循环遍历-进行求和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、循环遍历-进行求和"}},[t._v("#")]),t._v(" 1、循环遍历, 进行求和")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n * Definition for singly-linked list.\n * type ListNode struct {\n *     Val int\n *     Next *ListNode\n * }\n */\nfunc addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {\n    var carry int\n    resultList := &ListNode{}\n    current := resultList\n\n    for{\n        if l1 == nil && l2 == nil && carry == 0{\n            break\n        }\n\n        if l1 != nil{\n            carry += (*l1).Val\n            l1 = l1.Next\n        }\n\n        if l2 != nil{\n            carry += (*l2).Val\n            l2 = l2.Next\n        }\n\n        node := ListNode{}\n\n        if carry <= 9{\n            node = ListNode{\n                Val: carry,\n            }\n            carry = 0\n        }else{\n            node = ListNode{\n                Val: carry - 10,\n            }\n            carry = 1\n        }\n\n        current.Next = &node\n        current = &node\n    }\n\n    return resultList.Next\n}\n")])])]),a("p",[t._v("执行结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/55e0d4fa-b0ae-41f7-8839-088542975073.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_2、改进方法-如果l1、l2长度差别很大-就可以直接利用偏长链表后面的部分-避免重复new-node节点。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、改进方法-如果l1、l2长度差别很大-就可以直接利用偏长链表后面的部分-避免重复new-node节点。"}},[t._v("#")]),t._v(" 2、改进方法, "),a("font",{attrs:{color:"#FF000"}},[t._v("如果l1、l2长度差别很大, 就可以直接利用偏长链表后面的部分, 避免重复new Node节点")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {\n    var carry int\n    resultList := &ListNode{}\n    current := resultList\n\n    for{\n        node := ListNode{}\n        if l1 == nil && l2 == nil && carry == 0{\n            break\n        }\n\n        if l1 != nil{\n            if l2 == nil && carry == 0{\n                current.Next = l1\n                break\n            }else{\n                carry += (*l1).Val\n                l1 = l1.Next\n            }\n        }\n\n        if l2 != nil{\n            if l1 == nil && carry == 0{\n                current.Next = l2\n                break\n            }else{\n                carry += (*l2).Val\n                l2 = l2.Next\n            }\n        }\n\n        if carry <= 9{\n            node = ListNode{\n                Val: carry,\n            }\n            carry = 0\n        }else{\n            node = ListNode{\n                Val: carry - 10,\n            }\n            carry = 1\n        }\n\n        current.Next = &node\n        current = &node\n    }\n\n    return resultList.Next\n}\n")])])]),a("p",[t._v("执行结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/bd4b69d1-62b3-463f-b0ef-cc2680dd97a7.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_3、方法三利用递归方法对两个array进行求和-这里就不展开细讲了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、方法三利用递归方法对两个array进行求和-这里就不展开细讲了"}},[t._v("#")]),t._v(" 3、方法三利用递归方法对两个array进行求和, 这里就不展开细讲了")]),t._v(" "),a("h3",{attrs:{id:"其他语言版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他语言版本"}},[t._v("#")]),t._v(" 其他语言版本")]),t._v(" "),a("h4",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[t._v("#")]),t._v(" C++")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/// 时间复杂度: O(n)\n/// 空间复杂度: O(n)\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n\n        ListNode *p1 = l1, *p2 = l2;\n        ListNode *dummyHead = new ListNode(-1);\n        ListNode* cur = dummyHead;\n        int carried = 0;\n        while(p1 || p2 ){\n            int a = p1 ? p1->val : 0;\n            int b = p2 ? p2->val : 0;\n            cur->next = new ListNode((a + b + carried) % 10);\n            carried = (a + b + carried) / 10;\n\n            cur = cur->next;\n            p1 = p1 ? p1->next : NULL;\n            p2 = p2 ? p2->next : NULL;\n        }\n\n        cur->next = carried ? new ListNode(1) : NULL;\n        ListNode* ret = dummyHead->next;\n        delete dummyHead;\n        return ret;\n    }\n};\n\n")])])]),a("p",[a("strong",[t._v("执行结果")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/0aace835-6cd8-4f94-a54f-818a20ca73c3.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" dummyHead "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummyHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" carry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建新节点")]),t._v("\n            carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("carry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummyHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("执行结果")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/114dd9fa-efc0-43d3-9006-7e04686ee9ee.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("res\n        carry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" carry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("carry\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n                l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n                l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set value")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),t._v("\n                carry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n                carry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# creat new node")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" carry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head\n")])])]),a("p",[a("strong",[t._v("执行结果")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/79317851-5c28-499c-95b9-c5c3e9417385.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"几种语言运行效果对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种语言运行效果对比"}},[t._v("#")]),t._v(" 几种语言运行效果对比")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/73ca2ca7-ced4-4dff-80c9-bbaae1168e8b.png",alt:""}})]),t._v(" "),a("p",[t._v("也欢迎关注我的公众号: "),a("code",[t._v("漫步coding")]),t._v("。 一起交流, 在coding的世界里漫步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/5cb0c91e-fd83-4a04-8df6-65fb602b3834.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);