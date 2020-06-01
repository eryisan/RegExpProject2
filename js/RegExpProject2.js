var userAccount = document.querySelector("#userAccount"),//用户名
    userPass    = document.querySelector("#userPass"),//登录密码
    userPass_   = document.querySelector("#userPass_"),//确认密码
    userName    = document.querySelector("#userName"),//姓名
    information = document.querySelector("#information"),//身份证
    email       = document.querySelector("#email"),//邮箱
    telephone   = document.querySelector("#telephone"),//电话
    items       = document.querySelectorAll(".item_"),//提示信息
    aCho        = document.querySelector("#choose"),//阅读协议
    oBtn        = document.querySelector("#handup");//提交按钮
var test0 = false,//提交时判断所有信息为true
    test1 = false,
    test2 = false,
    test3 = false,
    test4 = false,
    test5 = false,
    test6 = false;

userAccount.onfocus = function(){
    items[0].innerHTML = "6-30位字母、数字或'_'";
    items[0].style.color = "green";
};
userAccount.onblur = function(){
    var reg  = /^\w{6,30}$/;
    if(this.value == ""){
        items[0].innerHTML = "用户名不能为空";
        items[0].style.color = "red";
    }else{
        if(!reg.exec(userAccount.value)){
            items[0].innerHTML = "6-30位字母、数字或'_'";
            items[0].style.color = "red";
        }else{
            items[0].innerHTML = "格式正确√";
            items[0].style.color = "green";
            text0 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 用户名验证结束
userPass.onfocus = function(){
    items[1].innerHTML = "6-20位字母,数字或符号";
    items[1].style.color = "green";
};
userPass.onblur = function(){
    var reg  = /^\w{6,20}$/;
    if(this.value == ""){
        items[1].innerHTML = "登录密码不能为空";
        items[1].style.color = "red";
    }else{
        if(!reg.exec(userPass.value)){
            items[1].innerHTML = "6-20位字母,数字或符号";
            items[1].style.color = "red";
        }else{
            items[1].innerHTML = "格式正确√";
            items[1].style.color = "green";
            text1 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 登录密码验证结束
userPass_.onfocus = function(){
    items[2].innerHTML = "请确认密码";
    items[2].style.color = "green";
};
userPass_.onblur = function(){
    if(this.value == ""){
        items[2].innerHTML = "确认密码不能为空";
        items[2].style.color = "red";
    }else{
        if(userPass_.value != userPass.value){
            items[2].innerHTML = "两次密码不相同";
            items[2].style.color = "red";
        }else{
            items[2].innerHTML = "格式正确√";
            items[2].style.color = "green";
            text2 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 登录密码验证结束
userName.onfocus = function(){
    items[3].innerHTML = "请输入您的中文名字";
    items[3].style.color = "green";
};
userName.onblur = function(){
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    if(this.value == ""){
        items[3].innerHTML = "姓名不能为空";
        items[3].style.color = "red";
    }else{
        if(!reg.exec(userName.value)){
            items[3].innerHTML = "请输入中文名并确认是正确格式";
            items[3].style.color = "red";
        }else{
            items[3].innerHTML = "格式正确√";
            items[3].style.color = "green";
            text3 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 姓名验证结束
information.onfocus = function(){
    items[4].innerHTML = "请输入您的身份证号码";
    items[4].style.color = "green";
};
information.onblur = function(){
    var reg = /^\d{17}[0-9xX]$/;
    if(this.value == ""){
        items[4].innerHTML = "身份证不能为空";
        items[4].style.color = "red";
    }else{
        if(!reg.exec(information.value)){
            items[4].innerHTML = "请输入身份证号码正确格式";
            items[4].style.color = "red";
        }else{
            items[4].innerHTML = "格式正确√";
            items[4].style.color = "green";
            text4 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 身份证验证结束
email.onfocus = function(){
    items[5].innerHTML = "请输入您的邮箱";
    items[5].style.color = "green";
};
email.onblur = function(){
    var reg = /^\w+@\w+\.[a-zA-Z]{2,4}$/;
    if(this.value == ""){
        items[5].innerHTML = "邮箱不能为空";
        items[5].style.color = "red";
    }else{
        if(!reg.exec(email.value)){
            items[5].innerHTML = "请输入邮箱正确格式";
            items[5].style.color = "red";
        }else{
            items[5].innerHTML = "格式正确√";
            items[5].style.color = "green";
            text5 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 邮箱验证结束
telephone.onfocus = function(){
    items[6].innerHTML = "请输入您的手机号码";
    items[6].style.color = "green";
};
telephone.onblur = function(){
    var reg = /^\d{11}$/;
    if(this.value == ""){
        items[6].innerHTML = "手机号码不能为空";
        items[6].style.color = "red";
    }else{
        if(!reg.exec(telephone.value)){
            items[6].innerHTML = "请输入11位手机号码";
            items[6].style.color = "red";
        }else{
            items[6].innerHTML = "格式正确√";
            items[6].style.color = "green";
            text6 = true;
        }
    }
};
// ----------------------------------------------------------------  ↑ 手机验证结束
oBtn.onclick = function(){
    if(aCho.checked == false ||
        text0       == false ||
        text1       == false ||
        text2       == false ||
        text3       == false ||
        text4       == false ||
        text5       == false ||
        text6       == false ){
            alert("您的信息有误!");
    }else{
            alert("注册成功!");
    }
};