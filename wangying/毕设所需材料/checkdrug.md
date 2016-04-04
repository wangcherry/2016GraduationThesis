## 1. 药品验证系统


### **1.1 验证药品**
URL

>*checkdrug/check/checkdrugList.do?checkdrug_id=？&d_id=？

**请求方式**

POST

**请求参数**
|**参数名**|	**类型**|	**备注**|
|---|---|---|
|checkdrug_id|	String| 药品清单id|
|d_id|	String| 药品id|


**响应参数**
|**参数名**|	**类型**|	**备注**|
|---|---|---|
|result|	boolean|药品验证标记,true:验证通过,false:验证失败
|d_name|	String|药品名称|
|d_specification|	String|药品规格|
|d_manufacturer|	String|药品厂商|
|checkdrug_num|	int|药品需要数量|
|checkdrug_produce_date|	String|药单录入时间|
|checkdrug_success_date|	String|药单领取成功时间|
|checkdrug_flag|	int|药单领取标记，0:未领取 ,1:已领取|

**响应示例**
<pre><code>
{ 
  "data":"[
           {
              \"a_id\":0,
              \"a_name\":\"\",
              \"a_password\":\"\",
              \"a_username\":\"\",
              \"checkdrug_flag\":0,
              \"checkdrug_id\":1,
              \"checkdrug_num\":3,
              \"checkdrug_produce_date\":\"\",
              \"checkdrug_success_date\":\"\",
              \"d_id\":\"111\",
              \"d_manufacturer\":\"深圳高卓药业(胶囊)\",
              \"d_name\":\"阿莫西林\",
              \"d_num\":0,
              \"d_specification\":\" 250mg*24 盒（瓶）\",
              \"date\":\"\",
              \"doctor_id\":0,
              \"doctors_age\":\"\",
              \"doctors_departments\":\"内科\",
              \"doctors_id\":0,
              \"doctors_name\":\"寇鑫\",
              \"doctors_password\":\"\",
              \"doctors_sex\":\"男\",
              \"doctors_username\":\"\",
              \"manufacturer_id\":0,
              \"manufacturer_name\":\"\",
              \"u_age\":10,\"u_id\":0,
              \"u_name\":\"王英\",
              \"u_password\":\"\",
              \"u_sex\":\"女\",
              \"u_username\":\"\"
            }
          ]",
  "result":true
}



{
  "data":"",
  "result":false
}




</pre></code>
