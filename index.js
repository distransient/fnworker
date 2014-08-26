(function(){
  var URL = URL||webkitURL
  
  function fnworker(fn, ctx) {
    var url = URL.createObjectURL(
          new Blob(
            [ '(', fn.toString(), ')()' ]
          , { type: 'application/javascript' }
          )
        )
      , worker = new Worker(url)
    URL.revokeObjectURL(url)
    Object.keys(ctx).map(function(index) {
      worker.postMessage(ctx[index], [ctx[index]])      
    })
    return worker
  }

  /* Expose to AMD, CommonJS, and browser environments */
  if(typeof exports !== undefined)module.exports=fnworker
  else if(typeof define==='function'&&define.amd)define(function(){return{fnworker:fnworker}})
  else if(typeof window!==undefined)window.fnworker=fnworker
})()
