function triangleCalculator () {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base  = parseFloat(triangleBaseText);
    // console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);


    const area = 0.5 * base * height;
    // console.log(area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;


}



function rectangleCalculator() {
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthInputText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthInputText);
    console.log(typeof length);

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthInputText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthInputText);

    const area = length * width;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}