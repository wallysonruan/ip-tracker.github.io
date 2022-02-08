# IP Tracker Web APP
This is a chosen by a friend of mine after scrolling down the Frontend Mentor Intermediate list of challenges. This one is particularly interesting to me because it demands to consume an IP, which I have not dealt with before.

## Insights during the development:

### Structure

I'm quite satisfied with the HTML I wrote in this project, it feels semantically written.

I was watching a youtube video about how to consume an API with vanilla Javascript and learned the tag `<small>`, it was helpful to insert those small titles in the results container without having to set a `font-size` via CSS.

### Layout

(07/02/22, afternoon) At first sight I thought the layout were the easiest part of this project, so simple. Little did I know... The Leaflet map were programmed to be on top of everything and, to this day, I haven't figured out how to change that – I decided to study and solve this problem after everything is done.

(07/02/22, night) After trying to put the map on layer bellow with everything I knew, I submitted my unfinished solution to the Frontend Mentor and peeked over the other solutions. One of the solutions attracted me for the dev had successfully solved my problem. I skimmed his code, his website and made a few suggestions, as well as asked for a tip and/or the answer to how I'd solve my problem. He kindly gave me the answer by commenting my solution.

`z-index` is the solution.

I googled it up and found a well explained article by [Alura](https://www.alura.com.br/artigos/z-index-utilizar-essa-propriedade-css?gclid=CjwKCAiAo4OQBhBBEiwA5KWu_9Xp-xS3NK_JAKQD_DCX0jHGxzpbLMnkD-tGYSfPR43ikzTWAbbCtxoCUusQAvD_BwE) and tried to use the property. It worked! But... I've set the z-index of the result container to *1* and the one of the map to *-1* and thought that would be it. Wrong. Setting the z-index of the map to *-1* indeed put it a layer bellow, but also took it's interactiveness away. I googled the z-index again, hopping to find some rules that would explain that, but found nothing. Along the research I read that *0* was an acceptable number too, I tried that and... It worked! But why? After some research I came to the conclusion that:
   1. *-1* puts the element in the lowest layer, preventing it of any kind of interaction with the user;
   2. The "0" and "auto" are different in this project. It seems that if I set the z-index of the map to *auto* the original value will prevail, which caused the initial problem, and setting it to *0* reset the z-index and override the map original code – in other projects both values should mean the exactly same thing.



Even with the map problem, thanks to the BEM CSS class naming methodology, the stylesheet of this project was easy to deal, so I'm going to keep using BEM and improving my understanding and use of it to keep enjoying it's benefits.

Also, after reading:

  *[[...] The IBGE (Brazillian Institute of Geography and Statistics) highlights that the cellphone is still the main tool used by people to access the internet.
  It was found in 99,5% of the homes with access to the world wide web, followed by computers, with 45,1%, televisions (31,7%) and tablets (12%). [...]](https://www.gov.br/mcom/pt-br/noticias/2021/abril/pesquisa-mostra-que-82-7-dos-domicilios-brasileiros-tem-acesso-a-internet. )*
  
  The text above was translated by me.

I have decided that if presented enough resources, time included, I'll code everything as follows:

  1. Mobile (PORTRAIT);
  2. Mobile (LANDSCAPE);
  3. Desktop.
  4. Tablet (PORTRAIT).

### Functionalities

I thought it would be hard to consume the API, but it turned out to be quite easy. The Fetch API is a piece of cake to use, even though I still need to practice the Fetch API itself, learn how to use the `.catch()` and the words `async` and `await`.

This project also presented me the oportunity of really understand what is the *functional paradigm*, as well as the importance of **giving each function only one job**. During the test of the molecule composed by the functions I noticed some errors in a certain stage and, for I had given each function a certain job, I was able to quickly solve that without having to adjust the entire molecule, just one atom.

I tried to exercise better variable names, as the *Clean Code* book suggest – I believe that went well .
