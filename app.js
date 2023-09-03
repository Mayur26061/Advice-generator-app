const id = document.querySelector('.id');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice-container')
const fetchData = async () => {
    const reponse = await fetch('https://api.adviceslip.com/advice')
    const data = reponse.json()
    return data
}
const getAdvice = () => {
    fetchData().then((data) => {
        id.children[0].textContent = data.slip.id;
        advice.textContent = `"${data.slip.advice}"`
    }).catch((err) => {
        console.log(err)
    })
}
getAdvice()
dice.addEventListener('click', () => {
    getAdvice()
})
