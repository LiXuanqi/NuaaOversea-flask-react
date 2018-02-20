## 所有接口地址及其简略：

`/session` 登陆、注销

`/users` 获取用户，新增用户 `/users/<user_id>` 用户的增、删、查

`/applications` 获取申请，新增申请 `/applicaitons/<application_id>` 申请的删、改、查

## 详情：

### /users 获取用户、新增用户

#### post 新增用户

##### form-data

```
username: skyduy
nickname: YuJun
password: secret
confirm: secret
role: 1 (其中0为员工，1为超级管理员)

```

##### response(post /accounts)

```
{
  "id": "56ed05cb159ce12c74a634f5",
  "message": "No message",
  "success": 1,
  "token": "kdqdxwJowiraNP3D"
}

```

#### get 获取所有用户

##### param(可选，此时表示过滤：nickname或者username)，当有param时：

```
/accounts?username=skyduy&&nickname=YuJun

```

##### response(get /accounts)

```
{
  "accounts": [
    {
      "id": "56ed05cb159ce12c74a634f5",
      "nickname": "YuJun",
      "role": "stuff"
    },
    {
      "id": "56ed073d159ce12b0c442de8",
      "nickname": "张三",
      "role": "stuff"
    },
    {
      "id": "56ed0805159ce100546b669e",
      "nickname": "张三",
      "role": "admin"
    }
  ]
}

```

### /accounts/account_id:str 用户删、改、查

#### get 查看用户详情信息

##### response(get /accounts/56ed0805159ce100546b669e)

```
{
  "created": "Sat, 19 Mar 2016 16:04:21 -0000",
  "description": "",
  "id": "56ed0805159ce100546b669e",
  "nickname": "张三",
  "role": "admin",
  "username": "yangjing1"
}

```

#### put 查看用户详情信息

##### form-data

```
nickname: '员工of张三'
new_password: 2 （填写该框表示要修改密码，可选）
confirm: 2 （填写该框表示要修改密码，可选）
old_password: 1 （填写该框表示要修改密码，可选）
des: 'new_des' (可选)

```

##### response(put /accounts/56ed073d159ce12b0c442de8)

```
{
  "id": "56ed073d159ce12b0c442de8",
  "message": "user's profile update successfully!",
  "success": 1
}

```

#### delete 删除用户

##### response(delete /accounts/56ed073d159ce12b0c442de8)

```
{
  "message": "No message",
  "success": 1
}
```