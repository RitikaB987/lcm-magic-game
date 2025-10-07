let playerName = '';
let score = 0;
let num1, num2;
let correctAnswer;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById('startBtn').addEventListener('click', () => {
    playerName = document.getElementById('playerName').value.trim();
    if(playerName === '') { alert('Enter your name'); return; }
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('playerName').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    generateQuestion();
});

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 2;
    num2 = Math.floor(Math.random() * 10) + 2;
    correctAnswer = lcm(num1, num2);
    drawMultiples(num1, num2);

    document.getElementById('question').innerText = `Find LCM of ${num1} and ${num2}`;
    let options = generateOptions(correctAnswer);
    let optionsHtml = '';
    options.forEach(opt => { optionsHtml += `<button class="optionBtn" onclick="checkAnswer(${opt})">${opt}</button>`; });
    document.getElementById('options').innerHTML = optionsHtml;
    document.getElementById('hint').innerText = '';
}

function checkAnswer(selected) {
    if(selected === correctAnswer){ score++; alert('Correct!'); }
    else{ alert(`Wrong! Correct answer: ${correctAnswer}`); }
    document.getElementById('score').innerText = `Score: ${score}`;
    generateQuestion();
}

document.getElementById('hintBtn').addEventListener('click', () => {
    document.getElementById('hint').innerText = `Hint: Multiply both numbers and divide by their GCD.`;
});

function lcm(a,b){ return (a*b)/gcd(a,b); }
function gcd(a,b){ return b===0?a:gcd(b,a%b); }

function generateOptions(correct){
    let opts = [correct];
    while(opts.length < 3){
        let randomOpt = correct + Math.floor(Math.random()*5+1);
        if(!opts.includes(randomOpt)) opts.push(randomOpt);
    }
    return shuffleArray(opts);
}

function shuffleArray(arr){ return arr.sort(() => Math.random()-0.5); }

function drawMultiples(num1,num2){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const mult1=[], mult2=[];
    for(let i=1;i<=10;i++){ mult1.push(num1*i); mult2.push(num2*i); }
    mult1.forEach((val,i)=>{
        ctx.fillStyle='skyblue';
        ctx.fillRect(50+i*30, canvas.height-val*5, 20, val*5);
        ctx.fillStyle='black';
        ctx.fillText(val, 50+i*30, canvas.height-val*5-5);
    });
    mult2.forEach((val,i)=>{
        ctx.fillStyle='lightgreen';
        ctx.fillRect(250+i*30, canvas.height-val*5, 20, val*5);
        ctx.fillStyle='black';
        ctx.fillText(val, 250+i*30, canvas.height-val*5-5);
    });
    ctx.fillStyle='red';
    ctx.fillText('LCM', 200, canvas.height-lcm(num1,num2)*5-10);
}