import {
    HTTP
  } from '../../utils/http.js'
  
  let paginationBev = Behavior({
    properties: {
     
    },
    data: {
      start: 0,
      count: 20,
      dataArray: [],
      empty:false,
      ending:false
    },
  
    methods: {
      setMoreData: function(dataArray) {
        if (dataArray==false) {
          this.data.ending = true
          if(this.data.dataArray==false){
            this.setData({
              empty:true
            })
          }
        }
        let temp =this.data.dataArray.concat(dataArray)
        this.data.start += this.data.count
        this.setData({
          dataArray: temp
        })
        return true
      },
  
      hasMore:function(){
        return !this.data.ending
      },
  
      getCurrentStart:function(){
        return this.data.start
      },
      setTotal(total) {
        this.data.total = total;
      },
      // 初始化书籍列表数据，防止数据重复渲染
      initPagination:function(){
        this.data.ending = false
        this.data.start = 0
        this.data.dataArray = []
        this.setData({
          dataArray:[]
        })
      }
    }
  })
  
  
  export {
    paginationBev
  }