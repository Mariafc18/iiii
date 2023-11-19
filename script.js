function checkPassword() {
    var enteredDate = document.getElementById("password").value;

    // Aquí deberías validar la fecha ingresada con la fecha actual o la fecha específica que elijas.
    // En este ejemplo, simplemente comparo la fecha con "01012022".
    if (enteredDate === "26062023") {
        // Si la fecha es correcta, mostrar el contenido secreto.
        document.getElementById("accessForm").style.display = "none";
        document.getElementById("secretContent").style.display = "block";
    } else {
        alert("Cómo es posible que te confundas Noé -_-");
    }
}
