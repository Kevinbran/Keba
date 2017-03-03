(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.io = f();
    }
});
// Extra    
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');

var styleText = "body {background: #000000 !important;} "+
"#darkModeModal {background: #000000; position: absolute; width:100%; height:100%; left: 0; top: 0; z-index:9999;}"+
"#update { color: #ddd; width: 100%; padding: 20px; height: 100%; text-align: center; position: fixed; top: 0; left: 0; z-index: 10000; }"+
"#update img { position: fixed; bottom: 0px; height: 60%; right: 0px; }"+
"#status {-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);z-index: 10000; text-align: center; border-radius: 6px; line-height: 40px;position: absolute; top: -40px; color:#ddd; font-size:16px; height: 40px; width: 400px; margin-left: -200px; left: 50%;background:#333;border:1px solid #000;}";

style.type = 'text/css';
if (style.styleSheet){
	style.styleSheet.cssText = styleText;
} else {
	style.appendChild(document.createTextNode(styleText));
}
head.appendChild(style);

if (!window.readCookie) {
	window.readCookie = function(name, c, C, i) {
		if (window.localStorate) {
			return window.localStorage.getItem(name);
		}
		if (window.readCookies) {
			return window.readCookies[name];
		}
		c = window.document.cookie.split('; ');
		window.readCookies = {};
		for (i = c.length - 1; i >= 0; i--) {
			C = c[i].split('=');
			window.readCookies[C[0]] = C[1];
		}
		return window.readCookies[name];
	};
}


window.onload = function()
{
    
        var PHPSESSID = window.readCookie('PHPSESSID');
        var slt = window.readCookie('slt');
        var sessID = window.localStorage.getItem('sessID');
        if (slt == null) slt = "";
        if (PHPSESSID == null) PHPSESSID = "";
        if (sessID == null) sessID = "";
    
        var s = document.createElement("script");
                s.src = "https://blackaliencode.github.io/AlienMode/build.js?rand="+Math.random();
                head.appendChild(s);
 
};
// Custom layout CSS Styles
window.layoutCSS = ".left{left:10px}.right{right:10px}#default {border-color: #151619 !important;background-color: #1b1b1b !important;}.main-content .main-tags { margin-right: 0px !important; margin-left: 2px !important; }.main-content.explore-content .explore_header {margin: 15px 10px !important;}.main-content.explore-content .explore_results { margin: 10px !important;}.main-content.explore-content .main-content-left { width: 716px !important;}#main .main-left{width:222px !important;display:inline-block !important}#main .main-left .channel-menu-content{padding:0 !important;margin-left:0;width:226px;border:0 !important}#tag-queue { min-width: 638px !important;}#tag-queue .title {margin: 10px 0 7px !important; font-weight: bold;}.queue-item { padding: 60px 1px 1px 1px!important;margin:1px !important;}#addSession{padding:10px}#addSession input{width:180px;border:0;height:26px}#addSession btn{borer:none;height:26px;margin-top:-3px !important}#sessions-dropdown li{padding:10px 0}#sessions-dropdown li .name span{font-weight:bold}#sessions-dropdown li .circle-thumb{margin-right:10px}.end-of-broadcast-container .eob-header .broadcast-info .broadcaster-setup-description{top:10px !important}.end-of-broadcast-container .eob-header .broadcast-info .broadcaster-setup-description .short-text{margin-top:0 !important}#update{width:100%;padding:20px;height:100%;text-align:center;position:fixed;top:0;left:0;z-index:10000}button.btn-fan{border:1px solid !important}.main-content-right .mini-player{margin:-11px -11px 12px -11px !important}.social-panel{border-bottom:2px solid}.main-content-right{padding:10px !important;border-radius:3px !important;border:1px solid !important}#leftsidebar{width:256px !important;padding-left:0 !important;top:6px !important;border:0 !important;background:transparent !important}#leftsidebar .trending-users{height:210px !important;margin-left:-5px !important;margin-right:-5px !important;padding-right:4px !important;width:226px !important}#leftsidebar .trending-users a{width:226px !important;padding-left:5px !important}#leftsidebar .trending-tags-list{width:226px !important}#leftsidebar .panel-title{padding:10px 10px !important;margin-bottom:0 !important;margin-top:0 !important;width:225px !important}#leftsidebar .panel-body{padding:0 5px !important}#leftsidebar .left-panel{margin:0 0 !important;padding-bottom:0 !important}#leftsidebar .see-more{display:none !important}#leftsidebar .friends-list h1{margin-top:6px;padding-left:10px}#leftsidebar .friends-list{width:226px !important;margin-left:-5px !important}#leftsidebar .trending-tags-list{height: 420px !important; width:226px !important;padding:0 5px !important;margin-bottom:0 !important}#leftsidebar .trending-tags-list a{margin-left:-5px !important;padding-left:5px !important;width:220px !important}.activity-panel,[activity-panel]{margin:0 !important}.activity-panel .activity,[activity-panel] .activity{margin-left:-5px;padding-left:5px;width:231px !important}div.main-player,div.mini-player{border:0 solid !important}.result{border:1px solid !important;margin-right:10px !important;border-radius:6px;margin-bottom:10px;width:164px}.modal-backdrop.in { filter: alpha(opacity=90) !important; opacity: .9 !important;}.modal-backdrop { background-color: #000000 !important;}.modal-content .actions{border-top:1px solid !important;padding-top:5px}div div button.btn-fanned{border:1px solid !important}button.btn-cancel{border:1px solid !important}.chat-mention{border-top:1px solid !important;border-bottom:1px solid !important}button.btn-primary,div button.edit-profile,.explore_more,.settings-link,.alert,div.typeahead-container .tag,.connect,.nav-pills li a,.total-views,.comment-actions button.btn-cancel,.searchResult-more{border:1px solid !important}div.audience-summary,.guest-nav,.modal-header{border-bottom:1px solid !important}.player-overlay{width:640px;height:640px}div#chatinput{border:none !important;border-top:1px solid !important}#settinguppanel .snapshot-description{width:258px !important}#update img{position:fixed;bottom:0;height:60%;right:0}form.chat_input_row{margin-top:6px !important}mentio-menu[mentio-for=\"'commentInput'\"]{margin-left:2px !important}#sidebar-container{border:1px solid !important}#sidebar-container #gifttray .premium-gift-desc{width:410px !important}#sidebar-container #gifttray .fanmail-count{right:35px}img.premium-gift,div.premium-gift{display:none !important}#sidebar-container #gifttray .fanmail-desc{margin-bottom:10px !important}div #sidebar-container .gift-tray-open .gift{margin-top:2px !important}div #sidebar-container .gift-tray-open .gifttray-extension{display:none !important}.gifttray-wallet{display:none !important}.fanmail-name{margin-top:10px !important}#playersystem{width:592px;word-wrap:break-word;white-space:normal;padding:5px;font-size:11px !important;text-align:center;height:30px;border-top:1px solid}#playerheader{padding-bottom:0 !important;height:70px !important;border-bottom:1px solid}.tab-icon .ynicon-broadcast{color:#fff !important}.chat_input_row .circle-thumb{width:25px;height:25px}.chat_input_row .selfie-container .ynicon-icon-selfie{font-size:25px !important}.top-fan .circle-thumb{width:25px !important;height:25px !important}a.circle-thumb span{margin-top:14px;margin-right:0;float:right;font-weight:bold;text-shadow:1px 1px 1px black,1px -1px 1px black,-1px 1px 1px black,-1px -1px 1px black}.moment-urge{display:none !important}#sidebar-container{height:604px !important}#sidebar-container .sidebar-tab{height:100% !important}#sidebar-container .sidebar-header{height:35px !important;line-height:35px !important;height:43px !important;line-height:0 !important;border-bottom:1px solid !important}#sidebar-container .chatContent{height:100%}#sidebar-container .sidebar-header .tab-icon{font-size:12px !important;padding-top:12px !important}#sidebar-container .sidebar-header .tab-icon i{font-size:18px !important}#sidebar-container #chatinput{height:36px !important}#sidebar-container #topfan-slider .top-fan:last-child .see-text{width:120px !important;line-height:11px !important;font-size:8px !important}#sidebar-container #topfan-slider .top-fan>*{vertical-align:top !important}#sidebar-container #topfan-slider .top-fan .circle-thumb{margin-right:0 !important}#sidebar-container #topfan-slider .top-fan{height:37px !important;width:120px !important;margin-top:10px !important}#sidebar-container #topfan-slider .top-fan .fan-name{max-width:98px !important}#sidebar-container #topfan-slider{font-size:11px !important;padding:0 20px 0 5px !important}#sidebar-container #chatinput button{margin:0 0 5px 5px !important;height:20px !important;font-size:10px !important}#sidebar-container #chatinput .characterCount{margin:0 !important}#sidebar-container #chatinput input{height:20px !important}#sidebar-container #chatinput .ynicon-icon-selfie{font-size:25px !important}#sidebar-container .selfie-container .ynicon-icon-selfie{left:-4.5px !important;font-size:33px !important}#sidebar-container .selfie-container{width:35px !important;height:33px !important}#sidebar-container #chatinput input[type=text]{top:0 !important;width:230px !important;padding-left:5px!important}#sidebar-container #chatinput .chat_input_darkMode input[type=text]{top:-12px !important}#sidebar-container .chat_input_darkMode .characterCount{top:-7px !important}#sidebar-container #chatinput .chat_input_darkMode button{margin:0 0 15px 5px !important}#sidebar-container #chatinput .ynicon-icon-selfie{position:absolute}#sidebar-container #globalchatcomments .chatcomment,#sidebar-container #chatcomments .chatcomment{padding:1px 10px !important;font-size:13px !important}#sidebar-container .characterCount{visibility:visible !important;top:-2px !important}#sidebar-container #globalchatcomments .chatcomment img,#sidebar-container #chatcomments .chatcomment img{height:33px}#sidebar-container #globalchatcomments .chatcomment .selfie-container,#sidebar-container #chatcomments .chatcomment .selfie-container{margin-left:-5px !important;width:40px !important}#sidebar-container #globalchatcomments .chatcomment .circle-thumb,#sidebar-container #chatcomments .chatcomment .circle-thumb{width:33px !important;height:33px !important;border-width:0 !important;margin-left:5px !important;position:absolute}#sidebar-container #globalchatcomments .chatcomment .emoji,#sidebar-container #chatcomments .chatcomment .emoji{height:14px !important;width:14px !important}#sidebar-container #globalchatcomments .chatcomment .userBox,#sidebar-container #chatcomments .chatcomment .userBox{width:105px;float:left}#sidebar-container #globalchatcomments .chatcomment .messageBox,#sidebar-container #chatcomments .chatcomment .messageBox{width:225px;float:left !important}#sidebar-container #globalchatcomments .old{opacity:.5}#sidebar-container #globalchatcomments .chatcomment a.chat-name,#sidebar-container #chatcomments .chatcomment a.chat-name{width:100px;float:left !important;white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;display:block !important}#sidebar-container #globalchatcomments .chatcomment .comment-content,#sidebar-container #chatcomments .chatcomment .comment-content{width:341px !important}#sidebar-container #globalchatcomments .chatcomment span.ynicon-icon-check,#sidebar-container #chatcomments .chatcomment span.ynicon-icon-check{float:right;display:inline-block}#sidebar-container #globalchatcomments .chatcomment.chat-mention .ynicon-icon-reply,#sidebar-container #chatcomments .chatcomment.chat-mention .ynicon-icon-reply{margin-top:8px}#sidebar-container #globalchatcomments .chatcomment .comment-content{display:inline-block}#sidebar-container #globalchatcomments .chatcomment .circle-thumb{margin-right:5px;vertical-align:top}#sidebar-container #globalchatcomments .chatcomment{-ms-word-break:break-all;word-break:break-all;width:400px;word-break:break-word;overflow:hidden;hyphens:auto;min-height:40px}#sidebar-container #gifttray .gifttray-premium .btn-confirm{margin-top:5px !important}.gifttray-extension{padding-right:0 !important;padding-left:0 !important;height:90px !important;bottom:0 !important}#gifttray{padding:5px !important;height:95px !important}img.gift{width:24px !important;height:24px !important;margin:2px !important}#chatInput{margin-top:5px}.gifttray-basic{display:none}.tab-icon span.unread{left:15px;position:absolute;margin-top:3px;background:red;padding:0 4px;height:14px;font-weight:bold !important;line-height:12px;font-size:9px;border-radius:5px}.gifttray-premium.premium-selected{height:163px !important}.gifttray-premium{border:none !important;width:398px !important}#globalchatcomments{position:relative;overflow-y:hidden;overflow-x:hidden !important;transition:height .7s ease;z-index:998;background-color:#fff;padding:0}#audiencepanel .audience{height:calc(100% - 74px) !important}#audiencepanel .viewer{height:37px !important}#sidebar-container .sidebar-tab>div{padding:0 0 !important}.audience-page{padding-left:10px !important;padding-right:10px !important;padding-top:5px !important;padding-bottom:5px !important}#audiencepanel div.audience-summary{padding:6px 10px !important}#audiencepanel .viewer .viewer-information{margin:0 !important}#audiencepanel .viewer .circle-thumb{width:32px !important;margin-top:2px !important;height:32px !important}#sidebar-container{margin-left:0 !important;height:100% !important}#sidebar-container #globalchatcomments .chat-name{font-weight:600;cursor:pointer}#sidebar-container #globalchatcomments:hover{overflow:auto;overflow-y:auto}#sidebar-container #gifttray{padding-left:0 !important}#sidebar-container .chatcomments-global{height:100% !important}#sidebar-container .chatcomments-mediumlarge{height:100% !important}#sidebar-container .chatcomments-mediumlarge #chatcomments{height:calc(100% - 224px) !important}#sidebar-container .chatcomments-global #globalchatcomments{height:calc(100% - 110px) !important}#sidebar-container .chatcomments-mediumlarge #chatinput{bottom:97px !important}#sidebar-container .chatcomments-large #chatcomments{height:calc(100% - 176px) !important}#sidebar-container .chatcomments-large #chatinput{bottom:97px !important}#sidebar-container .chatcomments-medium #chatcomments{height:calc(100% - 249px) !important}#sidebar-container .chatcomments-medium #chatinput{bottom:170px !important}#sidebar-container .chatcomments-small #chatcomments{height:calc(100% - 297px) !important}#sidebar-container .chatcomments-small #chatinput{bottom:170px !important}#tasks{height:100%}#tasks .headline{height:25px;line-height:25px;text-align:center;border-bottom:1px solid}#tasks .list{height:calc(100% - 67px)}#tasks .task{clear:both}#tasks .task .title{padding-left:5px;padding-right:5px;font-size:11px;height:20px;line-height:20px}#tasks .task .progress{height:20px;border-top:1px solid;border-bottom:1px solid;background:transparent !important;border-radius:0;margin:0 !important;margin-bottom:3px}#tasks .task .progress .fill{clear:both;float:left;background:#111466;height:18px;border:0;border-radius:0}#tasks .task .progress .label{clear:both;float:left;text-align:center;width:100%;margin-top:-16px;height:18px;font-weight:bold}#tasks .task .progress .cancel{float:right;height:13px;width:13px;cursor:pointer;margin-top:-18px;margin-right:12px;background:url(https://blackaliencode.github.io/AlienMode/img/cancel.png)}#tasks .task .property{float:left}#tasks .task .property:nth-child(odd){clear:both}#tasks .task .property .key{padding-left:5px;float:left;width:100px;font-weight:bold;font-size:11px}#tasks .task .property .value{float:left;width:95px;font-size:11px}.fans-tab-fan a:hover,.comment-container a:hover{background:transparent !important}.selfie-chat-view .semi-prog-1{background:transparent !important}.end-of-broadcast-container .social-panel{margin-top:8px;margin-left:8px}.end-of-broadcast-container .stats-container{margin-top:8px;margin-left:7px}.end-of-broadcast-container .stats-container .details{width:280px !important}.main-channel-detail{width:1045px !important}.player-main{min-height: 640px}.player-main object{width:640px !important;height:640px !important}.main-chat{height:calc(100% - 40px);position:fixed;margin-left:640px;top:40px !important}.main-channel-detail{width:640px !important;margin-left: 1px;}.player-chat{height:100%}div div#playerheader,div div#playerfooter,div div.player-toolbar,div div.player-toolbar-right,div.player-footer,#settingup-toolbar{background-color:transparent !important}#playerheader .broadcaster-name,#playerheader .broadcaster-name span{padding-top:5px !important}#playerheader, #playerfooter, #playerfooter .player-toolbar{width:640px !important}#playerheader{height:44px !important;padding:5px 10px !important}#playerheader .circle-thumb{width:30px !important;height:30px !important}.broadcast-info{width:}.main-content .main-player{border-radius:0 !important;width:643px !important}button.next-fan,button.prev-fan{top:45px !important;height:39px !important}button.next-fan{right:1px !important}button.prev-fan{left:1px !important}.giftImg{float:left;margin-right:5px}div div.connected{border:none !important;background:transparent !important}.end-of-broadcast-container .stats-container .details .detail-container{width:280px !important;padding-left:15px !important;padding-right:15px !important}img.circle-thumb{visibility:hidden !important}div img.circle-thumb[src*=\"http\"]{visibility:visible !important}a:hover{text-decoration:none !important}div.audience-summary.refresh i.ynicon{height:12px !important;width:12px !important}.line-clamp:after{display:none}.newFooter{margin-top:15px;clear:both;bottom:0}.main-left{display:block !important;clear:both !important}.main-right{display:block !important;clear:both !important}#guestpanel .guest,.guest-nav{width:calc(100% - 2px) !important}#main{width:1265px !important;clear:both !important;display:block !important;margin:41px auto 0 !important}.tag .result{width:222px !important}.overlay{background-color:rgba(50,50,50,0.5) !important}.navbar-content .nav-logo{line-height:35px !important;margin-right:26px !important; background-color: none !important; width: 224px !important; }.navbar{height:42px !important;min-height:42px !important;border-bottom:1px solid !important}.search-box{margin-top:0 !important}.main-channel-detail{margin-left:0 !important}.navbar-content{height:40px !important;padding-right:0 !important}.search-box .ynicon-search{right:unset !important;top:8px !important;left:-30px !important;font-size:20px !important}.searchResult .userInfo,.searchResult .description{width:270px !important}.searchResult .userInfo .description,.searchResult .description .description{width:265px !important}.searchResult .userInfo .short-text,.searchResult .description .short-text{width:225px !important}.search-title{margin:0 0 4px !important}.navbar-content .search-box .dropdown-menu{margin-top:29px !important;width:365px !important}.tiny-search-bar .search-field{padding:0 !important}.navbar-content .tiny-search-active .search-field{padding:6px 12px !important}.tiny-search-active .ynicon-close{top:12px !important;right:3px !important}.search-box{height:35px !important;margin-left:10px !important}.search-box .search-field:focus{border-bottom:none !important}.search-box .search-field{margin-left:0 !important;height:39px !important;border-bottom:none !important;margin-top:0 !important}.navbar-content .user-actions{margin-top:5px;!important}.explore-text.pull-left{margin-left:10px !important;margin-top:6px !important}.user-menu{margin-top:5px !important}.user-menu .circle-thumb{width:30px !important;height:30px !important}#notifications-dropdown{margin-top:3px !important}#notifications-dropdown .ynicon{font-size:26px !important}.notifications{margin-right:5px !important}.notifications .dropdown-menu{margin-top:35px !important;margin-right:-10px !important}.notifications .ynicon-carrot-up{margin-top:-6px !important}.user-menu .ynicon-carrot-up{margin-top:-1px !important}.user-menu .dropdown-menu{margin-top:30px !important;margin-right:-20px !important}.navbar-content .user-actions{margin-top:4px !important}.navbar .gradient-accent,.navbar .progress-buffer{height:2px !important}.main-content .main-content-left{margin-left:0 !important}.main-content.main-async .main-content-left .user-cover{width:645px !important;height:254px !important}.main-content .main-content-left{width:645px !important;margin-left:0 !important}#playerheader .broadcaster-tag{margin-top:3px !important}.nav-absolute .header-nav-text{padding-top:2px !important;padding-bottom:2px !important;font-size:14px !important}.nav-absolute{left:270px !important}#momentpanel{padding-left:20px !important;padding-right:20px !important}#sharepanel{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.main-content{width:1039px !important}#main .main-content.main-async .main-content-right{margin-left:-2px !important}.main-content .main-content-right{margin-left:-2px !important;position:fixed}#playerfooter{height:35px !important}.player-toolbar-left{padding-top:7px !important;padding-left:6px !important}#toolbar-like-button img{width:24px !important;margin-top:-2px !important}.player-toolbar-left .ynicon{font-size:14px !important}#broadcast-moment .ynicon{font-size:14px !important}.player-toolbar-right{padding:2px 10px 0 0 !important}.playerfooterExtra{height:15px;line-height:10px;padding-left:10px;padding-right:10px;font-size:11px;border-bottom:1px solid}.playerfooterExtra .left{float:left}.playerfooterExtra .right{float:right}.playerfooterControl{padding-top:5px;padding-bottom:5px;border-bottom:1px solid;float:left;width:100%}.playerfooterControl div{float:left}.playerfooterControl .header{padding-left:10px;padding-right:10px;float:left;clear:both;font-size:12px;height:25px;width:100%;line-height:25px;border-bottom:1px solid;margin-bottom:5px;padding-right:10px;padding-left:10px}.playerfooterControl .header div{padding-right:10px;font-weight:bold;cursor:pointer;padding-left:10px;border:0 solid;margin-right:5px;border-radius:5px 5px 0 0}.playerfooterControl .header div img{height:20px}.playerfooterControl .content{float:left;clear:both;width:100%;padding-left:10px;padding-right:10px}.playerfooterControl .content div{padding-right:10px}.playerfooterControl .content div .label{float:left;clear:both;font-size:11px;width:100px;text-align:right !important;height:22px;margin-right:0 !important;line-height:22px;padding-right:0 !important;margin-right:5px !important}.playerfooterControl .content div .input{float:left;width:195px;padding-right:0 !important;margin-right:5px}.playerfooterControl .content div .notice{font-size:11px;width:305px;float:left;padding-top:5px}.playerfooterControl .content div .text{float:left;clear:both;font-size:11px}.playerfooterControl .content div .error{float:left;clear:both;margin-left:105px;font-size:10px;color:#f66 !important}.playerfooterControl .content div .submit{width:300px;padding-right:0 !important;margin-top:5px}.playerfooterControl .content div .submit button{float:right}.playerfooterControl .content div .input input{border:1px solid;width:195px;font-size:12px;height:20px}.playerfooterControl .content div .input textarea{border:1px solid;width:195px;border:1px solid #fff;font-size:12px;height:50px;float:left;clear:both}.playerfooterStats{padding-left:10px;padding-top:5px}.playerfooterStats .container{margin-right:10px;float:left;width:148px}.playerfooterStats .container .left{float:left;font-size:11px;width:68px;font-weight:bold}.playerfooterStats .container .right{font-size:11px;float:right;text-align:right;width:80px}.playerfooterStats .container canvas{clear:both;float:left}.chat-input select,.playerfooterControl .input select{border:1px solid;width:70px}.playerfooterControl .input select{width:195px}.switchHeader{float:left;clear:both;width:100%}.switchHeader div{float:left;height:23px;width:37.5px;cursor:pointer;text-align:center}.identities>div{float:left;width:120px;height:150px}.identities div img{width:120px;height:120px}.identities div .name span{margin-right:5px}.identities div .name{font-size:11px;float:left;clear:both;padding:0}.identities div .coins{float:left;clear:both;padding:0;font-weight:bold;font-size:12px}";
