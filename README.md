# Experimental Cognitive Services
## Allgemein
### Der Plan

* Machine Learning ermöglicht die Erkennung von Strukturen in Daten. Das können Gesichter in Bildern sein, Bedeutungen in Audiodateien oder Intentionen in Texten.
* Diese Technologien werden zunehmend von Unternehmen zur Kundenanalyse und für die Überwachung eingesetzt.
* Trainieren von neuronalen Netzen erfordert noch recht viel Einarbeitung und Rechenleistung (auch wenn es viele Leute gibt, die sich bemühen, die Hemmschwelle zu verringern, z.B. [ml4a](http://ml4a.github.io))
* Wir wollen deshalb in diesem Kurs nur auf die Nutzungsseite vorhandener Neuronaler Netzwerke fokussieren. Wir arbeiten dazu mit mit Cloud Services, die Dienste für Sprach-, Bild- und Textanalyse anbieten. 
* Ziel ist es, neue kreative und experimentelle Anwendungsfelder zu finden und zu prototypen. Dabei kann es um empathische Produkte oder intelligente Services gehen. Und darum, wie eine implizitere, indirektere Kommunikation mit Computern funktionieren kann. 

### Der Prozess
Es gibt kein starres Kurrikulum. Das gesamte Unterfangen ist als Experiment anzusehen und kann durch die Teilnehmer mitgestaltet werden. Abhängig von der Teilnehmeranzahl wird in Gruppen à 3-4 Personen gearbeitet.

Auf Weg werden wir ein paar Grundlagen klären und dort vertiefen, wo die Teilnehmer es wollen. Einige der Themen werden sein:

* Ein (hoffentlich) einfacher Einstieg ins Programmieren mit [p5.js](p5js.org) – der Webversion von Processing
* Was sind APIs und wie benutzt man sie? 
* Wir arbeiten mit
* Natürlich müssen wir im Zusammenhang mit dem Verarbeiten unserer Daten auf fremden Servern auch über das Thema Datenschutz sprechen!
	
### Das Ergebnis
* Gut dokumentierte Experimente, die gemeinsam auf einer Website veröffentlicht werden. Es wird viel Prozess gezeigt, Irrwege und Fehler.  Bilder und ein kurzes Video sind Bestandteil jeder Projektdoku.


## Inspiration
### Analyse
* Lauren McCarthy - [US](http://www.lauren-mccarthy.com/us)
* Kyle McDonald - [Sharing Faces](https://vimeo.com/96549043)
* [Just In Case](/Users/julianadenauer/RetuneDrive/Retune/Projekte/2017/[Burg Halle] Gastprofessur WS1718/08_Abgaben/Moni, Gina & Michl/Dokumentation - Web - Just In Case.pdf) Projekte 
* [Ross Goodwin](http://rossgoodwin.com) - Sunspring und [word-camera](http://www.thehypertext.com/2015/12/01/novel-camera/)
* [ABC: The Alphabet from the Sky](http://benedikt-gross.de/log/2016/10/abc-the-alphabet-from-the-sky/) / [Aerial Bold](https://www.kickstarter.com/projects/357538735/aerial-bold-kickstart-the-planetary-search-for-let) von [Benedikt Groß](benedikt-gross.de) und Joey Lee

### Bildgenerierung & Style Transfer

* Gene Kogan - [Experiments with style transfer](http://genekogan.com/works/style-transfer/)
* [Quasimondo](http://quasimondo.com)
* [Memo Akten](http://www.memo.tv/learning-to-see-you-are-what-you-see/)
* [Jordan Peele](https://www.buzzfeed.com/davidmack/obama-fake-news-jordan-peele-psa-video-buzzfeed?utm_term=.ub9LvjLAO#.ldNP08PVj)


### JS
* Onformative - [Porsche Black Box](https://onformative.com/work/porsche-blackbox)
* [Generative Gestaltung](http://www.generative-gestaltung.de/2/)

### Sonstiges
* [MIT Media Lab Identity](http://thegreeneyl.com/mit-media-lab-identity-1)

## Tools
* Der **Klassenchat**, um Links und sonstiges schnell und einfach auszutauschen: [https://riot.im/app/#/room/#khb:matrix.org](https://riot.im/app/#/room/#khb:matrix.org)
* [p5.js Online Editor](editor.p5js.org)
* Texteditor [Atom](https://atom.io)
* Google Chrome und seine Developer Tools (unbedingt in den Einstellungen die Option `disable cache` aktivieren
* [Github](http://github.com): Hier landen aller Beispiel-Code, der Code eurer Projekte und dieses Dokument.
* [Google Cloud Machine Learning Dienste](https://cloud.google.com/products/machine-learning/)
	* [Vision API](https://cloud.google.com/vision/)
	* [Speech API](https://cloud.google.com/speech/)
	* [Natural Language API](https://cloud.google.com/natural-language/)
	* [Translation API](https://cloud.google.com/translate/)
* Optional: [Cyberduck FTP Client](https://cyberduck.io)

## Resources
* [p5.js Reference](https://p5js.org/reference/)
* [The Coding Train](https://www.youtube.com/user/shiffman) YouTube Tutorials von Daniel Shiffman
* Buch (und Website) [Generative Gestaltung](http://www.generative-gestaltung.de/2/) von Benedikt Groß, Hartmut Bohnacker und Julia Laub

## Sessions 

### Session 1 / 28.04.2018
* Vorstellung der Teilnehmer (Vorerfahrungen, Interessen etc.)
* Vorstellung des Seminar-Ablaufs und der Inhalte
* Vorstellung Julian
* Intro zu p5.js
	* was ist p5.js?
	* workflow
	* setup und draw
	* Basics of drawing (2D Primitives, Koordinatensystem)
* Thematische Einarbeitung und Präsentation
	* Farben ([Color Tutorial von Shiffman](https://www.youtube.com/watch?v=9mucjcrhFcM&index=4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), [Beispiele von Generative Gestaltung](http://www.generative-gestaltung.de/2/))
	* [Variablen I](https://www.youtube.com/watch?v=RnS0YNuLfQQ&index=6&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* [Eigene Variablen](https://www.youtube.com/watch?v=Bn_B3T_Vbxs&index=7&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* [Javascript Objects](https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8)
	* [Random() Function](https://www.youtube.com/watch?v=nfmV2kuQKwA&index=10&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* [Conditional Statements](https://www.youtube.com/watch?v=1Osb_iGDdjk&index=11&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* [Bouncing Ball](https://www.youtube.com/watch?v=LO3Awjn_gyU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12)
	* [Else and Else if, AND and OR](https://www.youtube.com/watch?v=r2S7j54I68c&index=13&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* [Loops](https://www.youtube.com/watch?v=cnRD9o6odjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=15)
	* [Functions](https://www.youtube.com/watch?v=wRHAitGzBrg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=17)
	* [Array](https://www.youtube.com/watch?v=VIQoUghHSxU&index=23&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* [Images](https://p5js.org/reference/#/p5.Image)
* [Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
	* Create HTML Objects
	* Element specific listeners
	* CSS
	* Video
	* Live Video
* Intro zu APIs
	* IFTTT / Zapier
	* Beispiel mit [OpenWeatherMap](openweathermap.org)

### Session 2 / 29.04.2018
* Google Cloud APIs
	* Demos 
	* Ansprechen der APIs aus Processing
* Hacking / Ideengenerierung / Prototyping

### Zwischendurch
* Konzept verfeinern
* Research
* tiefer in die Technologien reinarbeiten
* Technische Fragen klären
* Optional: Weiterentwicklung eigener p5.js Bibliothek

### Session 3 / 26.05.2018
* Design & Prototyping Sprint

### Session 4 / 27.05.2018
* Doku Sprint