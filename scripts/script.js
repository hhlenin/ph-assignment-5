let currentTab = "all";

setTabData(jobs, currentTab);
setCount(jobs);
setHeader(currentTab);


document.getElementById("parent").addEventListener("click", function (e) {

    let currentTab = document.getElementById("heading").innerText.toLowerCase();

    const element = e.target;
    if (element.tagName === "BUTTON" && element.classList.contains("w-24")) {
        const parent = element.parentNode;
        const chlidren = parent.children;

        for (const child of chlidren) {
            child.classList.remove("btn-primary");
            child === element ? child.classList.add("btn-primary") : "";
        }
    
        element.classList.add("btn-primary")
        currentTab = element.id;
        setTabData(jobs, currentTab)
    }

    if (element.classList.contains("delete")) {
        if (!confirm("Are You Sure Want to Delete this Job?")) {
            return;
        }
        jobs.splice(element.dataset.id, 1)
        setTabData(jobs, currentTab);
    }

    if (element.tagName === "BUTTON") {
        if (element.classList.contains("btn-error")) {
            jobs[element.dataset.id].status = "reject"
        }
        if (element.classList.contains("btn-success")) {
            jobs[element.dataset.id].status = "interview"
        }
        setTabData(jobs, currentTab);
    }
    setCount(jobs, element.id);
    setHeader(currentTab);
    e.stopPropagation;
});


