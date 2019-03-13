"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Dylan Kelley
   Date:   3.4.19
   
   Filename: hg_report.js
	
*/

// Var: This is a variable that stores the concatenation of table elements with each of the variables of the product.
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='id' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

//// This sets the first article element equal to the value of the gameReport variable.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// Var: This a variable that stores the rating sum.
var ratingSum = 0;

// Var: This creates a variable called ratingsCount and sets it equal to the lenght of the ratings array.
var ratingsCount = ratings.length;

// For: This is a loop that traverses through the ratings array to add up the sum of the ratings.
for (var i = 0; i < ratingsCount; i++) {
    ratingSum += ratings[i];
}

// Var: This is a variable set to find the ratings average by dividing the sum of the ratings by the number of ratings.
var ratingsAvg = ratingSum / ratingsCount;

var ratingReport = " <h1>Customer Reviews</h1> <h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

for (var j = 0; j <= 2; j++) {
    ratingReport += "<div class='review'> <h1>" + ratingTitles[j] + "</h1><table> <tr><th>By</th><td>" + ratingAuthors[j] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[j] + "</td></tr> <tr><th>Rating</th><td>";

    for (var k = 1; k <= ratings[j]; k++) {
        ratingReport += "<img src='hg_star.png' />";
    }

    ratingReport += "</td></tr></table>" + ratingSummaries[j] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;