const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // the plus sign turns the attribute into a number
        const c = +counter.innerText

        const increment = target / 200  //if the divisor is a large number it increments slower, if it is a small number it increments faster

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}` // round up the number for the increments
            setTimeout(updateCounter, 1) // keep calling the function, wait 1 millisecond before running it again
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})