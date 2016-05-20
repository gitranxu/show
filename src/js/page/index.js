//引入CSS
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/page/index.css");

//增加事件
/*$('#btn').click(function(){
	require.ensure(['../components/dialog/index.js'],function(require){
		var Dialog=require('../components/dialog/index.js');
		new Dialog(new Date()-0);
	});
});*/

require("../components/windowsizechange.js");//窗口大小变化时进行判断

