(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。")]),t._v(" "),a("p",[t._v("如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。")]),t._v(" "),a("p",[t._v("假设环境不允许存储 64 位整数（有符号或无符号）。")]),t._v(" "),a("p",[a("font",{attrs:{color:"#FF000"}},[t._v("题目难度: ★★, 中等")])],1),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：x = 123\n输出\n")])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：x = -123\n输出：-321\n")])])]),a("p",[t._v("示例 3：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：x = 120\n输出：21\n")])])]),a("p",[t._v("示例 4：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：x = 0\n输出：0\n")])])]),a("p"),t._v(" "),a("p",[t._v("提示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-2^31 <= x <= 2^31 - 1\n")])])]),a("h3",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("blockquote",[a("p",[t._v("tips: 以下代码是使用Go代码实现的不同解法, 文章最后可以看C++、C、Java、Python实现")])]),t._v(" "),a("p",[t._v("解题思路:")]),t._v(" "),a("p",[t._v("以12345为例，先拿到5，再拿到4，之后是3，2，1，我们按这样的顺序就可以反向拼接处一个数字了，也就能达到 反转 的效果。\n怎么拿末尾数字呢？好办，用取模运算就可以了")]),t._v(" "),a("p",[t._v("1)、将12345 % 10 得到5，之后将12345 / 10"),a("br"),t._v("\n2)、将1234 % 10 得到4，再将1234 / 10"),a("br"),t._v("\n3)、将123 % 10 得到3，再将123 / 10"),a("br"),t._v("\n4)、将12 % 10 得到2，再将12 / 10"),a("br"),t._v("\n5)、将1 % 10 得到1，再将1 / 10")]),t._v(" "),a("p",[t._v("important, 这题整体还是很简单的， 只需要注意几个坑就行了, "),a("font",{attrs:{color:"#FF000"}},[t._v("一个是负数， 一个是可能会溢出")]),t._v("， 比如原数字1147483649， 翻转后9463847411就会溢出(最大的32位整数2147483647)")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func reverse(x int) ( num int) {\n    for x != 0 {\n        num = num*10 + x%10\n        x = x / 10\n    }\n    // 使用 math 包中定义好的最大最小值\n    if num > math.MaxInt32 || num < math.MinInt32 {\n        return 0\n    }\n    return\n}\n")])])]),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/d2e13e0c-867f-4777-b621-86390d450961.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"其他语言实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他语言实现"}},[t._v("#")]),t._v(" 其他语言实现")]),t._v(" "),a("p",[t._v("1、Java")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Solution {\n    public int reverse(int x) {\n        int res = 0;\n        while(x!=0) {\n            //每次取末尾数字\n            int tmp = x%10;\n            //判断是否 大于 最大32位整数\n            if (res>214748364 || (res==214748364 && tmp>7)) {\n                return 0;\n            }\n            //判断是否 小于 最小32位整数\n            if (res<-214748364 || (res==-214748364 && tmp<-8)) {\n                return 0;\n            }\n            res = res*10 + tmp;\n            x /= 10;\n        }\n        return res;\n    }\n}     \n")])])]),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/c98a893d-6c9b-4a9f-bf2e-00c462cb0372.png",alt:""}})]),t._v(" "),a("p",[t._v("2、Python3")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('class Solution:\n    def reverse(self, x: int) -> int:\n        if -10 < x < 10:\n            return x\n        str_x = str(x)\n        if str_x[0] != "-":\n            str_x = str_x[::-1]\n            x = int(str_x)\n        else:\n            str_x = str_x[:0:-1]\n            x = int(str_x)\n            x = -x\n        return x if -2147483648 < x < 2147483647 else 0\n')])])]),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/46af3a22-476e-4e0a-9e32-bcebd70dbb5e.png",alt:""}})]),t._v(" "),a("p",[t._v("3、C")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("int reverse(int x){\n    int out=0;\n    while(x!=0){\n        if((out>214748364)||(out<-214748364)) return 0;\n        out=out*10+x%10;\n        x=x/10;\n    }\n\n    return out;\n}\n")])])]),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/a8dc7ac3-e50b-4916-aece-c64daf0b26fa.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"几种语言运行效果对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种语言运行效果对比"}},[t._v("#")]),t._v(" 几种语言运行效果对比")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/b1e748ab-2818-4381-85c9-2300b5de9900.png",alt:""}})]),t._v(" "),a("p",[t._v("也欢迎关注我的公众号: "),a("code",[t._v("漫步coding")]),t._v("。 一起交流, 在coding的世界里漫步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.xiaozhuanlan.com/uploads/photo/2022/5cb0c91e-fd83-4a04-8df6-65fb602b3834.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);