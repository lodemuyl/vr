
AFRAME.registerComponent('detail-action', {
    init: function () {
      var el = this.el;
      var src = this.src;
      el.addEventListener('click', function (src) {        
        functions.redirect(src);      
    });
    }
  });
functions = {
    redirect: function(src, res, req, app){
        var src0 = '/' + src.srcElement.attributes[0].value + '.html';
        var src1 = '/' + src.srcElement.attributes[0].value;
        console.log(src1); 
        window.location.href = src1;
       
        
    }
}
