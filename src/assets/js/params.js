// // import $ from jquery 
//     export default{
//         let FLAG = 'false';
//         layui.use(['form', 'colorpicker', 'upload'], function () {
//             var form = layui.form;
//             var colorpicker = layui.colorpicker;
//             var upload = layui.upload;
//             form.on('radio(op)', function (data) {
//                 $("#divButton").show();
//                 var op = data.elem.id;
//                 for (var i in type) {
//                     if (type[i].id == op) {
//                         if (type[i].cmdDownParams != null){
//                             generateParams(type[i].cmdDownParams);
//                         }else {
//                             $("#paramsForm").empty().html("");
//                         }
//                         break;
//                     }
//                 }
//             });
//             generateParams = function(cmdParams){
//                 var html = "";
//                 for (var i in cmdParams) {
//                     if (cmdParams[i].param_type == 'array') {
//                         html += "<div class='layui-form-item'>"
//                         html += "<label class='layui-form-label'>" + cmdParams[i].param_name + "</label>"
//                         html += "<div class='layui-input-inline'>"
//                         html += "<select name='" + cmdParams[i].param_key + "' id='" + cmdParams[i].param_key + "' title='" + cmdParams[i].param_readme + "'>"
//                         var param_val = JSON.parse(cmdParams[i].param_val);
//                         for (var j in param_val) {
//                             html += "<option value='" + param_val[j].value + "'>" + param_val[j].key + "</option>"
//                         }
//                         html += "</select></div></div>"
//                     } else if (cmdParams[i].param_type == 'color') { // 颜色
//                         html += "<div class='layui-form-item'>";
//                         html += "<label class='layui-form-label'>" + cmdParams[i].param_name + "</label>";
//                         html += "<div class='layui-input-inline'>";
//                         html += "<input type='text' placeholder='请选择颜色' name='" + cmdParams[i].param_key + "' id='" + cmdParams[i].param_key + "' title='" + cmdParams[i].param_readme + "' class='layui-input'></div>";
//                         html += "<div class=\"layui-inline\" style=\"left: -11px;\">\n" +
//                             "        <div id=\"coloar_select\"></div>\n" +
//                             "      </div>";
//                         html += "</div>";
//                     } else if (cmdParams[i].param_type == 'image') { // 图片
//                         html += "<div class='layui-form-item'>";
//                         html += "<label class='layui-form-label'>" + cmdParams[i].param_name + "</label>";
//                         html += "<div class='layui-input-inline' id='div_base64'>";
//                         html += "<input type='text' placeholder='请点击上传图片' name='" + cmdParams[i].param_key + "' id='" + cmdParams[i].param_key + "' title='" + cmdParams[i].param_readme + "' class='layui-input'></div>";
//                         html += "<button class=\"layui-btn\" id='uploadImage' type=\"button\" >上传</button>";
//                         html += "</div>";
//                     } else {
//                         html += "<div class='layui-form-item'>";
//                         html += "<label class='layui-form-label'>" + cmdParams[i].param_name + "</label>";
//                         html += "<div class='layui-input-inline'>";
//                         html += "<input  type='text' autocomplete='off'  name='" + cmdParams[i].param_key + "' id='" + cmdParams[i].param_key + "' title='" + cmdParams[i].param_readme + "' class='layui-input'></div>";
//                         html += "</div>";
//                     }
//                 }
//                 $("#paramsForm").empty().html(html);
//                 form.render();
//                 colorpicker.render({
//                     elem: '#coloar_select'
//                     , color: '#1c97f5'
//                     , done: function (color) {
//                         $(this.elem).parent().parent().find("input").val(color);
//                     }
//                 });
//                 upload.render({
//                     elem: '#uploadImage'
//                     , url: '/upload/'
//                     , auto: false
//                     , accrpt: 'image/*'
//                     , choose: function (obj) {
//                         obj.preview(function (index, file, result) {
//                             var base64data = result ? result.split(",")[1] : "";
//                             $("#div_base64").find("input").val(base64data);
//                         });
//                     }
//                 });
    
//             };
//             /**
//              *
//              * @param button 被点击的按钮
//              * @returns
//              */
//             getCmdParams = function(thisDom){
//                 var operation = $("#controlForm input[name='op']:checked").val();
//                 var paramsArray = $("#paramsForm").serializeArray();
//                 var map = {};
//                 $.each(paramsArray, function () {
//                     map[this.name] = this.value
//                 });
//                 var array =  {
//                     operation:operation,
//                     controlParams:map
//                 };
//                 return array;
//             };
    
//             commonSend = function(button) {
//                 if(FLAG === 'false'){
//                     var serial_num = $("#serial_num").val();
//                     var product_code = $("#product_id").val();
//                     var operation = $("#controlForm input[name='op']:checked").val();
//                     var paramsArray = $("#paramsForm").serializeArray();
//                     var token = $("#token").val();
//                     var url = $("#url").val();
//                     var account = $("#account").val();
//                     var flag = true;
//                     $.each(paramsArray, function () {
//                         //做参数验证暂时做非空验证
//                         if (this.value == "") {
//                             var param_name = $("#" + this.name).parent().prev().text();
//                             msg(param_name + "不能为空", '#' + button.id);
//                             flag = false;
//                             return false;
//                         }
//                     });
//                     //参数验证通过发送指令
//                     if (flag) {
//                         var params = $("#paramsForm").serializeObject();
//                         $.ajax({
//                             url: url,
//                             data: JSON.stringify({
//                                 serial_num: serial_num,
//                                 productId: product_code,
//                                 operation: operation,
//                                 controlParams: encodeURIComponent(JSON.stringify(params)),
//                                 account: account
//                             }),
//                             async: true,
//                             dataType: 'json',
//                             contentType: 'application/json',
//                             type: 'post',
//                             success: function (data) {
//                                 if (data.code === 0||data.code === '0') {
//                                     msg('操作成功,' + JSON.stringify(data), '#' + button.id);
//                                 } else if (data.code == '-2') {
//                                     msg('设备无应答', '#' + button.id);
//                                 } else if (data.code == 'AA') {
//                                     msg('发送控制指令失败', '#' + button.id);
//                                 } else {
//                                     msg('控制失败,' + data.message, '#' + button.id)
//                                 }
//                             }
//                         })
//                     }
//                 }
//             }
    
//         });
//         getField = function(flag,array,json){
//             FLAG = flag;
//             $("#serial_num").val(json.serial_num);
//             $("#url").val(json.url);
//             $("#account").val(json.account);
//         }
//         setValue = function (account,serial_num,url) {
//             $("account").val(account);
//             $("serial_num").val(serial_num);
//             $("url").val(url);
//         }
//         saveModel = function () {
//             $("#saveDiv").remove();
//             $("#paramsForm").empty().html("");
//             $("#divButton").hide();
//             var html = '<!DOCTYPE html><html>'+document.getElementsByTagName('html')[0].innerHTML+'</html>';
//             $.post('/productInfo/saveModel',{model:html,product_code:$("#product_id").val()},function (res) {
//                 layer.msg('保存成功!',{
//                     time:500
//                 })
//             });
//         }
//         $.fn.serializeObject = function () {
//             var o = {};
//             var a = this.serializeArray();
//             $.each(a, function () {
//                 if (o[this.name]) {
//                     if (!o[this.name].push) {
//                         o[this.name] = [o[this.name]];
//                     }
//                     o[this.name].push(this.value || '');
//                 } else {
//                     o[this.name] = this.value || '';
//                 }
//             });
//             return o;
//         };
//         msg = function (status, obj) {
//             layui.use('layer', function () {
//                 var layer = layui.layer;
//                 layer.tips(status, obj, {
//                     tips: [2, 'green'],
//                 });
//             })
//         };
//     }
   