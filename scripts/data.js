const setTabData = function () {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((json) => {
      const allTab = document.getElementById("accordion-all");
      allTab.innerHTML = "";

      json.data.forEach(issue => {
        makeCardView(issue, allTab);
      });

    }

    )
};

function makeCardView(data, tab) {

  const card = document.createElement("div");
  const cardElement = `
    <div class="card bg-base-100 shadow-sm border-t-4 ${data.status === "open" ? "border-success" : "border-primary"}">
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
  card.innerHTML = cardElement;
  tab.append(card);
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