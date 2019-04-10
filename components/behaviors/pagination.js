import {
    HTTP
  } from '../../utils/http.js'
  
  let paginationBev = Behavior({
    properties: {
     
    },
    data: {
      dataArray: [],
      total: 0
    },
  
    methods: {
      setMoreData: function(dataArray) {
        const tempArray =this.data.dataArray.concat(dataArray)
        this.setData({
          dataArray: tempArray
        })
      },
  
      hasMore:function(){
        if(this.data.dataArray.length >= this.data.total) {
            return false
        } else {
            return true
        }
      },
  
      getCurrentStart:function(){
        return this.data.dataArray.length
      },
      setTotal(total) {
        this.data.total = total;
      },
      // 初始化书籍列表数据，防止数据重复渲染
      initPagination:function(){
        this.setData({
          dataArray:[]
        })
      }
    }
  })
  
  
  export {
    paginationBev
  }