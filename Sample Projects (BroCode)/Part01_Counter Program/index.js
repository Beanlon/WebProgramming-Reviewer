const CounterLabel = document.getElementById("counterLabel");
let count = 0;

function Increase() {
    count++;
    CounterLabel.textContent=count;
}

function Decrease() {
    count--;
    CounterLabel.textContent=count;
}

function Reset() {
    count=0;
    CounterLabel.textContent=count;
}

