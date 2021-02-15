<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Form..</title>
</head>
<body>
<a href="/Assignment8/login.html?siteLanguage=en">Login(English)</a> | 
<a href="/Assignment8/login.html?siteLanguage=fr">Login(French)</a>  | 
<a href="/Assignment8/login.html?siteLanguage=vi">Login(Vietnamese)</a>

<form action="/submit" method="post">

	<table>
	<tr><td><spring:message code="login.username"/></td><td><input type="text" name="username"/></td></tr>
	<tr><td><spring:message code="login.password"/></td><td><input type="password" name="password"/></td></tr>
	<tr><td></td><td><input type="submit" value="<spring:message code="login.submit"/>" /></td></tr>
	</table>

</form>
</body>
</html>