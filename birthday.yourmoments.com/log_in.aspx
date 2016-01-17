
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:fb="https://www.facebook.com/2008/fbml">
<head><title>
	Log In - Your
        Moments
</title><meta name="description" content=" Create a free account with Your Tribute to add content to other user’s memorials or create your own free obituary. " /><meta name="keywords" content="online memorial, memorial tribute, online obituary, free obituary, memorial website, permanent memorial, your tribute" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta http-equiv="Content-Language" content="en-ca" /><meta http-equiv="imagetoolbar" content="false" /><meta name="robots" content="index,follow" /><meta http-equiv="Expires" content="0" /><meta http-equiv="Cache-Control" content="no-store" /><meta http-equiv="Cache-Control" content="no-cache" /><meta http-equiv="Pragma" content="no-cache" /><meta name="MSSmartTagsPreventParsing" content="true" />
    <!-- really basic, generic html class stylesheet -->
    <link rel="stylesheet" type="text/css" media="screen, projection" href="http://www.yourmoments.com/assets/css-YM/default.css" />
    <!-- default grid layout stylesheet -->
    <link rel="stylesheet" type="text/css" media="screen, projection" href="http://www.yourmoments.com/assets/css-YM/layouts/centered1024_1.css" />
    <!-- print-friendly stylesheet -->
    <link rel="stylesheet" type="text/css" media="print" href="http://www.yourmoments.com/assets/css-YM/print.css" />
    <!-- screen elements stylesheet should be here -->
    <!--[if !IE 7]>
     <!-->
    <link rel="stylesheet" type="text/css" href="http://www.yourmoments.com/assets/css-YM/ScreenLatest.css" />
    <!--<![endif]-->
    <link rel="stylesheet" type="text/css" href="http://www.yourmoments.com/assets/css-YM/PopUp.css" />
    <!--[if IE 7]>
        <link rel="stylesheet" type="text/css" href="http://www.yourmoments.com/assets/css-YM/ScreenLatestIE7.css" />
    <![endif]-->
    <!-- larger text stylesheets -->
    <link rel="alternate stylesheet" type="text/css" media="screen, projection" href="../assets/css-YM/medium_text.css"
        title="medium_text" />
    <link rel="alternate stylesheet" type="text/css" media="screen, projection" href="../assets/css-YM/large_text.css"
        title="large_text" />
    <!-- Website Favorite Icon -->
    <link rel="Shortcut Icon" type="image/x-icon" href="Sonam/assets/images/favicon.ico" />
    

    <script type="text/javascript" src="../assets/scripts/mootools-1.11.js"></script>

    <script type="text/javascript" src="../assets/scripts/global.js"></script>

    <script type="text/javascript" src="../assets/scripts/styleSwitcher.js"></script>

    <script type="text/javascript" src="../Common/JavaScript/Common.js"></script>
    
    <!--<script src="https://connect.facebook.net/en_US/all.js" type="text/javascript"></script>-->

    <script src="https://connect.facebook.net/en_US/all.js" type="text/javascript"></script>

    <script type="text/javascript" language="javascript">

        function HideIndecator() {
            var error1 = document.getElementById('errorUserName');
            var error2 = document.getElementById('errorPwd');
            if (error1) {
                error1.style.visibility = 'hidden';
            }
            if (error2) {
                error2.style.visibility = 'hidden';
            }
            Hideheader();
        }

        function Hideheader() {
            var Notice = document.getElementById('Notice');
            if (Notice != null) {
                Notice.innerHtml = '';
                Notice.style.visibility = 'hidden';
            }
        }
        function checkUserName() {
            if (!window.document.URL.search("localhost")) {
                if ($('txtLoginUsername')) {
                    var txtVal = $('txtLoginUsername').value;
                    var regEmailStr = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}";
                    var regUserNameReg = "[A-Za-z0-9]";
                    var EmailReg = new RegExp(regEmailStr);
                    var UserNameReg = new RegExp(regUserNameReg);
                    if (txtVal.match(EmailReg))
                        return true;
                    else if (txtVal.match(UserNameReg))
                        return chkForMaxLength(16, txtVal.length);
                    else
                        return false;
                }
                else return true;
            }
            else return true;
        }

        function CheckUsernameLength(UserName) {
            var bol = true;
            if ((UserName.length >= 4) && (UserName.length <= 16)) {
                bol = true;
            }
            else {
                bol = false;
            }
            return bol;
        }

        function CheckPasswordLength(Password) {

            var bol = true;
            if (Password.length != 0) {
                if ((Password.length >= 6) && (Password.length <= 50))
                    bol = true;
                else
                    bol = false;
            }
            else {
                bol = true;
            }
            return bol;
        }

        function ymChanges() {
        LogOut();
            if ('YourMoments' == 'yourmoments') {
                if (document.getElementById('LoginBtnDiv') != null) {
                    document.getElementById('LoginBtnDiv').className = "yt-Form-Buttons";
                }
                if (document.getElementById('divlbtn') != null) {
                    document.getElementById('divlbtn').className = "yt-Form-Submit";
                }
                if (document.getElementById('lbtnLogin') != null) {
                    document.getElementById('lbtnLogin').className = "yt-Button yt-ArrowButton";
                    document.getElementById('lbtnLogin').innerHTML = "Log In";
                }
            }
        }	
        //Added by LHK -28 03 2012 - for tribute home page login button functionality.
    function LogOut() {
    var str = window.location.href;
        if((str.indexOf("&session=logout")) > 0)
        {
            Users_log_in.UserLogOut();
            deleteAllCookies();
            fb_logout();
            window.location=str.replace("&session=logout", "");
            //  FB.logout();
            //        window.location.reload();
        }

    }
    function deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }

    }  
    </script>

    <script type="text/javascript">
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
    try {
        var pageTracker = _gat._getTracker("UA-3723668-9");
        pageTracker._setDomainName(".yourtribute.com");
        pageTracker._trackPageview();
    } catch (err) { }</script>		
</head>
<body onload="javascript:ymChanges();">
    <form name="ctl01" method="post" action="/log_in.aspx" id="ctl01">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE2NDAyNTc4MjYPZBYEAgEQZGQWEGYPZBYKZg8WBB4EaHJlZgUbaHR0cDovL3d3dy55b3VybW9tZW50cy5jb20vHgV0aXRsZQUgUmV0dXJuIHRvIFlvdXIgVHJpYnV0ZSBIb21lIFBhZ2VkAgEPFgIeB1Zpc2libGVoFgICAQ9kFgJmDw8WAh8CaGRkAgIPFgIeCWlubmVyaHRtbAU9PGEgY2xhc3M9J3l0LWhvcml6b250YWxTcGFjZXInIGhyZWY9J2xvZ19pbi5hc3B4JyA+TG9nIGluPC9hPmQCAw8WAh8CaGQCBA8WAh8CZ2QCBQ8PZBYCHglvbmtleWRvd24FsAFKYXZhU2NyaXB0OmlmKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpe2lmICgoZXZlbnQud2hpY2ggPT0gMTMpIHx8IChldmVudC5rZXlDb2RlID09IDEzKSkge2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYnRuTG9naW4nKS5jbGljaygpO3JldHVybiBmYWxzZTt9fSBlbHNlIHtyZXR1cm4gdHJ1ZX07IGQCCg8PZBYCHwQFsAFKYXZhU2NyaXB0OmlmKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpe2lmICgoZXZlbnQud2hpY2ggPT0gMTMpIHx8IChldmVudC5rZXlDb2RlID09IDEzKSkge2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYnRuTG9naW4nKS5jbGljaygpO3JldHVybiBmYWxzZTt9fSBlbHNlIHtyZXR1cm4gdHJ1ZX07IGQCDQ9kFgICAQ8PZBYCHgdvbmNsaWNrBRtKYXZhU2NyaXB0OkhpZGVJbmRlY2F0b3IoKTtkAg4PFgIfAmhkAg8PFgIfAmdkAhAPFgIfAmhkAhEPZBYGZg8WAh8CaBYCAgEPD2QWAh8FBRZyZXR1cm4gVmFsaWRhdGVGb3JtKCk7ZAIBDxYCHwJnZAICD2QWBmYPDxYCHgRUZXh0BQQyMDE2ZGQCAQ8WAh8CaGQCAg8WAh8CZ2QCAw8WAh8GBQVmYWxzZWRkcLtCWSm2MiAunaFEr+HWlNjvdYQ=" />
</div>

<script type="text/javascript" src="/ajax/common.ashx"></script><script type="text/javascript" src="/ajax/Users_log_in,App_Web_dtg1m5bp.ashx"></script>
    <div id="fb-root">
    </div>
    <div class="yt-Container yt-LoginForm yt-AnonymousUser">
        
<div id="divShowModalPopup">
</div>
<div id="fb-root">
</div>
<div class="yt-HeaderContainer">
    <div class="yt-Header">
        <a href="http://www.yourmoments.com/" id="ytHeader_logo" class="yt-Logo" title="Return to Your Tribute Home Page">
        </a>
        <!-- Use this line for server and comment the line written above (Line-193) -->
        <div class="yt-HeaderControls">
            <div class="yt-NavHeader">                
                <div class="yt-UserInfo">
                                
                    <span id="header_user_name" class="spanUserName">
                        
                    </span><span id="ytHeader_spanLogout"><a class='yt-horizontalSpacer' href='log_in.aspx' >Log in</a></span>                    
                </div>
            </div>
            <div class="hack-clearBoth">
            </div>
            <div class="yt-NavigationHeader">
            
            </div>
            <!-- Your tribute header for Your Moments-->
            <div id="ytHeader_topNavigationYM" class="yt-topNavigation">
                <ul id="ym-globalNav"  >
                    <li id="ym-globalMenuItem1"  class="non-current"><a href="http://www.yourmoments.com/">
                        Home</a></li>
                    <li id="ym-globalMenuItem2"  class="non-current"><a href="http://www.yourmoments.com/tour.aspx">
                        Tour</a></li>
                    <li id="ym-globalMenuItem3"  class="non-current"><a href="http://www.yourmoments.com/features.aspx">
                        Features</a></li>
                    <li id="ym-globalMenuItem4"  class="non-current"><a href="http://www.yourmoments.com/examples.aspx">
                        Themes</a></li>
                    <li id="ym-globalMenuItem5"  class="non-current"><a href="http://www.yourmoments.com/pricing.aspx">
                        Pricing</a></li>
                </ul>
            </div>
            <!--yt-HeaderControls-->
            
        </div>
        <!--yt-Header-->
    </div>
</div>
<script type="text/javascript">
    App_Domain = "http://www.yourmoments.com/";
    var user_connected_to_fb = false;

         window.fbAsyncInit = function () {
         FB.init({ appId: '241623515894807', status: true, cookie: true, xfbml: true,oauth:true});
        
         FB.getLoginStatus(function(response) {
        if (response.authResponse){
        if(typeof update_user_is_connected=='function')
         update_user_is_connected();}
        else
        {
        if(typeof update_user_is_not_connected=='function')
         update_user_is_not_connected();
        }
    });

  
    FB.Event.subscribe('auth.login', function(response) {
       if(typeof update_user_is_connected=='function')
         update_user_is_connected();
    });
     }(function () {

        var e = document.createElement('script');

        e.type = 'text/javascript';

        e.src = document.location.protocol +

                    '//connect.facebook.net/en_US/all.js';

        e.async = true;

        document.getElementById('fb-root').appendChild(e);

    } ());

    function fb_logout() {  
        FB.getLoginStatus(function(response) {        
        if (response.authResponse){        
        FB.logout(function(response) {        
  window.location='http://birthday.yourmoments.com/Logout.aspx';
  });  }
        else
        {               
        }
    });            
   };              
    
    function fb_err_logout(){
      FB.logout(function() {
         var url = location.href;
         // append a timestamp to make sure the url seems different to the browser
         url = (url + (url.indexOf('?') > -1 ? '&' : '?') + (new Date()).getTime());
         window.location.href = url;
      });
    };
    
     function publish_stream(msg, attachment, action_link, target_id, msg_prompt, callback_fn) {
        if(user_connected_to_fb) {   
            FB.api('/me', function (response) {                    
               FB.ui(
                {
                    method: 'stream.publish',
                    message: msg,
                    attachment:attachment ,
                    action_links: action_link,
                    user_prompt_message: msg_prompt
                },callback_fn
                );
                });
        }
    };

    function doAjaxLogin() {
    if(typeof Ajax=='function')
    {
       new Ajax("http://birthday.yourmoments.com/AjaxLogin.aspx", {
		method: 'get',
		data: {"action":'facebookLogin'},
		onComplete: function(rs){
		    res = Json.evaluate(rs);
            if(res.showDialog) {      
                FB.login(function (response) {
                    if (response.authResponse) {    
                        // user authorized                       
                        popupFbSignUp(); 
                    } else {
                        // user cancelled                    
                    }
                }, { scope: 'email' });
            } else if (res.refreshPage) {
                window.location.reload();
            } else if(res.messageText.length>0){
                if($('mb_Error'))
                $('mb_Error').innerHtml = res.messageText;
            }		  
		}
	  }).request();
      }
    };
        
    function doFacebookSignup(){   
      if ($('yt-fb-signup')) $('yt-fb-signup').remove();
      new Element('img').setProperties({"src":'assets/images/ajax-loader.gif', 
                                        "class":'loader_indicator',
                                        "id":'waitIndicator'}).injectInside($('mb_contents'));            
       new Ajax("http://birthday.yourmoments.com/AjaxLogin.aspx", {
		method: 'get',
		data: {"action":'facebookSignup'},
        onComplete: function(res){
		        res = Json.evaluate(res);       
                if(res.messageText.length>0) {
                    if ($('waitIndicator')) $('waitIndicator').remove();
                    $('mb_Error').innerHtml = res.messageText;
                } else if (res.refreshPage) {
                    window.location.reload();
                }
		    }
	    }).request();
    };
    
    function popupFbSignUp() {  
        var closeFacebookSignUp = function() {
            if ($('mb_Title')) $('mb_Title').remove();
            if ($('yt-fb-signup')) $('yt-fb-signup').remove();
        }
        var indicator_img = new Image(48,48); 
        indicator_img.src="assets/images/ajax-loader.gif"; 
        
        FB.api('/me', function (response) {   
                    var query = FB.Data.query('select name from user where uid={0}', response.id);
                    query.wait(function (rows) {     
            customModalBox.htmlBox('', '<div id="yt-fb-signup">You will now be connected to Your Moments<br/>through Facebook as ' +
        "<a href='http://www.facebook.com/profile.php?id=" + response.id +
        "' target='_blank'>" + rows[0].name + "</a>" +
        '<a href="javascript:doFacebookSignup()" class="btn_fb_signup yt-Button" id="btn_fb_create">CONTINUE</a>'+        
        'Do you already have a Your Moments Account?'+
        '<a href="http://birthday.yourmoments.com/log_in.aspx?ytfblink=yes&location='+encodeURIComponent(location.href)+'" class="btn_fb_signup" id="btn_fb_associate">Click here to connect it to Facebook</a></div>',
        'FacebookSignUp');

            buttonStyles();
                        
            $('mb_contents').addClass('yt-Panel-Primary');
            new Element('h2').setHTML('Facebook Connected').setProperty('id', 'mb_Title').injectTop($('mb_contents'));
           
            $('mb_close_link').addEvent('click', closeFacebookSignUp);
            $('btn_fb_associate').addEvent('click', function() {
                $('mb_close_link').fireEvent('click');
                customModalBox.close();
            });
        });
   });
    };
    function replace_submit_with_stream(click_id, facebook_box_id, msg_fn, attach_fn, action_fn) {
        var old_href = $(click_id).getProperty('href');
        if(old_href) {
            old_href.replace("javascript:", "");
        }
        var old_href_fn = function() {
            try {
                eval(old_href);
            } catch(e) {
                //console.log(e);
            }
        };
        
        $(click_id).setProperty('href', "javascript:");
        $(click_id).addEvent('click', function() {
            //check to make sure the box was checked to publish the stream, if not, just call the old_href function
            if($$('#'+facebook_box_id).length == 0 || !$$('#'+facebook_box_id)[0].checked) {
                old_href_fn();
                return;
            }
            publish_stream(msg_fn(), attach_fn(), action_fn(), null, null, old_href_fn);
        });
    };
    
    function header_user_is_connected() {
        user_connected_to_fb = true;

        $(document).fireEvent("fb_connected");
        if ($('header_logout')) {
            var logout_link = $('header_logout');
            logout_link.addEvent('click', fb_logout);
	        logout_link.href = "#";    
        }
    };

    function header_user_is_not_connected() {      
        if ($('header_logout')) {
            var logout_link = $('header_logout');
            logout_link.innerHTML = "Log out";
            logout_link.href = 'http://birthday.yourmoments.com/Logout.aspx';
            logout_link.removeEvent('click', fb_logout);
        }                 
    };  
</script>

        <!--yt-HeaderContainer-->
        <div class="hack-clearBoth">
        </div>
        <div class="yt-ContentContainer">
            <div class="yt-ContentContainerInner">
                <div id="divShowModalPopup">
                </div>
                <div class="yt-ContentPrimaryContainer">
                    <div class="yt-ContentPrimary">
                        <div>
                            
                            <div id="Panel3" style="width:656px;">
	
                                
                            
</div>
                            
                            <br />
                            <br />
                        </div>
                        <div class="yt-Panel-Primary">
                            <h2>
                                Already a Member?</h2>
                            <fieldset class="yt-Form">
                                <div id="yt-LoginFormContainer">
                                    
                                    <p id="P1">
                                        Login here to connect your facebook login to your account</p>
                                    
                                    <div class="yt-Form-Field">
                                        <label for="txtLoginUsername" id="lblUsername">Username/Email:</label>
                                        <input name="txtLoginUsername" type="text" maxlength="250" id="txtLoginUsername" tabindex="1" class="yt-Form-Input" onkeydown="JavaScript:if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {document.getElementById('lbtnLogin').click();return false;}} else {return true}; " />
                                        &nbsp;
                                        &nbsp;
                                        
                                    </div>
                                    <div class="yt-Form-Field">
                                        <label for="txtLoginPassword" id="lblPassword">Password:</label>
                                        <input name="txtLoginPassword" type="password" maxlength="50" id="txtLoginPassword" tabindex="2" class="yt-Form-Input yt-Form-Input-Password" onkeydown="JavaScript:if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {document.getElementById('lbtnLogin').click();return false;}} else {return true}; " />
                                        
                                        &nbsp;
                                    </div>
                                    <div id="LoginBtnDiv" class="Login-Button">
                                        <div id="divlbtn" class="Login-btn">
                                            <p>
                                                <a onclick="JavaScript:HideIndecator();" id="lbtnLogin" tabindex="3" class="BlueLoginButton" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;lbtnLogin&quot;, &quot;&quot;, true, &quot;LoginCheck&quot;, &quot;&quot;, false, true))"></a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <p>
                                        <a href="#" onclick="UserLoginModalpopupFromLoginPage(location.href,document.title);">
                                            Did you forget your password?</a>
                                    </p>
                                    
                                </div>
                            </fieldset>
                        </div>
                        
                        <div id="signUpYm" class="yt-Panel-Primary yt-Panel-Extra">
                            <h2>
                                Not a Member Yet?</h2>
                            <p>
                                Sign up to become a member of Your Tribute, and collaborate on existing tributes
                                or create your own.
                            </p>
                            <ul>
                                <li>It’s fast! </li>
                                <li>It’s free!</li>
                            </ul>
                            <div class="yt-Form-Buttons">
                                <div class="yt-Form-Submit">
                                    <a id="LinkButton2" class="yt-Button yt-ArrowButton" href="javascript:__doPostBack('LinkButton2','')">Sign  up</a>
                                </div>
                            </div>
                            <p>
                                <a href="features.aspx">Take a tour.</a></p>
                            <div class="yt-Form-Buttons" id="ShortFacebookSignUpYm">
                                <div class="yt-Form-Submit">
                                    <a id="LinkButton3" class="yt-Button yt-ArrowButton" href="javascript:__doPostBack('LinkButton3','')">Just create empty Account with Facebook credentials</a>
                                </div>
                            </div>
                        </div>
                        <div class="hack-clearBoth">
                        </div>
                        
                    </div>
                    <!--yt-ContentPrimary-->
                </div>
                <!--yt-ContentPrimaryContainer-->
                <div class="hack-clearBoth">
                </div>
                <div class="yt-ContentContainerImage">
                </div>
            </div>
            <!--yt-ContentContainerInner-->
        </div>
        <!--yt-ContentContainer-->
        <!--<div class="yt-Footer">-->
        

<script type="text/javascript" language="javascript" src="../Common/JavaScript/FooterControl.js"></script>

<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>

<script src="https://platform.twitter.com/widgets.js" type="text/javascript"></script>

<script type="text/javascript" language="Javascript">
    function echeck(str) {

        var at = "@";
        var dot = ".";
        var lat = str.indexOf(at);
        var lstr = str.length;

        if (str.indexOf(dot) == lstr - 1) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.indexOf(at) == -1) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.indexOf(at, (lat + 1)) != -1) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.indexOf(dot, (lat + 2)) == -1) {
            alert("Invalid E-mail ID");
            return false;
        }

        if (str.indexOf(" ") != -1) {
            alert("Invalid E-mail ID");
            return false;
        }

        return true;
    }


    function validateEmail(email) {

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = email;
        if (reg.test(address) == false) {
            alert('Invalid Email Address');
            return false;
        }
    }

    function ValidateForm() {
        var emailID = document.getElementById("Footer1_txtEmailAddress");
        if ((emailID.value == null) || (emailID.value == "")) {
            alert("Please Enter your Email ID");
            emailID.focus();
            return false;
        }
        if (emailID.value == "Enter your email address") {
            alert("Please Enter your Email ID");
            emailID.focus();
            return false;
        }
        if (validateEmail(emailID.value) == false) {
            emailID.value = "";
            emailID.focus();
            return false;
        }
        return true;
    }

    function ValidateForm1() {
        var emailID = document.getElementById("Footer1_TextBox1");
        if ((emailID.value == null) || (emailID.value == "")) {
            alert("Please Enter your Email ID");
            emailID.focus();
            return false;
        }
        if (emailID.value == "Enter your email address") {
            alert("Please Enter your Email ID");
            emailID.focus();
            return false;
        }
        if (validateEmail(emailID.value) == false) {
            emailID.value = "";
            emailID.focus();
            return false;
        }
        return true;
    }
    
</script>

<div class="hack-clearBoth">
</div>
<div class="yt-FooterContainer">
    
    <div id="Footer1_yourmomentsFooter" class="ym-Footer">
        <div class="ym-FooterNewsletter">
            <h6>
                Your Moments Newsletter</h6>
            <p>
                Subscribe to our newsletter to receive special offers, company news and website
                tips and tricks:
            </p>
            <input name="Footer1$TextBox1" type="text" value="Enter your email address" id="Footer1_TextBox1" class="ym-Txt" />
            <input type="submit" name="Footer1$Button1" value="Subscribe" onclick="return ValidateForm1();" id="Footer1_Button1" class="ym-Btn" />
            <!--Script to clear the text box on focus-->

            <script type="text/javascript">

                var txtbox = document.getElementById("Footer1_TextBox1");
                txtbox.onfocus = function() {
                    if (this.defaultValue == this.value);
                    this.value = "";
                };
            </script>

            
            <div style="min-height: 35px; width: 350px; color: Red;">
                <span id="Footer1_lblErrorYm"></span>
            </div>
        </div>
        <div class="ym-FooterSitemap">
            <div class="ym-FooterNavColumn">
                <h6>
                    Explore</h6>
                <ul>
                    <li><a href="http://www.yourmoments.com/">Home</a></li>
                    <li><a href="http://www.yourmoments.com/tour.aspx">Tour</a></li>
                    <li><a href="http://www.yourmoments.com/features.aspx">Features</a></li>
                    <li><a href="http://www.yourmoments.com/examples.aspx">Examples</a></li>
                    <li><a href="http://www.yourmoments.com/pricing.aspx">Pricing</a></li>
                    <li><a href="http://www.yourmoments.com/advancedsearch.aspx">Search</a></li>
                </ul>
            </div>
            <div class="ym-FooterNavColumn">
                <h6>
                    Company</h6>
                <ul>
                    <li><a href="http://www.yourmoments.com/about.aspx">About</a></li>
                    <li><a href="http://www.yourmoments.com/contact.aspx">Contact</a></li>
                    <li><a href="http://www.yourmoments.com/advertise.aspx">Advertise</a></li>
                    <li><a href="http://www.yourmoments.com/termsofuse.aspx">Terms of Use</a></li>
                    <li><a href="http://www.yourmoments.com/privacy.aspx">Privacy Policy</a></li>
                    
                    <li><a href="mailto:support@yourmoments.com" target="_blank">Help</a></li>
                </ul>
            </div>
        </div>
        <div class="ym-FooterSocial">
            <div class="ym-FooterNavColumn ym-FootCol3">
                <h6>
                    Follow Us</h6>
                <ul>
                    <li class="twitter"><a href="http://twitter.com/yourtribute" target="_blank">Twitter</a></li>
                    <li class="facebook"><a href="http://www.facebook.com/yourtribute" target="_blank">Facebook</a></li>
                    <li class="blog"><a href="http://blog.yourtribute.com/rss" target="_blank">
                        Blog</a></li>
                </ul>
            </div>
            <div class="ym-FooterNavColumn">
                <h6>
                    Your Moments</h6>
                
                <ul class="ym-FooterPetalImages">
                    <li><a href="http://newbaby.yourmoments.com">
                        New Baby</a></li>
                    <li><a href="http://wedding.yourmoments.com">
                        Wedding</a></li>
                    <li><a href="http://anniversary.yourmoments.com">
                        Anniversary</a></li>
                    <li><a href="http://graduation.yourmoments.com">
                        Graduation</a></li>
                    <li><a href="http://birthday.yourmoments.com">
                        Birthday</a></li>
                </ul>
                
            </div>
        </div>
    </div>
</div>
<div id="CopyRightDiv" style="font-size: 10px; float: right">
    <div id="Footer1_CopyRightSize">
        <div style="float: left">
            &copy;<span id="Footer1_lblCopyRight">2016</span>&nbsp;
        </div>
        <span id="Footer1_copyRightYM">Your Moments, Inc. All Rights
            Reserved.</span></div>
</div>


        <!-- </div>-->
        <!--yt-Footer-->
    </div>
    <!--yt-Container-->
    <div class="upgrade">
        <h2>
            Please Upgrade Your Browser</h2>
        <p>
            This site's design is only visible in a graphical browser that supports <a href="http://www.webstandards.org/upgrade/"
                title="The Web Standards Project's BROWSER UPGRADE initiative.">web standards</a>,
            but its content is accessible to any browser or Internet device.</p>
    </div>
    <!--yt-upgrade-->
    </form>
    
    <!-- Included for Mobile Redirection functionality -- Detect Browser close and delete NoRedirection keyvalue from database -->
    

</body>

<script type="text/javascript" src="../assets/scripts/modalbox.js"></script>

<script type="text/javascript">    
 
    
    window.fbAsyncInit = function () {
         FB.init({ appId: '241623515894807', status: true, cookie: true, xfbml: true,oauth:true});
       
         FB.getLoginStatus(function(response) {
        if (response.authResponse) update_user_is_connected();
        else update_user_is_not_connected();
    });
     }(function () {

        var e = document.createElement('script');

        e.type = 'text/javascript';

        e.src = document.location.protocol +

                    '//connect.facebook.net/en_US/all.js';

        e.async = true;

        document.getElementById('fb-root').appendChild(e);

    } ());    
    
    
    function fb_logout() {
      FB.logout(function(){
       var url = location.href;
       url = (url+(url.indexOf('?') > -1 ? '&' : '?')+(new Date()).getTime());
       window.location.href = url;
     });
    }
    
    var doFbLogout = false;
    var showFbDialog = false;
    
    function update_user_is_connected() {
        var user_box = document.getElementById("lblUsername");
        user_box.innerHTML = "Username/Email:";
         var x= document.getElementById("connect_fb_login_instructions");
//        $('connect_fb_login_instructions').style.display = 'block';       
        if(showFbDialog){    
        FB.login(function (response) {
                    if (response.authResponse) {    
                        // user authorized
                        popupFbSignUp(); 
                    } else {
                        // user cancelled
                    }
                }, { scope: 'email' });                      
         }
         else 
         {
               window.location.reload();          
         }
    }
    function update_user_is_not_connected() {
       if ('YourMoments' == 'yourmoments') {
    var user_box = document.getElementById("lblUsername");
        if(user_box)
        user_box.innerHTML = "Username/Email:<span id='login_option'>OR</span><fb:login-button onlogin=\"doAjaxLogin();\" length=\"small\" scope=\"email,user_about_me,user_location\" ><fb:intl>Connect with Facebook</fb:intl></fb:login-button>";//<a href=\"#\" onclick=\"FB.getLoginStatus(function(){window.location = window.location;}); return false;\" class=\"fbconnect_login_button FBConnectButton FBConnectButton_Small\"> <span id=\"RES_ID_fb_login_text\" class=\"FBConnectButton_Text\">Connect with Facebook</span> </a>";
     }
    else
    {
     var user_box = document.getElementById("lblPassword");
        if(user_box)
        user_box.innerHTML = "Password:<span id='login' >or</span><fb:login-button onlogin=\"doAjaxLogin();\" length=\"small\" scope=\"email,user_about_me,user_location\" ><fb:intl>Connect</fb:intl></fb:login-button>";
    }      
          FB.XFBML.parse();
    }
    
    function doFacebookSignup(){
      if ($('yt-fb-signup')) $('yt-fb-signup').remove();
      new Element('img').setProperties({"src":'assets/images/ajax-loader.gif', "class":'loader_indicator'}).injectInside($('mb_contents'));            
      __doPostBack('FacebookSignUp','');    
    }
    
    function popupFbSignUp() {
        var closeFacebookSignUp = function() {
            if ($('mb_Title')) $('mb_Title').remove();
            if ($('yt-fb-signup')) $('yt-fb-signup').remove();
        }
        var indicator_img = new Image(48,48); 
        indicator_img.src="assets/images/ajax-loader.gif"; 
            
        
         FB.api('/me', function (response) {
                    var query = FB.Data.query('select name from user where uid={0}', response.id);
                    query.wait(function (rows) {     
            customModalBox.htmlBox('', '<div id="yt-fb-signup">You will now be connected to Your Moments <br/>through Facebook as ' +
        "<a href='http://www.facebook.com/profile.php?id=" + response.id +
        "' target='_blank'>" + rows[0].name + "</a>" +
        '<a href="javascript:doFacebookSignup()" class="btn_fb_signup yt-Button" id="btn_fb_create">CONTINUE</a>'+        
        'Do you already have a Your Moments Account?'+
        '<a href="#" class="btn_fb_signup" id="btn_fb_associate">Click here to connect it to Facebook</a></div>',
        'FacebookSignUp');

            //buttonStyles();
                        
            $('mb_contents').addClass('yt-Panel-Primary');
            new Element('h2').setHTML('Facebook Connected').setProperty('id', 'mb_Title').injectTop($('mb_contents'));
           
            $('mb_close_link').addEvent('click', closeFacebookSignUp);
            $('btn_fb_associate').addEvent('click', function() {
                $('mb_close_link').fireEvent('click');
                customModalBox.close();
            });
        });   
   });
   };     

             
</script>

</html>
