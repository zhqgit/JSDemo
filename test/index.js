function getLength(str){
    //\x00-xff在ASCALL码里面表示都是单字节的
    return str.replace(/[^\x00-xff]/g,"xx").length;
}


function findStr(str,n){
    var tmp = 0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)==n){
            tmp++;
        }
    }
    return tmp;
}

window.onload = function(){
    var aInput = document.getElementsByTagName('input'),
        oName = aInput[0],
        pwd = aInput[1],
        conPwd = aInput[2];
    
    var allP = document.getElementsByTagName('p'),
        name_msg = allP[0],
        pwd_msg = allP[1],
        conPwd_msg = allP[2];
    
    var aEm = document.getElementsByTagName('em');
    var name_length = 0;
    var count = document.getElementById('count');

           
    //用户名的验证
    oName.onfocus = function(){
        name_msg.style.display = 'block';
        name_msg.innerHTML = '<i class="ati"></i>5-25个字符，一个汉字为两个字符，建议使用中文会员名。'
    };

    oName.onkeyup = function(){
        count.style.visibility = 'visible';
        name_length = getLength(this.value);
        count.innerHTML = name_length + '个字符';

        //字符个数为0时，隐藏提示
        if(name_length == 0){
            count.style.visibility = 'hidden';
        }
    };

    oName.onblur = function(){
         //[^A]表示任何不在方括号内的字符
        var re = /[^\w\u4e00-\u9fa5]/g;
        
        //含有非法字符
        if(re.test(this.value)){
            name_msg.innerHTML = '<i class="err"></i>含有非法字符！'
        }
        //输入为空
        else if(this.value == ''){
            name_msg.innerHTML = '<i class="err"></i>不能为空！'            
        }
        //长度超过25个字符
        else if(name_length > 25){
            name_msg.innerHTML = '<i class="err"></i>用户名不能超过25个字符！'                
        }
        //长度少于6个字符
        else if(name_length < 6){
            name_msg.innerHTML = '<i class="err"></i>用户名不能少于6个字符！'                
        }
        //OK
        else{
            name_msg.innerHTML = '<i class="success"></i>OK！'                

        }
    };



    //密码的验证

    pwd.onfocus = function(){
        pwd_msg.style.display = 'block';
        pwd_msg.innerHTML = '<i class="ati"></i>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号！'
    };

    pwd.onkeyup = function(){
        if(this.value.length > 5){
            aEm[1].className = 'active';
            conPwd.removeAttribute('disabled');
            conPwd_msg.style.display = 'block';
            conPwd_msg.innerHTML = '<i class="ati"></i>请再输入一次！';
        }
        else{
            aEm[1].className = '';
            conPwd.setAttribute('disabled','');
            conPwd_msg.style.display = 'none';
        }
        if(this.value.length > 10){
            aEm[2].className = 'active';
        }else{
            aEm[2].className = '';
        }
    };

    pwd.onblur = function(){
        var m = findStr(pwd.value,pwd.value[0]);
        console.log(m);
        var re_n = /[^\d]/g;

        //如果匹配的存在非字母就会返回真
        var re_c = /[^a-zA-Z]/g
        //不能为空
        if(this.value == ''){
            pwd_msg.innerHTML = '<i class="err"></i>密码不能为空！';
        }
        //不能使用相同字符
        else if(m == this.value.length){
            pwd_msg.innerHTML = '<i class="err"></i>不能使用相同字符！';            
        }
        //长度应为6-16个字符
        else if(this.value.length < 6){
            pwd_msg.innerHTML = '<i class="err"></i>密码长度不能少于6个字符！';                        
        }

        else if(this.value.length > 16){
            pwd_msg.innerHTML = '<i class="err"></i>密码长度不能多于16个字符！';                                    
        }
        //不能全为数字
        else if(!re_n.test(this.value)){
            pwd_msg.innerHTML = '<i class="err"></i>密码不能全为数字！';            
        }

        
        //不能全为字母
        else if(!re_c.test(this.value)){
            pwd_msg.innerHTML = '<i class="err"></i>密码不能全为字母！';            
        }
        //OK
        else{
            pwd_msg.innerHTML = '<i class="success"></i>OK！';                        
        }
    };

    //确认密码
    conPwd.onblur = function(){
        if(this.value != pwd.value){
            conPwd_msg.innerHTML = '<i class="err"></i>两次输入的密码不一致！';             
        }else{
            conPwd_msg.innerHTML = '<i class="success"></i>OK！';                         
        }
    }
}