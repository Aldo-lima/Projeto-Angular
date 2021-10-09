package com.teste.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TesteController {
	@RequestMapping("/teste")
	public ModelAndView teste() {
		ModelAndView mv = new ModelAndView("teste");
			return mv;
	 
	}
	
	
}
