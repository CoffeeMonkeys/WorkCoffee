<script>
</script>

<body>
	<link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="style.css" />
	<div class="Top">
		<div class="navbar">
			<div class="background"></div>
			<div class="contents">
				<div class="titleSec">
					<div class="logo"></div>
					<div class="Title">
						<span class="Work">Work</span>
						<span class="Coffee">Coffee</span>
					</div>
				</div>
				<div class="searchBar"><h1>Search...</h1></div>
				<div class="user">
					<div class="login">Login</div>
					<div class="decBlock"></div>
					<div class="register">Register</div>
				</div>
			</div>
		</div>
	</div>
	<div class="info">
		<img
			src="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/10/Cat-drinking-coffee.jpg"
			alt="Coffee Cat"
            class="pfp"
		/>
        <div class="username">Username</div>
        <div class="email">Email</div>
        <div class="bio">Bio</div>
        <div class="date_joined">Date Joined</div>

	</div>
</body>

<style>
	:global(html),
	body {
		height: 100%;
		margin: 0;
		padding: 0;
		background-image: url('https://texascoffeeschool.com/wp-content/uploads/2021/10/DSC_0052-scaled.jpg');
		background-size: cover;
		background-position: center;
		height: 100%;
		font-family: 'Inter';
	}
	/*weird issue when overflow is in html*/
	body {
		overflow-x: hidden;
	}

	.Top {
	}

	/* Nav Bar */

	.Top .navbar {
		background-color: rgb(0, 0, 0, 0.5);
		width: 100%;
		height: 10%;
		position: absolute;
		margin-top: 2%;
		border-top: 5px double #8b6504;
		border-bottom: 5px double #8b6504;
		z-index: 10;
	}
	.Top .navbar .background {
		background-color: rgb(0, 0, 0, 0.8);
		width: 100%;
		height: 40%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.Top .navbar .contents {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.Top .navbar .contents .titleSec,
	.Top .navbar .contents .user {
		margin-left: 2.5%;
		margin-right: 2.5%;
		flex: 1;
		height: 100%;
		width: 20%;
	}
	.Top .navbar .contents .searchBar {
		flex: 1.5;
		height: 100%;
		width: 50%;
	}

	/*Title and Logo*/

	.Top .navbar .contents .titleSec {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;
	}
	.Top .navbar .contents .titleSec .logo {
		background-color: #8b6504;
		width: 25%;
		height: 50%;
		z-index: 2;
	}
	.Top .navbar .contents .titleSec .Title {
		font-weight: normal;
		font-size: medium;
		z-index: 2;
	}
	.Top .navbar .contents .titleSec .Title .Work {
		color: #8b6504;
	}
	.Top .navbar .contents .titleSec .Title .Coffee {
		color: #ffffff;
	}

	/*Search Bar*/

	.Top .navbar .contents .searchBar {
		display: flex;
		align-items: center;
		width: 100%;
		height: 70%;
		background-color: white;
		z-index: 3;
		border-radius: 5px;
		text-align: left;
		color: rgb(0, 0, 0, 0.5);
		margin: auto;
	}
	.Top .navbar .contents .searchBar h1 {
		font-weight: normal;
		margin-left: 10px;
	}

	/*Sign in and Register*/

	.Top .navbar .contents .user {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.Top .navbar .contents .user .login {
		height: 50%;
		width: 25%;
		background-color: black;
		border-radius: 8px;
		color: #ffffff;
		z-index: 4;
	}
	.Top .navbar .contents .user .decBlock {
		height: 25%;
		width: 10%;
		background-image: linear-gradient(to right, black 25%, white);
		z-index: 4;
	}
	.Top .navbar .contents .user .register {
		height: 50%;
		width: 25%;
		background-color: rgb(255, 255, 255);
		border-radius: 8px;
		color: #8b6504;
		z-index: 4;
	}
	.Top .navbar .contents .user .login,
	.Top .navbar .contents .user .decBlock,
	.Top .navbar .contents .user .register {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
	}
    .pfp{
        z-index: 11;
    }
</style>
