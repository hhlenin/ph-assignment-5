function makePostView(data, key) {
      
    return `<div class="my-4 card w-full bg-base-100 shadow-sm ${(data.status === 'interview') ? 'border-l-8 border-success' : ''} ${(data.status === 'reject') ? 'border-l-8 border-error' : ''}">
            <div class="card-body space-y-2.5 md:space-y-5">
              <div class="flex justify-between items-center">
                <div>
                  <h2 class="text-lg font-semibold">${data.companyName}</h2>
                  <p class="text-gray">${data.jobTitle}</p>
                </div>
                <button data-id=${key} class="delete btn p-2 rounded-full">
                  <svg data-id=${key} class="delete" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>
                </button>
              </div>
              <p class="text-gray">${data.location} • ${data.salaryRange}</p>
              ${(data.status === "interview") ? '<span class="badge badge-xs badge-success text-sm font-medium">Interview</span>' : ''}
              ${(data.status === "reject") ? '<span class="badge badge-xs badge-error text-sm font-medium">Rejected</span>' : ''}

              <p>${data.notes}</p>
              <div class="mt-6">
                <button data-id=${key} ${(data.status === "interview") ? "disabled" : ''} class="uppercase btn btn-outline btn-success mb-1.5">interview</button>
                <button data-id=${key} ${(data.status === "reject") ? "disabled" : ''} class="uppercase btn btn-outline btn-error mb-1.5">rejected</button>
              </div>
            </div>
            </div>`
}

function makeEmptyView() {
    return `<div class="card w-full bg-base-100 shadow-sm">
                    <div class="card-body space-y-5 flex flex-col items-center text-center p-28">
                        <div>
                            <img src="./assets/file.png" alt="">
                        </div>
                        <div>
                            <h3 class="sm:text-3xl md:text-4xl font-bold md:font-semibold">No jobs available</h3>
                            <p class="text-gray">Check back soon for new job opportunities</p>
                        </div>
                    </div>
                </div>`
}