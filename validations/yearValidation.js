module.exports = year => {
    const currentDate = new Date
    const currentYear = currentDate.getFullYear()

    if (isNaN(year)) {
        throw ( {
            status: 422,
            message: "So close... but year parameter should be a number!",
            ok: false
        })
    }else if (year < 1895 || year > currentYear) {
        throw ( {
            status: 422,
            message: `Lumière brothers filmed their first movie in 1895. The current year is ${currentYear}. Please, instert a valid year.`,
            ok: false
        })
    }
}