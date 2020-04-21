var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var klikBuka = document.getElementById('buka')
var klikTutup = document.getElementById('tutup')
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight


// menambahkan body
function bakSampah() {
    context.save()
    context.fillStyle = '#1a237e'
    context.fillRect(200, 220, 200, 250)
    context.restore()
}
bakSampah()