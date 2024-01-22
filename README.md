problem - 

picture set nhi hori h 
right m set krni h but does not work .

A - code to push kr pehle fir dekuga na🤦

*{
    padding: 0;
    margin: 0;
     
}
.main{
    background-image:url(imgN/bg2.png);
    background-position: center center ;
    /* background-size: max(1200px,100vw); */
    height:80vh;
    background-size: cover;
    position: relative;
}
.main .box{
    height:80vh;
    width:100%;
    opacity: 0.60;
    background-color: black;
    position: absolute;
    top:0;
}
nav {
    /* color: white; */
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80vw;
    margin: auto;
    height: 300px;
}
nav img {
    color:red;
    height:  500px;
    position: relative;
    z-index:90;
}
nav button{
    position: relative;
    z-index:  100;
    height: 2vw;
    width: 10vw;
    font-size:1vw;
}
.box{
    color:white;
}






 <div class="main">
        <nav>
            <span><img  width="550"src="imgN/logo.svg" alt=""></span>
            <div>
                <button>English</button>
                <button>Sign In</button>
            </div>
        </nav>
        <div class="box"></div> 

    </div>
