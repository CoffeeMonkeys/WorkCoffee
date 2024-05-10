<script lang="ts">
    import {onMount} from 'svelte';
    import axios from 'axios';
    //Grab back end data
    //Pull it up here
    let userLocation = null;

    let featuredName = null;
    let featuredLocation = null;
    let featuredRatings = null;
    let featuredImage = null;

    //Getting location
    function success(position: GeolocationPosition){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        async function getCoffeeShop() {
            try{
                /*const response = backend API repo
                coffeeShopData = reponse.data
                
                ranNumber = random num gen
                featuredShop = coffeeShopData[ranNumber]

                featuredName = featuredShop.name;
                featuredLocation = featuredShop.location;
                featuredRatings = featuredShop.ratings;
                featuredImage = featuredShop.image;
                */
            } catch (error){
                console.error('Error fetching coffee shop data', error);
            }
        }
    }
    function error(error: GeolocationPositionError){
        console.error('Error getting location:', error.message);
    }
    const options: PositionOptions = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    };
    onMount(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    })
</script>
<head>
    <title>
        Work Coffee
    </title>
</head>
<body>
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
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
                <div class = "searchBar"><h1>Search...</h1></div>
                <div class = "user">
                    <div class = "login">Login</div>
                    <div class = "decBlock"></div>
                    <div class = "register">Register</div>
                </div>
            </div>
        </div>
        <div class = "featured">
            <div class = "info">
                <h1>Featured</h1>
                <h4>{featuredName}</h4>
                <h4>{featuredLocation}</h4>
                <h4>{featuredRatings}</h4>
            </div>
            <div class = "image"><h1>Image Placeholder</h1></div>
        </div>
    </div>
    <div class = "Middle">
        <div class = "topRated"><h1>Top Rated:</h1></div>
        <div class = "tRcontainer">
            <div class = "coffeeShop">
                <h1>Name</h1>
                <h3>Placeholder Image</h3>
                <h3>Placeholder Reviews</h3>
            </div>
            <div class = "coffeeShop">
                <h1>Name</h1>
                <h3>Placeholder Image</h3>
                <h3>Placeholder Reviews</h3>
            </div>
            <div class = "coffeeShop">
                <h1>Name</h1>
                <h3>Placeholder Image</h3>
                <h3>Placeholder Reviews</h3>
            </div>
        </div>

    </div>
    <div class = "Bottom">
        <h1>Powered by Yelp API; Placeholder Footer</h1>
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
    background-color: white;
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
    border-radius: 8px;
    color: #ffffff;
    z-index: 4;
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
    z-index: 4;
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
.Top .featured .info{
    text-align: center;
    background-color: #ffffff;
    height: 100%;
    width: 25%;
    border-radius: 5px;
}
.Top .featured .image{
    height: 100%;
    width: 50%;
    background-color: gray;
    text-align: center;
    background-image: url({featuredImage});
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
.Middle .tRcontainer .coffeeShop{
    width: 50%;
    height: 75%;
    border: 25px solid rgba(255,255,255,.8);
    border-image: url("https://www.unicefusa.org/sites/default/files/answer-box.png") 20;
    
}
.Middle .tRcontainer .coffeeShop h1, h3{
    margin-left: 5px;
}

/*Bottom*/

.Bottom{
    font-family: "Inter";
    text-align: center;
}
</style>
