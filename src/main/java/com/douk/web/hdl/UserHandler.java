package com.douk.web.hdl;

import org.apache.ibatis.annotations.Insert;

import com.douk.web.usr.User;

public interface UserHandler {
	@Insert("insert into user (uid,pwd,uname,birth,gender,tel,pettype) values (\n" + 
			"#{uid}, #{pwd},#{uname},#{birth}, #{gender},#{tel},#{pettype})")
	public void insertUser(User u);
}
