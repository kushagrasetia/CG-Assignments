package com.ks.springcore3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
       // System.out.println( "Hello World!" );
      	 ApplicationContext context3=new ClassPathXmlApplicationContext("config3.xml");
        	BankAccountController obj =(BankAccountController) context3.getBean("bankAccountController");
        	System.out.println(obj);
    }
}
