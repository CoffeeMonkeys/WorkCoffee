<script lang="ts">
    import {onMount} from 'svelte';
    import axios from 'axios';
    //Grab back end data
    //Pull it up here
    let userLocation = null;
    let coffeeShopData = null;

    //featuredShop
    let featuredName = "";
    let featuredLocation = "";
    let featuredRatings = "";
    let featuredImage = "";

    //Top rated shops
    let topRatedName1 = "";
    let topRatedLocation1 = "";
    let topRatedRatings1 = "";
    let topRatedImage1 = "";

    let topRatedName2 = "";
    let topRatedLocation2 = "";
    let topRatedRatings2 = "";
    let topRatedImage2 = "";

    let topRatedName3 = "";
    let topRatedLocation3 = "";
    let topRatedRatings3 = "";
    let topRatedImage3 = "";


    //To help with css
    let featuredBg = null
    let topRatedBg1 = null;
    let topRatedBg2 = null;
    let topRatedBg3 = null;

    //Search bar var
    let cityName = '';


    //Getting location
    function success (position: GeolocationPosition) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log('latitude:', latitude);
        console.log('longitude:', longitude);
        async function getCoffeeShop() {
            try{
                const response = await axios.post('http://localhost:3000/stores', {
                    longitude: longitude,
                    latitude : latitude
                });
                console.log(response.data);
                coffeeShopData = response.data.businesses;

                //Set the values of the lists, given the data
                featuredName = coffeeShopData[0].name;
                featuredLocation = coffeeShopData[0].location.display_address;
                featuredRatings = coffeeShopData[0].rating.toString();
                featuredImage = coffeeShopData[0].image_url; 
                
                topRatedName1 = coffeeShopData[1].name;
                topRatedLocation1 = coffeeShopData[1].location.display_address;
                topRatedRatings1 = coffeeShopData[1].rating.toString();
                topRatedImage1 = coffeeShopData[1].image_url; 

                topRatedName2 = coffeeShopData[2].name;
                topRatedLocation2 = coffeeShopData[2].location.display_address;
                topRatedRatings2 = coffeeShopData[2].rating.toString();
                topRatedImage2 = coffeeShopData[2].image_url; 

                topRatedName3 = coffeeShopData[3].name;
                topRatedLocation3 = coffeeShopData[3].location.display_address;
                topRatedRatings3 = coffeeShopData[3].rating.toString();
                topRatedImage3 = coffeeShopData[3].image_url; 

            } catch (error){
                console.error('Error fetching coffee shop data', error);
            }
        }
        getCoffeeShop();
    }
    function error(error: GeolocationPositionError){
        console.error('Error getting location:', error.message);
    }
    const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    onMount(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    })

    function test(){
        console.log("Test");
    }
</script>


<head>
    <title>
        Work Coffee
    </title>
</head>

<body>
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap" rel="stylesheet">
    <div class="Top">
        <div class = "navbar">
            <div class = "background"></div>
            <div class = "contents">
                <div class = "titleSec">
                    <div class = "logo"></div>
                    <div class = "Title">
                        <span class="Work">Work</span>
                        <span class ="Coffee">Coffee</span>
                    </div>
                </div> 
                <div class = "searchBar">
                    <input bind:value={cityName} name="SearchBar" placeholder="Enter your location..." class="searchInput">
                    <button on:click={() => test()} id="SearchButton" class="searchButton"><h1>> ></h1></button>
                </div>
                <div class = "user">
                    <button on:click={() => location.href='../login'} class = "login">Login</button>
                    <div class = "decBlock"></div>
                    <button on:click={() => location.href='../register'} class = "register">Register</button>
                </div>
            </div>
        </div>
        <div class = "featured">
            <div class = "info" id = "change">
                <h1>Featured</h1>
				<h3>Name:</h3>
                <h4>{featuredName}</h4>
				<h3>Location:</h3>
                <h4>{featuredLocation}</h4>
				<h3>Ratings:</h3>
                <h4>{featuredRatings}</h4>
            </div>
            <img src={featuredImage} alt='Coffee' class = "image"/>
        </div>
    </div>
    <div class = "Middle">
        <div class = "topRated"><h1>Top Rated Nearby:</h1></div>
        <div class = "tRcontainer">
            <div class = "coffeeShop">
                <h1>{topRatedName1}</h1>
                <h3>{topRatedLocation1}</h3>
                <h3>{topRatedRatings1}</h3>
                <img src={topRatedImage1} alt='Coffee' class = "image"/>
            </div>
            <div class = "coffeeShop">
                <h1>{topRatedName2}</h1>
                <h3>{topRatedLocation2}</h3>
                <h3>{topRatedRatings2}</h3>
                <img src={topRatedImage2} alt='Coffee' class = "image"/>
            </div>
            <div class = "coffeeShop">
                <h1>{topRatedName3}</h1>
                <h3>{topRatedLocation3}</h3>
                <h3>{topRatedRatings3}</h3>
                <img src={topRatedImage3} alt='Coffee' class = "image"/>
                
            </div>
        </div>

    </div>
    <div class = "Bottom">
        <h1>l</h1>
    </div>

</body>

<style>

:global(html),body{
    height: 100%;
    margin: 0;
    padding: 0;
}
/*weird issue when overflow is in html*/
body{
    overflow-x: hidden;
}

.Top{
background-image: url('https://texascoffeeschool.com/wp-content/uploads/2021/10/DSC_0052-scaled.jpg');
background-size:cover;
background-position: center;
height: 100%;
font-family: 'Inter';
}

/* Nav Bar */

.Top .navbar{
    background-color: rgb(0, 0, 0, 0.5);
    width: 100%;
    height: 10%;
    position: absolute;
    margin-top: 2%;
    border-top: 5px double #8B6504;
    border-bottom: 5px double #8B6504;
    z-index: 10;
    
}
.Top .navbar .background{
    background-color: rgb(0, 0, 0, 0.8);
    width: 100%;
    height: 40%;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    
}

/*Contents*/

.Top .navbar .contents{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%; 
}
.Top .navbar .contents .titleSec,
.Top .navbar .contents .user{
    margin-left: 2.5%;
    margin-right: 2.5%;
    flex: 1;
    height: 100%;
    width: 20%;
}
.Top .navbar .contents .searchBar{
    flex: 1.5;
    height: 100%;
    width: 50%;
}

/*Title and Logo*/

.Top .navbar .contents .titleSec{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    gap: 20px;
}
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

/*Search Bar*/

.Top .navbar .contents .searchBar{
    display: flex;
    align-items: center;
    width: 100%;
    height: 70%;
    background-color: rgba(255, 255, 255, 0);
    z-index: 3;
    border-radius: 5px;
    text-align:left;
    color: rgb(0, 0, 0,0.5);
    margin: auto;
}
.Top .navbar .contents .searchBar h1{
    font-weight: normal;
    margin-left: 10px;
}

.Top .navbar .contents .searchBar .searchInput{
	width: 80%;
	height: 100%;
	border-radius: 5px;
}

.Top .navbar .contents .searchBar .searchButton{
	width: 20%;
	height: 100%;
	background-color: #8B6504;
	border-width: 1px;
	border-color: #ffffff;
	border-style: solid;
	transition: 0.2s ease;
	color:#ffffff
}
.Top .navbar .contents .searchBar .searchButton:hover{
	transform: skew(-2deg, -2deg) scale(110%);
	cursor: pointer;
}

/*Sign in and Register*/

.Top .navbar .contents .user{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.Top .navbar .contents .user .login{
    height: 50%;
    width: 25%;
    background-color: black;
    border: 1px solid #000000;
    border-radius: 8px;
    color: #ffffff;
    z-index: 4;
    transition: 0.2s ease;
}
.Top .navbar .contents .user .decBlock{
    height: 25%;
    width: 10%;
    background-image: linear-gradient(to right, black 25%, white);
    z-index: 4;

}
.Top .navbar .contents .user .register{
    height: 50%;
    width: 25%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    color: #8B6504;
    border: 1px solid #ffffff;
    z-index: 4;
    transition: 0.2s ease;
}

.Top .navbar .contents .user .login:hover,
.Top .navbar .contents .user .register:hover{
    transform: scale(105%);
    cursor: pointer;
}


.Top .navbar .contents .user .login,
.Top .navbar .contents .user .decBlock,
.Top .navbar .contents .user .register {
    display: flex;
    justify-content: center; 
    align-items: center; 
    font-weight:600
}

/* Featured */

.Top .featured{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    top:20%;
    transform: translateY(50%);
    gap: 10px;
}
.Top .featured h3{
	color:#8B6504
}
.Top .featured .info{
    text-align: center;
    background-color: #ffffff;
    height: 100%;
    width: 25%;
    border-radius: 5px;
}
.Top .featured .image{
    height: 100%;
    width: 20%;
	border-radius: 5px;
    background-color: gray;
    text-align: center;
}

/*Middle Section*/

.Middle{
    height: 75%;
    width: 100%;
    background-size: cover;
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5ae09b0-a69f-4795-a0e8-6cb6a65ebd31/d8dbnac-4e140102-df75-48f0-9c53-880cce859497.jpg/v1/fill/w_1600,h_900,q_75,strp/chalkboard_texture_mc2015_by_mattiamc_d8dbnac-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZTVhZTA5YjAtYTY5Zi00Nzk1LWEwZTgtNmNiNmE2NWViZDMxXC9kOGRibmFjLTRlMTQwMTAyLWRmNzUtNDhmMC05YzUzLTg4MGNjZTg1OTQ5Ny5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EQy0zW4hogAprYLGDlrDvT-LHNKTf5koGvuhdw2-80E");
    font-family: "Just Me Again Down Here", cursive;
    color: #ffffff;
    font-weight: 400;
    font-style: normal;
    border: 10px solid transparent;
    border-image: url("https://img.freepik.com/free-photo/wooden-textured-background_53876-14865.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais") 30 repeat;
    border-radius: 5px;
    margin-left: -10px;
}

/*Top Rated Text*/

.Middle .topRated{
    margin-left: 20px;
    font-size: larger;
}

/*Top rated coffee shops and its container*/

.Middle .tRcontainer{
    height: 70%;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 10px;
}

.Middle .tRcontainer .coffeeShop .image{
    height: 85%;
    width: 50%;
    background-color: gray;
    text-align: center;
    transform: skew(-15deg, -10deg);
    filter: drop-shadow(10px 10px);
}

.Middle .tRcontainer .coffeeShop{
    width: 50%;
    height: 75%;
    border: 25px solid rgba(255,255,255,.8);
    border-image: url("https://www.unicefusa.org/sites/default/files/answer-box.png") 20;
    background-color: #000000a8;
    z-index: 100;
    
}
.Middle .tRcontainer .coffeeShop .imageContainer1{
    z-index: 1;
    background-image: url({topRatedImage1});
    width: 100%;
    height: 100%;
}
.Middle .tRcontainer .coffeeShop .imageContainer2{
    z-index: 1;
    background-image: url({topRatedImage2});
    width: 100%;
    height: 100%;
}
.Middle .tRcontainer .coffeeShop .imageContainer3{
    z-index: 1;
    background-image: url({topRatedImage3});
    width: 100%;
    height: 100%;
}

.Middle .tRcontainer .coffeeShop h1, h3{
    margin-left: 5px;
}

/*Bottom*/

.Bottom{
    font-family: "Inter";
    text-align: center;
    color: #ffffff;
}
</style>
