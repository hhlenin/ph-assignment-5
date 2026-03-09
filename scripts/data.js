const setTabData = function () {
  const allTab = document.getElementById("accordion-all");
  const openTab = document.getElementById("accordion-open");
  const closedTab = document.getElementById("accordion-closed");

  let allIssueCount = 0;
  let closedIssueCount = 0;
  let openIssueCount = 0;

  // document.getElementById("spinner").classList.remove("hidden");  

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((json) => {
      allTab.innerHTML = "";
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
    .finally (() => document.getElementById("spinner").classList.add("hidden"))
};

function makeCardView(data, tabName) {

  const cardDiv = document.createElement("div");
  const cardElement = `
    <div class="h-full card bg-base-100 shadow-sm border-t-4 ${data.status === "open" ? "border-success" : "border-primary"}">
                <div class="p-4 space-y-2.5">
                    <div class="flex justify-between items-center">
                        <div>
                            <img src="./assets/${data.status === "open" ? "Open" : "Closed"}-Status.png" alt="">
                        </div>
                        <span class="badge badge-xs badge-soft ${data.priority === "high" ? "badge-error" : data.priority === "medium" ? "badge-warning" : "badge-neutral"} uppercase">
                            ${data.priority}
                        </span>
                    </div>
                    <div>
                        <h4 class="font-semibold text-sm capitalize">${data.title}</h4>
                        <p class="text-xs">${data.description}</p>
                    </div>
                    <p>` + makeLableView(data.labels) + `</p>
                  </div>

                <hr class="text-base-content/10">
                <div class="p-4 text-xs text-base-content/30">
                    <p>${data.author} is assigned ${data.assignee.length !== 0 ? `by ${data.assignee}` : ""}</p>
                    <p><time>${new Date(data.createdAt).toLocaleDateString()}</time></p>
                </div>
            </div>
    
    `;
  cardDiv.innerHTML = cardElement;
  tabName.append(cardDiv);
}

function makeLableView(data) {
  let labels = "";
  for (const element of data) {

    if (element === "help wanted") {

      labels += `
          <span class="ml-1 badge badge-xs badge-soft border-warning badge-warning uppercase">
            <i class="fa-solid fa-life-ring"></i>
            ${element}
          </span>
          `;

    }
    else if (element === "bug") {
      labels += `
          <span class="ml-1 badge badge-xs badge-soft border-error badge-error uppercase">
            <i class="fa-solid fa-bug"></i>
            ${element}
          </span>
          `;
    }
    else if (element === "enhancement") {
      labels += `
          <span class="ml-1 badge badge-xs badge-soft border-success badge-success uppercase">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            ${element}
          </span>
          `;
    }

    else if (element === "documentation") {
      labels += `
          <span class="ml-1 badge badge-xs badge-soft border-black badge-secondry uppercase">
            <i class="fa-solid fa-file-lines"></i>
            ${element}
          </span>
          `;
    }
    else {
      labels += `
          <span class="ml-1 badge badge-xs badge-soft border-primary badge-primary uppercase">
            <i class="fa-solid fa-life-ring"></i>
            ${element}
          </span>
          `;
    }

  }

  return labels;

}