package com.douk.web.ctrl;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douk.web.pxy.CrawlingProxy;

@RestController
@RequestMapping("/crawls")

public class CrawlCtrl {
	@Autowired CrawlingProxy crawler;
	
	@GetMapping("/naver")
	public ArrayList<HashMap<String, String>> naver() {
		return crawler.engCrawling("https://endic.naver.com/?sLn=kr");
	}
	@GetMapping("/cgv")
	public ArrayList<HashMap<String, String>> cgv()  {
		System.out.println("CGV 클릭");
		return crawler.cgvCrawling();
	}
	@GetMapping("/bugs")
	public String bugs() {
		System.out.println("BUGS 클릭");
		return null;
	}
}
