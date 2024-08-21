<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circuit SIM</title>
    <link rel="stylesheet" href="Circuit SIM.css">
</head>
<body>
    <div class="container">
        <h1>Circuit SIM - Circuit Diagram Generator</h1>

        <?php
        // Check if the form has been submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $resistor = $_POST['resistor'] ?? '';
            $capacitor = $_POST['capacitor'] ?? '';
            $inductor = $_POST['inductor'] ?? '';
            $sourceType = $_POST['sourceType'] ?? '';
            $sourceValue = $_POST['sourceValue'] ?? '';

            // You can process the data here if necessary, such as saving to a database
            // For now, we'll just output the values (this is optional and for debugging purposes)
            echo "<p>Resistor: $resistor Ω</p>";
            echo "<p>Capacitor: $capacitor F</p>";
            echo "<p>Inductor: $inductor H</p>";
            echo "<p>Source Type: $sourceType</p>";
            echo "<p>Source Value: $sourceValue V/A</p>";
        }
        ?>

        <form id="circuitForm" action="index.php" method="POST">
            <label for="resistor">Resistor (R) value:</label>
            <input type="number" id="resistor" name="resistor" required><br><br>

            <label for="capacitor">Capacitor (C) value:</label>
            <input type="number" id="capacitor" name="capacitor" required><br><br>

            <label for="inductor">Inductor (L) value:</label>
            <input type="number" id="inductor" name="inductor" required><br><br>

            <label for="sourceType">Source Type:</label>
            <select id="sourceType" name="sourceType" required>
                <option value="voltage">Voltage Source</option>
                <option value="current">Current Source</option>
            </select><br><br>

            <label for="sourceValue">Source Value:</label>
            <input type="number" id="sourceValue" name="sourceValue" required><br><br>

            <button type="submit">Generate Circuit</button>
        </form>

        <div id="circuitDiagram">
            <!-- SVG or Canvas for Circuit Diagram will be inserted here via JavaScript -->
        </div>

        <button id="downloadBtn" style="display:none;" onclick="downloadDiagram()">Download Diagram</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
