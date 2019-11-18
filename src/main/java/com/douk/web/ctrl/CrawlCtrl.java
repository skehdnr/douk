package com.douk.web.ctrl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/crawls/")

public class CrawlCtrl {
	@GetMapping("/naver")
	public String naver() {
		System.out.println("NAVER 클릭");
		return null;
	}
	@GetMapping("/CGV")
	public String cgv() {
		System.out.println("CGV 클릭");
		return null;
	}
	@GetMapping("/BUGS")
	public String bugs() {
		System.out.println("BUGS 클릭");
		return null;
	}
}
