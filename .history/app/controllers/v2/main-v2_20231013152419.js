import { https } from "../../service/service.js";
import { layThongTinTuForm } from "../v1/controllers-v1.js";
import { renderFoodList } from "./controllers-v2.js";
let fetchFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
// lần đầu load trang
fetchFoodList();
function deleteFood(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      fetchFoodList();
      // sau khi xoá thành công => gọi lại api lấy data mới nhất => update layout
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
window.deleteFood = deleteFood;

window.addFood = () => {
  let food = layThongTinTuForm();
  https
    .post("/food", food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
