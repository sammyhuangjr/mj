var config = [
    //关卡一
    {
        title:'BlaBlaBar奈雪酒屋',                                                            //关卡标题
        tip:"夜晚开启酒吧模式，多款精酿可供畅饮，痛快喝酒交个朋友。",                         //钻石配置
        task:{                                                                               //任务
            name:"好奇",
            desc:"点亮需要你给出的好奇；现在抬起头，用好奇的目光看此刻周围的事物吧！！",
            time:3
        },
        choose:['好奇','null','null'],                                                       //点亮选择
        next:[                                                                               //下一关选择
            '点亮奈雪茶生活','null'
        ],
        couponFont:"喝酒送",
        couponName:"玉米片券",
        couponTip:"谢谢你用好奇点亮梦工厂",
        couponId:1
    },
    //关卡二
    {
        title:'奈雪茶生活',                                                                     //关卡标题
        tip:"严选名优茶礼盒和冲泡茶具，将喝茶的仪式感融入日常。",                                      //钻石配置
        task:null,
        choose:['null','null'],                                                              //点亮选择
        next:[                                                                               //下一关提示
            '点亮特调茶研室'
        ],
        couponFont:"享受茶礼盒或茶具",
        couponName:"8.5折",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28266
    },
    //关卡三
    {
        title:'奈雪茶研室',                                                                     //关卡标题
        tip:"低卡糖的气泡茶，体验霸气鲜果茶与气泡的口感碰撞。",                                      //钻石配置
        task:null,
        choose:['null'],                                                                        //点亮选择
        next:[],                                                                               //下一关提示
        couponFont:"享受特调饮品 ",
        couponName:"立减5元",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28270
    },
    //关卡四
    {
        title:'奈雪的茶',                                                                     //关卡标题
        tip:"来一杯随心所欲宝藏茶，我要一次加满8种料。",                                //钻石配置
        task:{                                                                               //任务
            name:"勇气",
            desc:"点亮需要你给出勇气：“你来人间一趟，你要看看太阳”，读3遍海子的诗。",
            time:3
        },
        choose:['勇气','null','null'],                                                          //点亮选择
        next:[                                                                               //下一关选择
            '点亮无糖茶铺','null'
        ],
        couponFont:"享受茶饮品 ",
        couponName:"立减5元",
        couponTip:"谢谢你用勇气点亮梦工厂",
        couponId:28268
    },
    //关卡五
    {
        title:'无糖茶铺',                                                                     //关卡标题
        tip:"奈雪无糖茶铺开张啦，贩卖天然健康好茶。",                                //钻石配置
        task:null,
        choose:['null','null'],                                                              //点亮选择
        next:[                                                                               //下一关选择
            '点亮极寒地带'
        ],
        couponFont:"享受冷泡茶 ",
        couponName:"立减5元",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28269
    },
    //关卡六
    {
        title:'极寒地带',                                                                     //关卡标题
        tip:"奈雪味的钟薛高雪糕，你爱喝的奈雪变成雪糕咯！",                                //钻石配置
        task:null,
        choose:['null'],                                                                        //点亮选择
        next:[],                                                                               //下一关提示
        couponFont:"享受雪糕产品 ",
        couponName:"买1送1",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28272
    },
    //关卡7
    {
        title:'心选礼物铺',                                                                     //关卡标题
        tip:"奈雪女孩骑着独角兽出场，还会不定时带来与艺术家合作的文创周边礼物",                                //钻石配置
        task:{                                                                               //任务
            name:"童心",
            desc:"点亮需要你给出童心：如果你有超能力，会飞？隐身？把A4纸变成钱？想一想你要哪个。",
            time:3
        },
        choose:['童心','null','null'],                                                          //点亮选择
        next:['点亮零食俱乐部','null'],                                                                               //下一关提示
        couponFont:"享受IP文创周边 ",
        couponName:"8.5折",
        couponTip:"谢谢你用童心点亮梦工厂",
        couponId:28264
    },
    //关卡8
    {
        title:'零食俱乐部',                                                                     //关卡标题
        tip:"奈雪竟然有零食了，实现你不长胖的零食自由。",                                //钻石配置
        task:null,
        choose:['null','null'],                                                                        //点亮选择
        next:['点亮吐司烘培坊'],                                                                               //下一关提示
        couponFont:"享受零食 ",
        couponName:"满50减20元",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28267
    },
    //关卡9
    {
        title:'吐司烘培坊',                                                                     //关卡标题
        tip:"酥脆千层吐司和多馅爆料吐司，满足对吐司的幻想。",                                //钻石配置
        task:null,
        choose:['null'],                                                                        //点亮选择
        next:[],                                                                               //下一关提示
        couponFont:"享受烘焙产品 ",
        couponName:"买1送1",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28263
    },
    //关卡10
    {
        title:'古早蛋糕烘培坊',                                                                     //关卡标题
        tip:"恰好松软的古早蛋糕，十分治愈。",                                //钻石配置
        task:{                                                                               //任务
            name:"感恩",
            desc:"点亮需要你给出感恩：现在静下⼼，想一想你最想感谢的那个人吧。",
            time:3
        },
        choose:['感恩','null','null'],                                                                        //点亮选择
        next:['点亮法式厚吐司烘培坊','null'],                                                                               //下一关提示
        couponFont:"享受烘焙产品 ",
        couponName:"买1送1",
        couponTip:"谢谢你用感恩点亮梦工厂",
        couponId:28263
    },
    //关卡11
    {
        title:'法式厚吐司烘培坊',                                                                     //关卡标题
        tip:"布丁般奶香柔软的法式厚吐司，好吃飞起。",                                //钻石配置
        task:null,
        choose:['null','null'],                                                                        //点亮选择
        next:['点亮Tapas烘培坊'],                                                                               //下一关提示
        couponFont:"享受烘焙产品 ",
        couponName:"买1送1",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28263
    },
    //关卡12
    {
        title:'Tapas烘培坊',                                                                     //关卡标题
        tip:"西班牙当地美食塔帕斯，感受西班牙式精致生活情调。",                                //钻石配置
        task:null,
        choose:['null'],                                                                        //点亮选择
        next:[],                                                                               //下一关提示
        couponFont:"享受烘焙产品 ",
        couponName:"买1送1",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28263
    },
    //关卡13
    {
        title:'肉食派对',                                                                     //关卡标题
        tip:"肉食派对开始啦，快来品尝不同风味的原切牛排。",                                //钻石配置
        task:{                                                                               //任务
            name:"乐观",
            desc:"点亮需要你给出乐观：天空笑了，万物生长。你笑了，世界温暖。现在试着嘴角上扬，笑上5秒。",
            time:3
        },
        choose:['乐观','null','null'],                                                                        //点亮选择
        next:['点亮世界面包展','null'],                                                                               //下一关提示
        couponFont:"享受原切牛排 ",
        couponName:"立减5元",
        couponTip:"谢谢你用乐观点亮梦工厂",
        couponId:28271
    },
    //关卡14
    {
        title:'世界面包展',                                                                     //关卡标题
        tip:"世界烘焙大师作品展，一次性吃遍世界各国面包！",                                //钻石配置
        task:null,
        choose:['null','null'],                                                                        //点亮选择
        next:['点亮甜食世界'],                                                                               //下一关提示
        couponFont:"享受面包产品 ",
        couponName:"买1送1",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28261
    },
    //关卡15
    {
        title:'甜食世界',                                                                     //关卡标题
        tip:"日式水果千层和法式甜点组成甜食乐园，圆满你甜甜的梦。",                                //钻石配置
        task:null,
        choose:['null'],                                                                        //点亮选择
        next:[],                                                                               //下一关提示
        couponFont:"享受蛋糕产品 ",
        couponName:"立减5元",
        couponTip:"谢谢你点亮梦工厂",
        couponId:28273
    },
]

module.exports = config