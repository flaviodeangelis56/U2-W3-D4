const URL = "https://api.pexels.com/v1/search?query=nature";
const URL2 = "https://api.pexels.com/v1/search?query=people";
const buttonLoad = document.getElementById("load");
buttonLoad.onclick = async () => {
  try {
    const resp = await fetch(URL, {
      method: "GET",
      headers: { Authorization: "EWHuNTgUqxyDyH1CdC4WMpOS6yYoisDUngfWSgckvvi60xRSuEpYauN9" },
    });
    const imgs = await resp.json();

    const imgArr = imgs.photos;
    console.log(imgArr[0]);
    const row = document.getElementById("row");
    imgArr.forEach(element => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
      <div class="card mb-4 shadow-sm">
      <img src="${element.src.original}" alt="" />
      <div class="card-body">
      <a href="dettagli.html?imgId=${element.id}"><h5 class="card-title">Lorem Ipsum</h5></a>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary hide">Hide</button>
          </div>
          <small class="text-muted">${element.id}</small>
        </div>
      </div>
    </div>`;
      row.appendChild(col);
      const buttonHide = document.getElementsByClassName("hide");
      for (let i = 0; i < buttonHide.length; i++) {
        const element = buttonHide[i];
        element.onclick = event => {
          const card = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
          card.remove();
        };
      }
    });
  } catch (error) {}
};

const buttonLoad2 = document.getElementById("load2");
buttonLoad2.onclick = async () => {
  try {
    const resp = await fetch(URL2, {
      method: "GET",
      headers: { Authorization: "EWHuNTgUqxyDyH1CdC4WMpOS6yYoisDUngfWSgckvvi60xRSuEpYauN9" },
    });

    const imgs = await resp.json();

    const imgArr = imgs.photos;
    console.log(imgArr[0]);
    const row = document.getElementById("row");
    imgArr.forEach(element => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
      <div class="card mb-4 shadow-sm">
      <img src="${element.src.original}" alt="" />
      <div class="card-body">
      <a href="dettagli.html?imgId=${element.id}"><h5 class="card-title">Lorem Ipsum</h5></a>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary hide">Hide</button>
          </div>
          <small class="text-muted">${element.id}</small>
        </div>
      </div>
    </div>`;
      row.appendChild(col);
    });

    const buttonHide = document.getElementsByClassName("hide");
    for (let i = 0; i < buttonHide.length; i++) {
      const element = buttonHide[i];
      element.onclick = event => {
        const card = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        card.remove();
      };
    }
  } catch (error) {}
};

const cercaImmagine = async event => {
  event.preventDefault();
  const input = document.getElementById("input").value;
  const URL = "https://api.pexels.com/v1/search?query=" + input;

  try {
    const resp = await fetch(URL, {
      method: "GET",
      headers: { Authorization: "EWHuNTgUqxyDyH1CdC4WMpOS6yYoisDUngfWSgckvvi60xRSuEpYauN9" },
    });
    const imgs = await resp.json();

    const imgArr = imgs.photos;
    console.log(imgArr[0]);
    const row = document.getElementById("row");
    imgArr.forEach(element => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
      <div class="card mb-4 shadow-sm">
      <img src="${element.src.original}" alt="" ismap />
      <div class="card-body">
           <a href="dettagli.html?imgId=${element.id}"><h5 class="card-title">Lorem Ipsum</h5></a>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary hide">Hide</button>
          </div>
          <small class="text-muted">${element.id}</small>
        </div>
      </div>
    </div>`;
      row.appendChild(col);
      const buttonHide = document.getElementsByClassName("hide");
      for (let i = 0; i < buttonHide.length; i++) {
        const element = buttonHide[i];
        element.onclick = event => {
          const card = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
          card.remove();
        };
      }
    });
  } catch (error) {}
};
