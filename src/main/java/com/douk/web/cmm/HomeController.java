package com.douk.web.cmm;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.douk.web.pxy.ContextProxy;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired ContextProxy ctx;
	@GetMapping("/")
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! @@@", locale);
		ctx.execute();
		return "home";
	}
	
}
