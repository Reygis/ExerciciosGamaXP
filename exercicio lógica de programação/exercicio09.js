function converterEmHoras (minutos){
    var horas = minutos / 60
    var h = parseInt(horas)
    var min = (horas-h ) * 60
    min = parseInt(min)
    console.log('São '+ h + 'horas')
    console.log('São '+ min + 'minutos')
}
converterEmHoras(67)