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


const setTabData = function (address) {
  const allTab = document.getElementById("accordion-all");
  const openTab = document.getElementById("accordion-open");
  const closedTab = document.getElementById("accordion-closed");

  let allIssueCount = 0;
  let closedIssueCount = 0;
  let openIssueCount = 0;


  fetch(address)
    .then((response) => response.json())
    .then((json) => {


      json.data.forEach(issue => {
        makeCardView(issue, allTab);
        allIssueCount++;
        if (issue.status === "open") {
          makeCardView(issue, openTab);
          openIssueCount++;

        }
        if (issue.status === "closed") {
          makeCardView(issue, closedTab);
          closedIssueCount++;

        }
      });

      document.getElementById("all-issue-count").innerText = allIssueCount;
      document.getElementById("closed-issue-count").innerText = closedIssueCount;
      document.getElementById("open-issue-count").innerText = openIssueCount;



    }

    )
    .finally(() => document.getElementById("spinner").classList.add("hidden"))
};


function openModal(id) {

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then(response => response.json())
    .then(json => {

      const modal = document.getElementById("modal-content");
      const contentDiv = document.createElement("div");

      contentDiv.innerHTML = `
      <div class="mb-6">
            <h3 class="text-2xl font-bold mb-2">${json.data.title}</h3>
            <div class="flex items-center">
            <span class="capitalize badge badge-sm ${(json.data.status === "open") ? "badge-success" : "badge-primary"} text-white">${json.data.status}</span>
            <span class="text-base-content/30 text-xs">&nbsp; • &nbsp; Opened by ${json.data.author} &nbsp; •&nbsp; ${new Date(json.data.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
        <div class="mb-6">`
        + makeLableView(json.data.labels) +
        `</div>
        <div class="mb-6">
            <p class="text-base-content/30">${json.data.description}</p>
        </div>
        <div class="grid grid-cols-2 py-4 px-2 bg-[#F8FAFC] rounded-xl">
            <div>
                <p class="text-base-content/30">Assignee:</p>
                <p class="font-semibold">${json.data.assignee}</p>
            </div>
            <div>
                <p class="text-base-content/30">Priority:</p>
                <p>
                <span class="badge badge-xs text-white ${json.data.priority === "high" ? "badge-error" : json.data.priority === "medium" ? "badge-warning" : "badge-neutral"} uppercase">
                            ${json.data.priority}
                        </span>
                </p>
            </div>
        </div>
      `
      modal.innerHTML = "";
      modal.append(contentDiv);
    })


  details_modal.showModal();
}

function getSearchResult(keyword) {

  if (keyword.length > 2) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("accordion-all").innerHTML = "";
    document.getElementById("accordion-open").innerHTML = "";
    document.getElementById("accordion-closed").innerHTML = "";
    const address = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${keyword}`;

    setTabData(address);
  }

}