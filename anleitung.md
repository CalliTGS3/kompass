# Kompass

## ~avatar avatar @unplugged

Dein @boardname@ hat einen eingebauten Sensor, der die Lagerichtung des @boardname@ zum Erdmagnetfeld in Grad ausgeben kann. 
Damit kannst Du einen elektronischen Kompass bauen. Die 5x5 LED Matrix des @boardname@ soll wie bei einem richtigen Kompass 
einen Pfeil anzeigen, der immer in Richtung Norden zeigt, egal in welche Richtung Du den @boardname@ drehst.

**Beim Start des Programmes auf dem @boardname@ wird ein Abgleich des eingebauten Sensors gemacht. Dazu neigst Du den @boardname@ bitte in alle Richtungen so, daß alle LEDs der 5x5 Matrix aufleuchten.**


## Schritt 1 @fullscreen

Erstelle eine Variable ``||Variables:Grad||``, in die der Messwert des Kompasses gespeichert wird.
Ermittle die Ausrichtung des @boardname@ mit dem Block ``||Input:Kompassausrichtung||`` aus dem Block Input ``||Input:Input||``
und speichere den Wert in der Variablen ``||Variables:Grad||``. Damit die Ermittlung kontinuierlich passiert, 
muss das Ganze in den Block  ``||Basic:dauerhaft||``.

```blocks
basic.forever(() => {
    let Grad = input.compassHeading()
})
```

## Schritt 2

Berechne aus dem ermittelten Wert für ``||Variables:Grad||`` den Pfeil für die 5x5 LED Matrix und zeige diesen an.
Der Wert ``||Input:Kompassausrichtung||`` reicht von 0 Grad bis 359 Grad, beginnt im Norden bei 0 Grad 
und nimmt in Richtung Osten, Süden und Westen zu. Wir können auf dem @boardname@ 4 verschiedene Pfeile darstellen und somit
unterteilen wir den Kreis mit 360 Grad in 4 gleiche Teile. Ein Viertelkreis stellt damit jeweils eine Himmelsrichtung dar.
Beachte, daß die Mitte der Viertelkreise jeweils bei den Himmelsrichtungen 90, 180, 270 und 360 Grad liegen. 


## Schritt 3 @fullscreen

Benutze für die Auswertung von ``||Variables:Grad||`` den Block ``||Logic:wenn dann ansonsten||`` aus dem Block ``||Logic:Logik||``!
Wenn ``||Variables:Grad||`` kleiner als **45** oder größer als **315** ist, dann zeigt die Kompassrichtung in Richtung **Norden**. 
Beachte die **ODER** Verknüpfung beider Bedingungen.
Zeige einen Pfeil in Richtung nach oben auf dem @boardname@ an.

```blocks
basic.forever(() => {
    let Grad = input.compassHeading();
    if (grad < 45 || Grad > 315) {
        basic.showIcon(IconNames.ArrowNorth)
    }
    else {
    }
});
```


## Schritt 4 @fullscreen

Erweitere den Block ``||Logic:wenn dann ansonsten||``, indem Du auf das Plus klickst!
Wenn ``||Variables:Grad||`` kleiner als **135** ist, zeigt der @boardname@ hauptsächlich nach **Osten**. 
Zeige einen Pfeil in Richtung nach links auf dem @boardname@ an.

```blocks
basic.forever(() => {
    let Grad = input.compassHeading();
    if (Grad < 45 || Grad > 315) {
        basic.showIcon(IconNames.ArrowNorth)
    }
    else if (Grad < 135) {
        basic.showIcon(IconNames.ArrowWest)
    }
    else {
    }
});
```

## Schritt 5 @fullscreen

Erweitere den Block ``||Logic:wenn dann ansonsten||`` nochmals, indem Du auf das Plus klickst!
Wenn ``||Variables:Grad||`` kleiner als **225** ist, zeigt der @boardname@ hauptsächlich nach **Süden**. 
Zeige einen Pfeil in Richtung nach unten auf dem @boardname@ an.

```blocks
basic.forever(() => {
    let Grad = input.compassHeading();
    if (Grad < 45 || Grad > 315) {
        basic.showIcon(IconNames.ArrowNorth)
    }
    else if (Grad < 135) {
        basic.showIcon(IconNames.ArrowWest)
    }
    else if (Grad < 225) {
        basic.showIcon(IconNames.South)
    }
    else {
    }
});
```


## Schritt 6 @fullscreen

Für alle anderen Werte, d.h wenn ``||Variables:Grad||`` zwischen 225 und 315 ist, muss der @boardname@ nach **Westen** zeigen. 
Zeige einen Pfeil in Richtung nach rechts auf dem @boardname@ an.

```blocks
basic.forever(() => {
    let Grad = input.compassHeading();
    if (Grad < 45 || Grad > 315) {
        basic.showIcon(IconNames.ArrowNorth)
    }
    else if (Grad < 135) {
        basic.showIcon(IconNames.ArrowWest)
    }
    else if (Grad < 225) {
        basic.showIcon(IconNames.ArrowSouth)
    }
    else {
        basic.showIcon(IconNames.ArrowEast)
    }
});
```


## Schritt 7 @fullscreen

**Zusatzaufgabe, Du kannst diesen Schritt überspringen:**
Auf der 5x5 LED Matrix des @boardname@ kannst Du noch vier weitere Pfeile darstellen und damit die "Empfindlichkeit"
des Kompasses erhöhen. Für die Nordrichtung sieht das dann so aus. Wenn Du willst, kannst Du das für alle vier Richtungen programmieren.
Der Pfeil Richtung Norden wird nur angezeigt, wenn der @boardname@ sich +- 5 Grad in Nordrichtung befindet.

```blocks
basic.forever(() => {
    let Grad = input.compassHeading();
    if (Grad < 45 || Grad > 315) {
        if (Grad > 5 && Grad < 45) {
            basic.showIcon(IconNames.ArrowNorthWest)
        } else if (Grad < 355 && Grad > 315) {
            basic.showIcon(IconNames.ArrowNorthEast)
        } else {
            basic.showIcon(IconNames.ArrowNorth)
        }
    }
    else if (Grad < 135) {
        basic.showIcon(IconNames.ArrowWest)
    }
    else if (Grad < 225) {
        basic.showIcon(IconNames.ArrowSouth)
    }
    else {
        basic.showIcon(IconNames.ArrowEast)
    }
});
```


## Schritt 8 @fullscreen

Schliesse Deinen @boardname@ mit einem USB Kabel an und drücke auf ``|Herunterladen|``. Speichere Dein Programm auf dem Laufwerk **@drivename@**. 
Damit wird Dein Programm zum @boardname@ übertragen.


## Schritt 9

Gut gemacht! Du hast einen elektronischen Kompass für den @boardname@ programmiert.
Verlasse diese Anleitung, indem Du auf ``|Fertigstellen|`` klickst. 


## ~ @unplugged
Im Hauptmenü von makecode findest Du den Menüpunkt ``|Teilen|``. 
Klicke darauf, Du siehst anschließend ein Fenster in der Mitte mit dem Namen des Projektes. 
Klicke auf die Schaltfläche ``|Projekt veröffentlichen|`` und dann auf ``|Link|`` kopieren. 
Danach kannst Du diesen Link in der Schulcloud als Lösung zu der Aufgabe eintragen.
