package simple.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import simple.model.simpleInterestClass;

@Controller
public class SimpleInterestController {
	
	@RequestMapping(path="/process",method=RequestMethod.POST)
	public String handle(@ModelAttribute simpleInterestClass si,Model model)
	{
		model.addAttribute("result", si.getInterest());
		return "calculate";
	}
}
