# resultscraper
<h1>Introduction</h1>

Hola hackers!
I believe in every inch of the *hacker philosophy* and the *open source teachings*. This is a repo I am creating to begin my contribution to this wonderful community in a small way. My way of learning is to **learn by doing **, don't sit idle you wanna learn a new language make something , enough of boring exercises, tuts, pdfs and shit !


This is a programming challenge , but way more real than those found on topcoder or hackerearth. Choose your own language , it could be any server side language nodejs, perl , php , C# , ruby , python , coldfusion , hack, haskell ,grrovy, C/C++ ( I know it's crazy to do it in C/C++ ! ) . I will be going with C++ ,as I want to learn C++ ( which is my primary aim for creating this challenge )


<h1>Bounty</h1>
If you are a real hacker , you do not need this point , for the fun of completing this task in least code and least time with max efficiency is enough for you. For others you will have learnt almost all of the real concepts of your language in one single fun task ( atleast fun for me ! ) 

<h1>Task</h1>

This is a webscraper which fetches results and images from our college website [**MANIT**](http://www.manit.ac.in)
dolphin technologies is the service which provides the database for our results. This is the [<strong style='color:blue;'>result page</strong>](http://dolphintechnologies.in/manit/results.html) which we need to attack for the results<br/>
As the results are released on 31st of december and all students put load on that shitty server , it is almost impossible to see results without a script.

<h1>Challenges</h1>

* Fetch my result scholar-131114141 sem-5 ( .html )
* Fetch the whole class results scholars- (13111001 to 131114166) sem-5 with some scholars missing in between , you need to take care! (.html)
* Sort the results according to their GPA's and write the order into a new file ( .html )
* Download all the student's images ( .jpg)
* Arrange an individual student's data into a neat XML/JSON file/doc(.xml/.json)


<h1>Note</h1>

scholar number is just a number used to identify a student in the college its decomposition is as follows :-
13- joined in 2013 + 111 ( nobody knows -_- ) + 4 ( branch code - electronics ) 141 ( roll no ) = 131114141
I am in 3rd year of a 4 year course so valid scholar numbers - 12/13/14/15 + 111 + 1/2/3/4/5/6/7/8/9 + ***

General structure of this repo will be like 
 repo 
   -language
      -code
      -images
      -results
       resultsorted.html
      -xml/json
