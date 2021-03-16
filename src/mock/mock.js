const  Mock  =  require('mockjs')

// 使用mockjs模拟数据

let  people  =  Mock.mock({

        
    'data':  [    // 生成20组数据


        {    
            'username':   '李四',
            'password': '123456',
            'item': {
                'id': '1',
                'uu': "https://pic.maizuo.com/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg"
            }
        },
        {    
            'username':   '张三',
            'password': '123456',
            'item': {
                'id': '1',
                'uu': "https://pic.maizuo.com/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg"
            }
        },
        {    
            'username':   '王五',
            'password': '123456',
            'item': {
                'id': '1',
                'uu': "https://pic.maizuo.com/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg"
            }
        },
        {    
            'username':   '李六',
            'password': '123456',
            'item': {
                'id': '1',
                'uu': "https://pic.maizuo.com/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg"
            }
        },
        {    
            'username':   '王刚',
            'password': '123456',
            'item': {
                'id': '1',
                'uu': "https://pic.maizuo.com/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg"
            }
        },

            
    ],


      
});

//根据数据模板生成模拟数据

Mock.mock('/api/getUserList',  'get',   (req,  res)  =>  {

      
    return  {

             status:  0,

            data:  people,

            message:   '成功'

           }

})