const app = getApp()

Page({
    data: {
      txt:'快开始吧~~',
      one_img:'https://img-blog.csdnimg.cn/20181116192114783.png',
      two_img: 'https://img-blog.csdnimg.cn/20181116192223207.png',
      three_img: 'https://img-blog.csdnimg.cn/20181116192249314.png',
      four_img: 'https://img-blog.csdnimg.cn/20181116192305231.png',
      five_img: 'https://img-blog.csdnimg.cn/20181116192320187.png',
      six_img: 'https://img-blog.csdnimg.cn/20181116192332897.png',
      flag:true,
      timer:null,
      msg:'摇一摇',
      total:0,


      arr:[
        'https://img-blog.csdnimg.cn/20181116192114783.png',
        'https://img-blog.csdnimg.cn/20181116192223207.png',
        'https://img-blog.csdnimg.cn/20181116192249314.png',
        'https://img-blog.csdnimg.cn/20181116192305231.png',
        'https://img-blog.csdnimg.cn/20181116192320187.png',
        'https://img-blog.csdnimg.cn/20181116192332897.png',
      ]
    },
    enter:function(event){
      let obj = this;
    var idx=0;
    var that=this;
    
     if(obj.data.flag==true){
         obj.data.timer = setInterval(function () {
     
          var one = that.randomNum(1, 6);
          var two = that.randomNum(1, 6);
          var three = that.randomNum(1, 6);
          var four = that.randomNum(1, 6);
          var five =that.randomNum(1, 6);
          var six = that.randomNum(1, 6);
  idx++;
  var tmp1=one;var tmp2=two;var tmp3=three; var tmp4=four ;var tmp5=five; var tmp6=six;         
  
  obj.setData({
            one_img:  one + ".png",
            two_img: two + ".png",
            three_img: three + ".png",
            four_img: four+ ".png",
            five_img:five+".png",
            six_img:six+".png",
            flag:false,
            msg:'等待中...',
  
           // total:18,
          })
  if(idx>20){
         

    
          clearInterval(obj.data.timer);
          obj.setData({
        txt:'',
               msg:'摇一摇',
               flag:true,
          })
    var NumberArr = [];
    NumberArr.push(tmp1,tmp2,tmp3,tmp4,tmp5,tmp6);
    var level = {
      one: '状元插金花',
      two: '满堂红', // 六子
      two1: '遍地锦',
      two2: '六勃黑',
      three: '五王', // 五子
      three1:'五子',
      four: '状元',
      five: '对堂',
      six: '三红',
      seven: '四进',
      eight: '二举',
      nine: '一秀',
      ten: '太遗憾啦'
   },
   this_level; 
  
    NumberArr.sort();
    var isfour = 0;
    for (var i = 0; i < NumberArr.length; i++) {
      if (NumberArr[i] == 4) {
          isfour = isfour + 1;
      }
  } 
  switch (isfour) {
    case 1:
        for (var i = 0; i < NumberArr.length; i++) {
            //存储当前相同的数量，判断是否为四进
            var ContrastArr = [];
            for (var j = 0; j < NumberArr.length; j++) {
                if (NumberArr[i] == NumberArr[j]) {
                    ContrastArr.push(NumberArr[j]);
                }
            }
        }
        // 等到上面遍历执行完再进行判断属于哪个级别
        if (ContrastArr.length === 4) {
            this_level = level.seven; //四进

            break;
        } else if (ContrastArr.length === 5) {
            this_level = level.three; //五王
            
            break;
        } else if (ContrastArr.length === 6) {
            this_level = level.two; //满堂红
           
            break;
        } else {
            // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
            var isContinuityArray = false;
            var array = NumberArr;
            var arrayCount = array.length;
            for (var i = 0; i < arrayCount; i++) {
                var currentArr = Number(array[i]) + 1;
                var nestArr = Number(array[i + 1]);
                if (i + 1 == arrayCount) {
                    currentArr = Number(array[i]);
                    nestArr = Number(array[i]);
                }
                if (currentArr != nestArr) {
                    isContinuityArray = false;
                    break;
                } else {
                    isContinuityArray = true;
                }
            }
            if (isContinuityArray) {
                this_level = level.five;
                
                break;
            } else {
                this_level = level.nine;
                
                
                break;
            }
        };
        break;
    case 2:
        for (var i = 0; i < NumberArr.length; i++) {
            var ContrastArr = [];
            for (var j = 0; j < NumberArr.length; j++) {
                if (NumberArr[i] == NumberArr[j]) {
                    ContrastArr.push(NumberArr[j]);
                }
            }
            // 判断是 4进 or 二举
            if (ContrastArr.length === 4) {
                this_level = level.seven;
               
                break;
            } else {
                this_level = level.eight;
                
            }
        };
        break;
    case 3:
        this_level = level.six;   
        break;
    case 4:
        // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
        var one = 0;
        for (var i = 0; i < NumberArr.length; i++) {
            if (NumberArr[i] === 1) {
                one = one + 1;
            }
        }
        if (one == 2) {
            this_level = level.one; // 插金花
            
        } else {
            this_level = level.four; //状元
           
        }
        break;
    case 5:
        this_level = level.three; // 五王
        
        break;
    case 6:
        this_level = level.two; //满堂红
        
        break;
    default:
        // 就是页面都没有四,来判断是否属于 “五子” 和 “六子” 和 “四进” 中的哪一种;
        for (var i = 0; i < NumberArr.length; i++) {
            var ContrastArr = [];
            for (var j = 0; j < NumberArr.length; j++) {
                if (NumberArr[i] == NumberArr[j]) {
                    ContrastArr.push(NumberArr[j]);
                }
            }
            if (ContrastArr.length === 4) {
                this_level = level.seven; //四进
               
                break;
            } else if (ContrastArr.length === 5) {
                this_level = level.three1; //五子
                
                break;
            } else if (ContrastArr.length === 6 && NumberArr[0] === 1) {
                this_level = level.two1; //遍地锦
                
                break;
            } else if (ContrastArr.length === 6 && NumberArr[0] === 2) {
                this_level = level.two2; //六勃黑
                
                break;
            } else {
                this_level = level.ten;
            }
        };
        break;  }


        that.setData({
          l:this_level,
          });
        }

        }, 50);}
      
    },
 

  randomNum: function (minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
    }
  } 

})