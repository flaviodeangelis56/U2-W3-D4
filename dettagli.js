const imgId = new URLSearchParams(window.location.search).get("imgId");
const URL = "https://api.pexels.com/v1/photos/" + imgId;

window.onload = async () => {
  try {
    const resp = await fetch(URL, {
      method: "GET",
      headers: { Authorization: "EWHuNTgUqxyDyH1CdC4WMpOS6yYoisDUngfWSgckvvi60xRSuEpYauN9" },
    });
    const img = await resp.json();
    console.log(img);
    const div = document.getElementById("artist");
    const append = document.createElement("div");
    append.innerHTML = `
<img src="${img.src.original}" style="width:300px"/>
<p>fotografo: ${img.photographer}</p>
<p>link fotografo: <a href="${img.photographer_url}"> ${img.photographer_url}</a></p>`;
    div.appendChild(append);
  } catch (error) {}
};
