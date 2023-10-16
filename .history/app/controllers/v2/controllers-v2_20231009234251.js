export let renderFoodList = (foodArr) => {
    let contentHTLM = "";
    foodArr.forEach((food) => {
      let { ma, ten, gia, khuyenMai, hinhAnh, moTa, loai, tinhTrang } = food;
      let trString = ` <tr>
                          <td>${ma}</td>
                          <td>${ten}</td>
                          <td>${loai}</td>
                          <td>${gia}</td>
                          <td>${khuyenMai}</td>
                          <td>0</td>
                          <td>${tinhTrang}</td>
                          <td>
                          <button onclick=deleteFood(${ma})
                           class="btn btn-danger">Xoá</button></td>
                      </tr> `;
      contentHTLM = contentHTLM + trString;
    });
  
    document.getElementById("tbodyFood").innerHTML = contentHTLM;
  };
  