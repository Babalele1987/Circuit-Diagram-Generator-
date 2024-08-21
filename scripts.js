function generateCircuit() {
    const R = document.getElementById('resistor').value;
    const C = document.getElementById('capacitor').value;
    const L = document.getElementById('inductor').value;
    const sourceType = document.getElementById('sourceType').value;
    const sourceValue = document.getElementById('sourceValue').value;

    const diagramArea = document.getElementById('circuitDiagram');
    diagramArea.innerHTML = ''; // Clear any previous diagram

    // Create SVG elements to represent the circuit components
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "200");

    // Example SVG generation (simplified, needs customization based on actual design)
    const resistor = document.createElementNS(svgNS, "rect");
    resistor.setAttribute("x", "50");
    resistor.setAttribute("y", "80");
    resistor.setAttribute("width", "100");
    resistor.setAttribute("height", "20");
    resistor.setAttribute("fill", "brown");
    svg.appendChild(resistor);

    const capacitor = document.createElementNS(svgNS, "rect");
    capacitor.setAttribute("x", "200");
    capacitor.setAttribute("y", "80");
    capacitor.setAttribute("width", "20");
    capacitor.setAttribute("height", "20");
    capacitor.setAttribute("fill", "blue");
    svg.appendChild(capacitor);

    const inductor = document.createElementNS(svgNS, "rect");
    inductor.setAttribute("x", "250");
    inductor.setAttribute("y", "80");
    inductor.setAttribute("width", "20");
    inductor.setAttribute("height", "20");
    inductor.setAttribute("fill", "green");
    svg.appendChild(inductor);

    const source = document.createElementNS(svgNS, "circle");
    source.setAttribute("cx", "350");
    source.setAttribute("cy", "90");
    source.setAttribute("r", "10");
    source.setAttribute("fill", "red");
    svg.appendChild(source);

    // Append SVG to diagram area
    diagramArea.appendChild(svg);

    // Show the download button
    document.getElementById('downloadBtn').style.display = 'inline';
}

function downloadDiagram() {
    const svgElement = document.querySelector('#circuitDiagram svg');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'circuit_diagram.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
