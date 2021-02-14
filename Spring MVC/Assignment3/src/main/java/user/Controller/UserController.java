package user.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import user.model.User;
import user.services.UserAuthentication;

@Controller
public class UserController {
	
	@RequestMapping(path="process",method=RequestMethod.POST)
	public ModelAndView authenticate(@ModelAttribute User user)
	{
		ModelAndView mv;
		UserAuthentication auth=new UserAuthentication();
		boolean userAuth=auth.userAuth(user.getUsername(),user.getPassword());
		if(userAuth)
		{
			mv=new ModelAndView("success");
		}
		else
		{
			mv=new ModelAndView("error");
		}
		return mv;
		
	}
}
