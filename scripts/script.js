let currentTab = "all";


document.getElementById("parent").addEventListener("click", function (e) {

    const element = e.target;
    
    if (element.tagName === "BUTTON" && element.classList.contains("w-24")) {
        const parent = element.parentNode;
        const chlidren = parent.children;

        for (const child of chlidren) {
            child.classList.remove("btn-primary");
            child.classList.add("text-base-content/60");
            if (child === element) {
                child.classList.add("btn-primary");
            child.classList.remove("text-base-content/60");
            };
        }
    
        currentTab = element.id;
        document.getElementById("accordion-all").classList.add("hidden");
        document.getElementById("accordion-open").classList.add("hidden");
        document.getElementById("accordion-closed").classList.add("hidden");
        document.getElementById(`accordion-${element.id}`).classList.remove("hidden");

        document.getElementById(`all-issue-count`).classList.add("hidden")
        document.getElementById(`closed-issue-count`).classList.add("hidden")
        document.getElementById(`open-issue-count`).classList.add("hidden")

        document.getElementById(`${element.id}-issue-count`).classList.remove("hidden");

    }

    e.stopPropagation;
});


