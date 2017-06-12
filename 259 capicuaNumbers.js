function findCapicuas(n) {
    let cont = 0, start = Math.pow(10,n-1) == 1 ? 0 : Math.pow(10,n-1) , end = Math.pow(10,n)
    for(let i = start; i < end; i++) {
       let reverseNumber = i.toString().split('').reverse().join('')
       if(reverseNumber == i) {
            cont++
        }
    }
    return cont
}
findCapicuas(1)
findCapicuas(2)
findCapicuas(5)