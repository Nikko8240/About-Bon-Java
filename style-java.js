const style = document.createElement('style');
style.textContent = `
.icon-pos{
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.icon{
    width: 90px;
    height: 90px;
    object-fit: contain;
}
.center-image {
    max-width: 100%;
    width: 850px;
    height:auto;
}
.Banner-Middle{
    max-width: 100%;
    width: 850px;
    height:auto;
}  
.Banner-Left{
    max-width: 100%;
    width: 450px;
    padding-top: 100%;
    height:auto;
}
.Banner-Right{
    max-width: 100%;
    width: 350px;
    padding-top: 100%;
    height:auto;
}
.image-container {
    display: flex;
    box-sizing: border-box;
    justify-content: center ;
}

body{
    font-family: Arial, sans-serif;
    background-color: white
}
header {
    background-color: #fff;
    padding: 20px;
    text-align: center;
    position: sticky;
    top: 0;
    max-height: auto;
    overflow-y: auto;
}
menu{
    width:100%;
}
.about-section h4:hover{
    color: #ff0000;
}
.about-section {
    margin: 60px;
}
.about-section h2 {
    font-size: 2em;
    border-bottom: 2px solid #d71e28;
    display: inline-block;
}
.about-section h3 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    font-size: 20px;
    padding: 2%;
}
.about-section h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    font-size: 25px;
    padding: 2%;
    cursor: pointer;
}

@media (max-width: 970px) {
    nav ul li {
    display: none;
    }
}
nav {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    direction: ltr;
    gap: 20px;
    object-fit: contain;
    padding: 0px 55px;
}
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin: auto;
    margin-bottom: auto;
}
nav ul li {
    font-weight: 750;
    padding: 0px 5px;
    margin: 0px 3px;
}
nav ul li a {
    text-decoration: none;
    color: #333;
    display: block;
}
nav ul li a:hover {
    color: #d71e28;
}
.order-button:hover {
    background-color: #ec3c3c;
    color: #fff;
    transition: background-color 0.4s ease;
}
.order-container{
    width: auto;
    object-fit: contain;
}
.order-button{
    display: inline-block;
    margin: 20px;
    text-decoration: none;
    border: #d71e28;
    background: #d71e28;
    padding: 15px 20px;
    color: #ffffff;
    font-weight: 850;
}

footer {
    background-color: #d71e28;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    padding: 50px;
}
footer fo{
    height: 50px;
    
}
footer fo a{
    text-decoration: none;
    color: white;
    padding: 15px;
}


`;
document.head.appendChild(style);
