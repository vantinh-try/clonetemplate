//* phần menu
const searchDrop = document.querySelector(".search_drop");

// mảng lưu trữ dữ liệu tạo danh sách dropMenu
const menuItem = [
    { href: "#", title: "Stock Video" },
    { href: "#", title: "Video Templates" },
    { href: "#", title: "Music" },
    { href: "#", title: "Sound Effects" },
    { href: "#", title: "Graphic Templates" },
    { href: "#", title: "Graphics" },
    { href: "#", title: "Presentation Templates" },
    { href: "#", title: "Photos" },
    { href: "#", title: "Fonts" },
    { href: "#", title: "Add-ons" },
    { href: "#", title: "Web Templates" },
    { href: "#", title: "CMS Templates" },
    { href: "#", title: "WordPress" },
    { href: "#", title: "3D" },
];

// tạo div chứa danh sách ul li listItem của menuDrop
const searchDropDiv = document.createElement("div");
searchDropDiv.classList.add("nav_search-dropcontent");

// hàm tạo các danh mục menuDrop
function generateMenuItems() {
    let p = document.createElement("p"); // tạo thẻ p và thêm nội dung
    p.textContent = "search items";

    let ul = document.createElement("ul"); // tạo thẻ ul với class là menu_list
    ul.classList.add("menu_list");

    // duyệt qua từng phần tử trong mảng để lấy giá trị
    menuItem.forEach((item) => {
        let a = document.createElement("a"); // tạo thẻ a
        let li = document.createElement("li"); // tạo thẻ li class là menu_item
        li.classList.add("menu_item");

        a.href = item.href; // lặp từng thẻ a và gán href cho nó
        a.textContent = item.title; // lặp từng thẻ a và gán nội dung cho nó
        li.appendChild(a);
        ul.appendChild(li);
    });
    searchDropDiv.appendChild(ul);
    searchDrop.appendChild(searchDropDiv);
    console.log(searchDrop);
}
generateMenuItems();

searchDrop.addEventListener("click", function () {
    searchDropDiv.classList.toggle("nav_drop-show");
    document.addEventListener("click", function () {
        if (
            !searchDrop.contains(event.target) &&
            !event.target.matches("searchDrop")
        ) {
            searchDropDiv.classList.remove("nav_drop-show");
        }
    });
});

// * sử lí hover chuột phát video
const hoverPlay = document.querySelector(".dowfile-video");

hoverPlay.addEventListener("mouseover", function () {
    hoverPlay.play();
});
