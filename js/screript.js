// Triangle card start

function triangleCalculator() {
    const base = repeat('triangle-base');
    const height = repeat('triangle-height');
    const area = 0.5 * base * height;
    textSet('triangle-area', area);

}

// Triangle card end

// Rectangle card start

function rectangleCalculator() {
    const length = repeat('rectangle-length');
    const width = repeat('rectangle-width');
    const area = length * width;
    textSet('rectangle-area', area);
}

// Rectangle card end

// Parallelogram card start
function parallelogramCalculator() {
    const base = repeat('parallelogram-base')
    const height = repeat('parallelogram-height');
    const width = base * height;
    textSet('parallelogram-area', width);
}
// Parallelogram card end

// Rhombus card start
function rhombusCalculator() {
    const base = repeat('rhombus-base');
    const height = repeat('rhombus-height');
    const area = 0.5 * base * height;
    textSet('rhombus-area', area);
}
// Rhombus card end


// Pentagon card start
function pentagonCalculator() {
    const base = repeat('pentagon-base');
    const height = repeat('pentagon-height');
    const area = 0.5 * base * height;
    textSet('pentagon-area', area);
}
// Pentagon card end

// Ellipse card start
function ellipseCalculator() {
    const base = repeat('ellipse-base');
    const height = repeat('ellipse-height');
    const area = 3.141 * base * height;
    textSet('ellipse-area', area);
}
// Ellipse card end


// reused function

function repeat(input) {
    const inputValue = document.getElementById(input);
    const inputText = inputValue.value;
    const area = parseFloat(inputText);
    inputValue.value = '';
    return area;
}

function textSet(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}