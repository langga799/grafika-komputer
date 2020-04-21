var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var klikBuka = document.getElementById('buka')
var klikTutup = document.getElementById('tutup')
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight

var rotasi = Math.PI / -1


// menambahkan body
function bakSampah() {
    context.save()
    context.fillStyle = '#1a237e'
    context.fillRect(200, 220, 200, 250)
    context.restore()
}
bakSampah()

// TUTUP SAMPAH
function tutupSampah() {
    context.clearRect(0, 0, canvas.width, canvas.height / 2 - 80)

    context.save()
    context.fillStyle = '#ff5722'
    context.translate(400, 220)
    context.rotate(rotasi)
    context.fillRect(0, 0, 200, 20)
    context.fillStyle = '#d84315' //warna tutup kedua
    context.fillRect(30, 20, 140, 10)
    context.fillStyle = '#ff5722' //warna tutup teratas
    context.fillRect(60, 40, 80, 10)
    context.fillStyle = '#bf360c' //warna penyangga tutup
    context.fillRect(60, 30, 10, 10)
    context.fillRect(130, 30, 10, 10)
    context.restore()
}
tutupSampah()