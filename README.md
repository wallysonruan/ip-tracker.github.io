# IP Tracker Web APP
This is a chosen by a friend of mine after scrolling down the Frontend Mentor Intermediate list of challenges. This one is particularly interesting to me because it demands to consume an IP, which I have not dealt with before.

## Insights during the development:

### Structure

I'm quite satisfied with the HTML I wrote in this project, it feels semantically written.

I was watching a youtube video about how to consume an API with vanilla Javascript and learned the tag `<small>`, it was helpful to insert those small titles in the results container without having to set a `font-size` via CSS.

### Layout

At first sight I thought the layout were the easiest part of this project, so simple. Little did I know... The Leaflet map were programmed to be on top of everything and, to this day (02/07/2022), I haven't figured out how to change that – I decided to study and solve this problem after everything is done.

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
