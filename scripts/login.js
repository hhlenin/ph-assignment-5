document.getElementById("inputs").addEventListener("keyup", function(event) {
    if (event.target.id === "user-name") {
        if (event.target.value !== "admin") {
            event.target.classList.add("input-error");

            return 0;
        }
        event.target.classList.remove("input-error");
        event.target.classList.add("input-success");

    }
    if (event.target.id === "password") {
        if (event.target.value !== "admin123") {
            event.target.classList.add("input-error");

            return 0;
        }
        event.target.classList.remove("input-error");
        event.target.classList.add("input-success");

    }

    event.stopPropagation;
    
});

document.getElementById("sign-in").addEventListener("click", function(event){
    const userName = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;

    if (userName !== "admin" || password !== "admin123") {
        document.getElementById("wrong-credential").classList.remove("hidden");
    } else {
        document.getElementById("wrong-credential").classList.add("hidden");

    }
    event.stopPropagation;

    window.location.href = "./issues-index.html";

})