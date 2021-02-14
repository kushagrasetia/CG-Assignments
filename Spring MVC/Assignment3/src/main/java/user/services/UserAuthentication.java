package user.services;

public class UserAuthentication {
	private String user="Lakshya";
	private String pass="lucky";
	public boolean userAuth(String username,String password)
	{
		if(username.equalsIgnoreCase(user) && password.equals(pass))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
