 ### 更新点次数

dev.api.6city.com/user/activity/clickCount 
```
	"ShareType":2,
	"UserNo":str,
  "AppKey" : "78701677fa28465ca5fb624a51a9dca4"
```

### 手机验证码

dev.api.6city.com/user/send/phoneCode 
```
"Phone":15021559927,
"AppKey" : "78701677fa28465ca5fb624a51a9dca4"
```
成功时返回
```
Code:0
Message:"成功"
Success:true
```


### 参加活动
dev.api.6city.com/user/activity 
```
	"Phone":"15021559927",
	"PhoneCode":"581148",
	"ShareType":1,
	"UserNo":10010,
  "AppKey" : "78701677fa28465ca5fb624a51a9dca4"
```

###  领取记录
dev.api.6city.com/user/activity/list
  ```
  "AppKey" : "78701677fa28465ca5fb624a51a9dca4"
  ```