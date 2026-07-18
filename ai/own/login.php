<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Signup - MEDIC.CO</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Home Icon -->
    <div class="home-icon">
        <a href="../web/index.php" class="home-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
            </svg>
            <span>Home</span>
        </a>
    </div>

    <div class="container">
        <div class="auth-container" id="authContainer">
            <!-- Sign Up Form Container -->
            <div class="form-container sign-up">
                <form id="signUpForm">
                    <h1>Create Account</h1>
                    
                    <div class="social-icons">
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    
                    <span>Register with E-mail</span>
                    
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Enter E-mail" required>
                    <input type="password" placeholder="Enter Password" required>
                    
                    <button type="submit">SIGN UP</button>
                </form>
            </div>

            <!-- Sign In Form Container -->
            <div class="form-container sign-in">
                <form id="signInForm">
                    <h1>Sign In</h1>
                    
                    <div class="social-icons">
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    
                    <span>Sign in With Email & Password</span>
                    
                    <input type="email" placeholder="Enter E-mail" required>
                    <input type="password" placeholder="Enter Password" required>
                    
                    <a href="#" class="forgot-password">Forget Password?</a>
                    
                    <button type="submit">SIGN IN</button>
                </form>
            </div>

            <!-- Overlay Container -->
            <div class="overlay-container">
                <div class="overlay">
                    <!-- Overlay Left - Visible when Sign Up is active -->
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome To Hyper</h1>
                        <p>Sign In With Email & Password</p>
                        <button class="ghost" id="signInBtn">SIGN IN</button>
                    </div>
                    
                    <!-- Overlay Right - Visible when Sign In is active -->
                    <div class="overlay-panel overlay-right">
                        <h1>Hello World</h1>
                        <p>Sign up now and enjoy our site</p>
                        <button class="ghost" id="signUpBtn">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>