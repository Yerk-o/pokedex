/* Set the overall page style */
body {
    background-color: yellow; /* Yellow background */
    font-family: Arial, Helvetica, sans-serif; /* Sans-serif font */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 
/* General button styles */
button {
    color: green;
    background-color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
 
/* Image styling */
img {
    width: 160px;
    height: auto;
    margin: 20px 0;
}
 
/* Type-specific button styles */
.grass-button {
    color: green;
    background-color: rgb(176, 255, 148);
    border: 2px solid rgb(125, 200, 100);
}
 
.water-button {
    color: rgb(26, 133, 195);
    background-color: rgb(150, 243, 255);
    border: 2px solid rgb(50, 170, 220);
}
 
.fire-button {
    color: white;
    background-color: rgb(255, 150, 112);
    border: 2px solid rgb(240, 100, 70);
}
 
.electric-button {
    color: rgb(120, 120, 0);
    background-color: rgb(242, 255, 0);
    border: 2px solid rgb(200, 200, 0);
}
 
.Psychic-button {
    color: red;
    background-color: rgb(229, 145, 255);
    border: 2px solid rgb(200, 100, 240);
}
 
.ghost-button {
    color: white;
    background-color: rgb(163, 24, 255);
    border: 2px solid rgb(140, 20, 230);
}
 
/* Hover effects for all buttons */
button:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
}
 
/* Active state for buttons */
button:active {
    transform: scale(0.95);
    filter: brightness(0.9);
}
 
/* Section styling */
main section {
    padding: 20px;
    text-align: center;
}

main section {
    padding: 20px;
    text-align: center;
}

main section img {
    margin: 10px 0;
    width: 200px;
    height: auto;
}

main section h2 {
    font-size: 1.5rem;
    color: black;
    margin-bottom: 10px;
}
main section p {
    font-size: 1rem;
    margin: 5px 0;
    color: #333;
}