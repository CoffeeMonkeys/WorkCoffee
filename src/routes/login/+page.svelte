<script>
</script>

<head>
    <title>WorkCoffee Login</title>
</head>
<body>
    <div class="Top">
        <div class = "navbar">
            <div class = "background"></div>
            <button on:click={() => location.href='..'}  class = "contents">
                <div class = "titleSec">
                    <div class = "logo"></div>
                    <div class = "Title">
                        <span class="Work">Work</span>
                        <span class ="Coffee">Coffee</span>
                    </div>
                </div> 
            </button>
        </div>

        <div class = "loginSection">
            <div class = "Login">
                <h1>Login</h1>
            </div>
            <div class = "user">
                <input type="text" required>
                <div class = "inputUser">Input Username or Email</div>
            </div>
            <div class = "passWord">
                <input type = "text" required>
                <div class = "inputPass">Input Password</div>
            </div>
            <div class = "accButtons">
                
                <button class = "loginButton">
                    <h3>Login</h3>
                </button>
                <p>Or, if you have want to make an account:</p>
                <button on:click={() => location.href='/register'} class = "createAccount">
                    <h3>Register</h3>
                </button>
            </div>
        </div>
    </div>
</body>


<style>
html, body{
    height: 100%;
    margin: 0;
    padding: 0;
}

body{
    overflow-x: hidden;
}

.Top{
    background-color: #ffffff;
    background-size:cover;
    background-position: center;
    height: 100%;
    font-family: 'Inter';
    }
    
    /* Nav Bar */
    
    .Top .navbar{
        background-color: rgba(0, 0, 0, 0.5);
        position: relative;
        width: 100%;
        height: 10%;
        border-top: 5px solid #8B6504;
        border-bottom: 5px solid #8B6504;
        z-index: 1000000;
    }
    .Top .navbar .background{
        background-color: rgb(0, 0, 0, 0.8);
        width: 100%;
        position:absolute;
        height: 80%;
        bottom: 10%;        
    }

    .Top .emptySpace{
        background-color: #ffffff;
        width: 100%;
        height: 100%;
    }
    /*Contents*/
    
    .Top .navbar .contents{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%; 
        border: 0px;
    }

    .Top .navbar .contents:hover{
        cursor: pointer;
    }
    .Top .navbar .contents .titleSec{
        height: 100%;
        width: 30%;
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 30px;
    }
    
    /*Title and Logo*/
    

    .Top .navbar .contents .titleSec .logo{
        background-color: #8B6504;
        width: 25%;
        height: 50%;
        z-index: 2;
    }
    .Top .navbar .contents .titleSec .Title{
        font-weight:normal;
        font-size:medium;
        z-index: 2;
    }
    .Top .navbar .contents .titleSec .Title .Work{
        color: #8B6504;
    }
    .Top .navbar .contents .titleSec .Title .Coffee{
        color:#ffffff;
    }
    
    /* Login */
    
    .Top .loginSection{
       position: relative; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80%;
        gap: 6em;
    }

    .Top .loginSection .user,
    .Top .loginSection .email,
    .Top .loginSection .passWord,
    .Top .loginSection .rePassword{
        position: relative;
        height: 120%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Top .loginSection .user,
    .Top .loginSection .passWord{
        color: #8B6504;
        font-size: 1em;
    }

    .Top .loginSection .user input,
    .Top .loginSection .passWord input{
        position: absolute;
        display: flex;
        align-items: center;
        width: 100%;
        height: fit-content;
        background-color: rgba(255, 255, 255, 0);
        z-index: 3;
        border-radius: 5px;
        text-align:left;
        border: 1px solid #000000;

        color: rgb(0, 0, 0,0.5);
        font-size: 2em;
        margin: auto;
    }

    .Top .loginSection .user .inputUser,
    .Top .loginSection .passWord .inputPass{
        position: absolute;
        color: #696969;
        font-size: 1.2em;
        padding: 0.5em 0.5em;
        transition: 0.2s ease;
        background-color: #ffffff;
    }

    /*hoo boy (Text and box transition effect on click and ready)*/

    .Top .loginSection .user input:focus,
    .Top .loginSection .passWord input:focus,
    .Top .loginSection .user input:valid,
    .Top .loginSection .passWord input:valid{
        color: #8B6504;
        border: 3px solid #8b6504;
    }

    .Top .loginSection .user input:focus + .inputUser,
    .Top .loginSection .passWord input:focus + .inputPass,
    .Top .loginSection .user input:valid + .inputUser,
    .Top .loginSection .passWord input:valid + .inputPass{
        color: #8B6504;
        transform: translate(0, -1.6em) scale(0.8);
        z-index: 10000;
    }
    /*Login and Register buttons*/

    .Top .loginSection .accButtons{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 15%;
        width: 50%;
        gap: 10px;
    }
    .Top .loginSection .accButtons p{
        color: #969696;
        height: 0.25em;
    }
    .Top .loginSection .accButtons .loginButton{
        height: 80%;
        width: 40%;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        border: 2px solid #000000;
        color: #8B6504;
        z-index: 4;
        transition: 0.2s ease;
    }
    .Top .loginSection .accButtons .createAccount{
        height: 80%;
        width: 40%;
        background-color: black;
        border: 2px solid #000000;
        border-radius: 8px;
        color: #ffffff;
        z-index: 4;
        transition: 0.2s ease;
    }

    .Top .loginSection .accButtons .loginButton:hover{
        color: #ffffff;
        background-color: #8B6504;
        border-color: #8B6504;
        cursor:pointer;
    }
    .Top .loginSection .accButtons .createAccount:hover{
        color: #8B6504;
        background-color: #ffffff;
        border-color: #8B6504;
        cursor: pointer;
    }
    .Top .loginSection .accButtons .loginButton,
    .Top .loginSection .accButtons .createAccount{
        display: flex;
        justify-content: center; 
        align-items: center; 
        font-weight:400
    }
</style>
