function renderData() {
  let b = localStorage.getItem("a");
  console.log(b);
  b = JSON.parse(b);
  
  let arr = b.poster;
  console.log("b==========",b)
  console.log("arr========",arr)
  for(let i=0;i<arr.length;i++)

    document.getElementById("d1").innerHTML +=
    `<div class="col"><div class="card" style="width: 18rem; background-color: aquamarine; margin-top: 10px">
    <img src='${arr[i]}' class="image" style="height: 300px;">
    <div class="title">
      <h4 class="card-title">Title: ${b.title}</h4>
    <div class='trailer'>
      <a target="_blank" href="${b.trailer}">Watch Trailer</a>
    </div>
    </div>
    </div>`
}