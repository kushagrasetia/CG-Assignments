package lang.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class langController {
	@RequestMapping("/login")
	public ModelAndView lang() {
		ModelAndView mv = new ModelAndView("login");
		return mv;
	}
	@RequestMapping("/login.html")
	public ModelAndView lang2() {
		ModelAndView mv = new ModelAndView("login");
		return mv;
	}
	
	@RequestMapping(path="/submit", method=RequestMethod.POST)
	public ModelAndView lang3() {
		ModelAndView mv = new ModelAndView("success");
		return mv;
	}
}
