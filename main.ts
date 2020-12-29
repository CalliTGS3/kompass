let Grad = 0
basic.forever(function () {
    Grad = input.compassHeading()
    if (Grad < 45 || Grad > 315) {
        if (Grad > 5 && Grad < 45) {
            basic.showIcon(IconNames.ArrowNorthWest)
        } else if (Grad < 355 && Grad > 315) {
            basic.showIcon(IconNames.ArrowNorthEast)
        } else {
            basic.showIcon(IconNames.ArrowNorth)
        }
    } else if (Grad < 135) {
        basic.showIcon(IconNames.ArrowWest)
    } else if (Grad < 225) {
        basic.showIcon(IconNames.ArrowSouth)
    } else {
        basic.showIcon(IconNames.ArrowEast)
    }
})
