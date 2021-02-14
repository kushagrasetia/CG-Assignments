<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Authentication</title>
</head>
<body>
<h1>User Authentication</h1>
<form action="process" method="post">
	<label>Username</label><br>
	<input type="text" name="username" placeholder="Enter Username"/><br>
	<label >Password</label><br>
	<input type="password" name="password" placeholder="Enter Password"/><br>
	<input type="submit" name="submit" value="Login.."/>
</form>

</body>
</html>