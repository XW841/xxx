const  Mock  =  require('mockjs')

// 使用mockjs模拟数据

let  people  =  Mock.mock({

        
    'data':  [    // 生成20组数据

        { "filmId": 5257, "name": "拆弹专家2", "poster": "https://pic.maizuo.com/usr/movie/4a2bec5290b94f7eb597913727b21df6.jpg", "actors": [{ "name": "邱礼涛", "role": "导演", "avatarAddress": "https://pic.maizuo.com/usr/movie/6735332cb677645542c2f136eb37e561.jpg" }, { "name": "刘德华", "role": "潘乘风", "avatarAddress": "https://pic.maizuo.com/usr/movie/ca47cd961fe0be0c91149f6bcca2f13d.jpg" }, { "name": "刘青云", "role": "董卓文", "avatarAddress": "https://pic.maizuo.com/usr/movie/82a5d97e318c447133cd6c8262cee846.jpg" }, { "name": "倪妮", "role": "庞玲", "avatarAddress": "https://pic.maizuo.com/usr/movie/e776871fe75f0367aa60957457a6f96c.jpg" }, { "name": "谢君豪", "role": "演员", "avatarAddress": "https://pic.maizuo.com/usr/movie/dd120eb1f6bda9f3b9c9e4c49785d0ce.jpg" }], "director": "邱礼涛", "category": "动作|犯罪", "synopsis": "香港某处发生爆炸案，前拆弹专家潘乘风（刘德华 饰）因昏迷于现场，被警方怀疑牵涉其中。苏醒后的潘乘风只能一边逃亡一边查明真相，然而，他的好友董卓文（刘青云 饰）和他的前女友庞玲（倪妮 饰）却给他讲述了两段截然不同的经历。有计划的爆炸案接二连三发生，真相却越来越扑朔迷离……", "filmType": { "name": "2D", "value": 1 }, "nation": "中国大陆,中国香港", "language": "", "videoId": "", "premiereAt": 1608768000, "timeType": 3, "runtime": 0, "grade": "8", "item": { "name": "2D", "type": 1 }, "isPresale": true, "isSale": false },


            
    ],


      
});

//根据数据模板生成模拟数据

Mock.mock('/api/getFilm',  'get',   (req,  res)  =>  {

      
    return  {

             status:  0,

            data:  people,

            message:   '成功'

           }

})