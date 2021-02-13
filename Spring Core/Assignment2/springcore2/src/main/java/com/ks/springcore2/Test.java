package com.ks.springcore2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test 
{
    public static void main( String[] args )
    {
       // System.out.println( "Hello World!" );
    	
   	 ApplicationContext context2=new ClassPathXmlApplicationContext("config2.xml");
   	ListQuestion listq =(ListQuestion) context2.getBean("listQuestion");
   	System.out.println(listq);
   	
   	MapQuestion mapq =(MapQuestion) context2.getBean("mapQuestion");
   	System.out.println(mapq);
   	
   	SetQuestion setq =(SetQuestion) context2.getBean("setQuestion");
   	System.out.println(setq);
    }
}
