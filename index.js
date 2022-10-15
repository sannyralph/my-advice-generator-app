const getAdviceButton = document.querySelector("#die");
const adviceNum = document.querySelector("#advice-Num");
const mainAdvice = document.querySelector("#main-advice"); 

const fatchData = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    const {slip} = data
    adviceNum.innerHTML = `${slip.id}`  
    mainAdvice.innerHTML = slip.advice;
}

fatchData()

fatchData()
getAdviceButton.addEventListener('click', fatchData);

