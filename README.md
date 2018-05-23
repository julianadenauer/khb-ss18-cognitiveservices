# Experimental Cognitive Services

## Allgemein
### Der Plan

* Machine Learning ermöglicht die Erkennung von Strukturen in Daten. Das können Gesichter in Bildern sein, Bedeutungen in Audiodateien oder Intentionen in Texten.
* Diese Technologien sind heute durch Sprachassisten wie Siri, [Alexa](https://www.amazon.de/Amazon-Echo-Dot-Generation-Schwarz/dp/B01DFKBG54) und Google Home weitläufig bekannt. Sie werden von Unternehmen aber auch zunehmen zur Kundenanalyse und von Staaten für die [Überwachung](http://www.spiegel.de/netzwelt/netzpolitik/gesichtserkennung-am-berliner-suedkreuz-ein-test-fuer-unsere-freiheit-a-1160867.html) eingesetzt.
* Trainieren von neuronalen Netzen erfordert noch recht viel Einarbeitung und Rechenleistung. Auch wenn es viele Leute gibt, die sich bemühen, die Hemmschwelle zu verringern, z.B. das Projekt [ml4a](http://ml4a.github.io) von [Gene Kogan](http://genekogan.com) oder [Wekinator](http://www.wekinator.org) von [Rebecca Fiebrink](https://www.doc.gold.ac.uk/~mas01rf/homepage/).
* Wir wollen deshalb in diesem Kurs nur auf die Nutzungsseite vorhandener Neuronaler Netzwerke fokussieren. Wir arbeiten dazu mit mit Cloud Services, die Dienste für Sprach-, Bild- und Textanalyse anbieten. In diesem Fall nutzen wir die [Cloud Machine Learning Diensten von Google](https://cloud.google.com/products/machine-learning/)), es gibt aber auch fast identische Dienste von anderen Unternehmen wie IBM, Microsoft und Amazon.
* Ziel ist es, neue kreative und experimentelle Anwendungsfelder zu finden und zu prototypen. Dabei kann es um empathische Produkte oder intelligente Services gehen. Und darum, wie eine implizitere, indirektere Kommunikation mit Computern funktionieren kann. 

### Der Prozess
Es gibt kein starres Kurrikulum. Das gesamte Unterfangen ist als Experiment anzusehen und kann durch die Teilnehmer mitgestaltet werden. Ich werde versuchen, den Teil des Frontalunterrichts möglichst kurz und abwechslungsreich zu halten und stattdessen mehr Peer-learning und selbstständiges Arbeiten in Gruppen vorsehen.  Abhängig von der Teilnehmeranzahl wird in Gruppen à 3-4 Personen gearbeitet.

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
* [p5.js](http://p5js.org)
	* [p5.js Online Editor](http://editor.p5js.org)
* Texteditor [Atom](https://atom.io)
* Google Chrome und seine Developer Tools (unbedingt in den Einstellungen die Option `disable cache` aktivieren
* [Github](https://github.com/julianadenauer/khb-ss18-cognitiveservices): Hier landen aller Beispiel-Code, der Code eurer Projekte und dieses Dokument.
	* Ihr könnt über Pull Requests Dinge zu dieser Repository Code hinzufügen. Wie das alles Funtioniert erklärt Daniel Shiffman [hier](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).
	* Das geht am einfachsten mit dem [Github Desktop Client](https://desktop.github.com)
* [Google Cloud Machine Learning Dienste](https://cloud.google.com/products/machine-learning/)
	* [Vision API](https://cloud.google.com/vision/)
	* [Speech API](https://cloud.google.com/speech/)
	* [Natural Language API](https://cloud.google.com/natural-language/)
	* [Translation API](https://cloud.google.com/translate/)
* Optional: [Cyberduck](https://cyberduck.io) FTP Client
* Optional: [Uberspace](https://uberspace.de) Webhosting

## Resources
* [p5.js Reference](https://p5js.org/reference/)
* [The Coding Train](https://www.youtube.com/user/shiffman) YouTube Tutorials von Daniel Shiffman
* Buch (und Website) [Generative Gestaltung](http://www.generative-gestaltung.de/2/) von Benedikt Groß, Hartmut Bohnacker und Julia Laub
* [ProgrammableWeb](https://www.programmableweb.com)
* quickdraw.withgoogle.com/

## Sessions 

### Session 1 / 28.04.2018
* Vorstellung der Teilnehmer (Vorerfahrungen, Interessen etc.)
* [Vorstellung des Seminar-Ablaufs und der Inhalte](#der-plan)
* Vorstellung Julian
* Intro zu p5.js
	* [was ist p5.js?](http://hello.p5js.org)
	* workflow
	* setup und draw
	* Basics of drawing (2D Primitives, Koordinatensystem, [Variablen I](https://www.youtube.com/watch?v=RnS0YNuLfQQ&index=6&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA))
* Thematische Einarbeitung und Präsentation
	* Gruppe 1: Farben ([Color Tutorial von Shiffman](https://www.youtube.com/watch?v=9mucjcrhFcM&index=4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), [Beispiele von Generative Gestaltung](http://www.generative-gestaltung.de/2/))
	* Gruppe 2: [Eigene Variablen](https://www.youtube.com/watch?v=Bn_B3T_Vbxs&index=7&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* Gruppe 3: [Javascript Objects](https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8)
	* Gruppe 4: [Random() Function](https://www.youtube.com/watch?v=nfmV2kuQKwA&index=10&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* Gruppe 5: [Conditional Statements](https://www.youtube.com/watch?v=1Osb_iGDdjk&index=11&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
	* Gruppe 6: [Bouncing Ball](https://www.youtube.com/watch?v=LO3Awjn_gyU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12)
	* Gruppe 7: [Else and Else if, AND and OR](https://www.youtube.com/watch?v=r2S7j54I68c&index=13&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

### Session 2 / 29.04.2018
* p5.js Intro Teil 2
	* [Loops](https://www.youtube.com/watch?v=cnRD9o6odjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=15)
* Intro zu APIs
	* Was ist das und warum ist das wichtig?
		* [ProgrammableWeb](https://www.programmableweb.com)
		* [What is an API and how do they work?](https://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work)
		* [Twilio](https://www.twilio.com)
		* [Solaris Bank](https://www.solarisbank.com/de/)
		* [IFTTT](https://ifttt.com) / [Zapier](zapier.com)
	* Beispiel mit [OpenWeatherMap](openweathermap.org)
* Google Cloud APIs
	* Demo zur Bilderkennungs-API aus p5.js

### Zwischendurch
* Konzept verfeinern
* Research
* tiefer in die Technologien einarbeiten
* Technische Fragen klären
* Optional: Weiterentwicklung eigener p5.js Bibliothek

### Session 3 / 26.05.2018
* Recap
	* Was haben wir beim letzten Mal gemacht?
	* Offene Fragen klären
	* Hausaufgabenkontrolle
* Ideengenerierung
* Präsentation von Ideen
* Hacking & Prototyping

### Session 4 / 27.05.2018
* Hacking & Prototyping
* Doku Sprint
* Präsentation
* Optional: Diskussion über Datenschutz und Privatsphäre

### Backlog
* [Functions](https://www.youtube.com/watch?v=wRHAitGzBrg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=17)
* [Array](https://www.youtube.com/watch?v=VIQoUghHSxU&index=23&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* [Images](https://p5js.org/reference/#/p5.Image)
* [Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
	* Create HTML Objects
	* Element specific listeners
	* CSS
	* Video
	* Live Video
