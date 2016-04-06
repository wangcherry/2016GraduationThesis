/**
*分页插件
*author wangying
*2016/04/05
*/
(function($){
	var zh_CN = {
    	firstpage:'首页',
    	prevpage:'&laquo;',
		nextpage:'&raquo;',
    	lastpage:'尾页'
    };
    var zh_TW = {
    	firstpage:'首頁',
    	prevpage:'上一頁',
    	nextpage:'下一頁',
    	lastpage:'尾頁'
    };
    var en_US = {
    	firstpage:'first',
    	prevpage:'previous',
    	nextpage:'next',
    	lastpage:'last'
    };
    function getLg(code,lg){
        if(lg === 'zh_CN'){
            return zh_CN[code] || '';
        }
        else if(lg === 'zh_TW'){
            return zh_TW[code] || '';
        }
        else if(lg === 'en_US'){
            return en_US[code] || '';
        }
        else{
            return '';
        }
    };
	function isEmpty(v){
		if(typeof v==='undefined' || v===null || v===''){
			return true;
		}
		else{
			return false;
		}
	};
	function initHtml(element,params){
		var args = element.data();
		var segmentSize = args.segmentSize || 5;
		var lg = args.lg || 'zh_CN';
		element.empty();
		/*********上一页*********/
		if(params.page > 1){
			element.append('<li><a href="#" aria-label="Previous" class="js-prevpage">'+getLg('prevpage',lg)+'</a></li>');
		}
		else{
			element.append('<li class="disabled"><a href="#" aria-label="Previous">'+getLg('prevpage',lg)+'</a></li>');
		}
		/*********中间页码*********/
		//生成中间页码
		var segment = Math.floor((params.page-1)/segmentSize);
		var start = segment*segmentSize+1;
		var end = null;
		if(params.totalPages < (segment*segmentSize+segmentSize)){
			end = params.totalPages;
		}
		else{
			end = segment*segmentSize+segmentSize;
		}
		for(var i=start;i<=end;i++){
			var htmlStr = '';
			if(params.page == i){
				//当前页不可点击
				htmlStr = '<li class="active"><a href="#">'+i+'<span class="sr-only">(current)</span></a></li>'
			}
			else{
				htmlStr = '<li><a href="#" class="js-page">'+i+'</a></li>';
			}
			var htmlEle = $(htmlStr);
			if(i == start){
				//记录当前状态最小页
				htmlEle.addClass('js-minpage');
			}
			if(i == end){
				//记录当前状态最大页
				htmlEle.addClass('js-maxpage');
			}
			element.append(htmlEle);
		}
		/*********下一页*********/
		if(params.page < params.totalPages){
			element.append('<li><a href="#" aria-label="Next" class="js-nextpage">'+getLg('nextpage',lg)+'</a></li>');
		}
		else{
			element.append('<li class="disabled"><a href="#" aria-label="Next">'+getLg('nextpage',lg)+'</a></li>');
		}
	};
	//绑定事件
	function initEvents(element){
		//点击页码
		element.on("click","a.js-page",function(){
			var args = element.data();
			var newPage = parseInt($(this).text());
			initHtml(element,{
				page:newPage,
				totalPages:args.totalPages
			});
			if(typeof(args.callback)=="function"){
				args.callback(newPage);
			}
		});
		//点击上一页
		element.on("click","a.js-prevpage",function(){
			var args = element.data();
			var newPage = (parseInt(element.children(".active").text())-1) || 1;
			initHtml(element,{
				page:newPage,
				totalPages:args.totalPages
			});
			if(typeof(args.callback)=="function"){
				args.callback(newPage);
			}
		});
		//点击下一页
		element.on("click","a.js-nextpage",function(){
			var args = element.data();
			var newPage = (parseInt(element.children(".active").text())+1) || 1;
			initHtml(element,{
				page:newPage,
				totalPages:args.totalPages
			});
			if(typeof(args.callback)=="function"){
				args.callback(newPage);
			}
		});
	}
	$.fn.extend({
		sharkPager:function(options){
			/*********默认参数配置*************/
            var element = $(this);
			if(isEmpty(options)){
				options = {};
			};
            var args = $.extend({
				totalPages : 1,
				page : 1,
				lg : 'zh_CN',
				segmentSize : 5,
				callback : function(){}
			},options);
			element.data(args);
			/*********初始化*************/
			if(element.attr('isInit') == '1'){
				//已初始化，仅重置页码
				initHtml(element,args);
            }
            else{
            	//初始化
            	element.addClass('pagination');
            	element.attr('isInit',1);
            	initHtml(element,args);
            	initEvents(element);
            }
		}
	});
})(jQuery);