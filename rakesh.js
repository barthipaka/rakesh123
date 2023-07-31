function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.toLowerCase() === "rakesh" && password === "raki")
     {
        alert("Login successful");
        window.location.href = 'homepage.html'; // Redirect to the homepage
    } 
    else 
    {
        alert("Login failed. Please check your username and password.");
    }
}







