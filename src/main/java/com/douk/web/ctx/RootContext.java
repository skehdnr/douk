package com.douk.web.ctx;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@Configurable
@MapperScan(basePackages= {"com.douk.web"})
@ComponentScan(basePackages= {"com.douk.web"})
public class RootContext {

}
