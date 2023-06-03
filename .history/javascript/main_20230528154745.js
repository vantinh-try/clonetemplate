const searchDrop = document.querySelector(".search_drop");
const searchDropDiv = document.createElement("div").className("nav_search-dropcontent");
const searchDropP = document.createElement("p");
const searchDropUl = document.createElement("ul").className("menu_list");
const searchDropLi = document.createElement("li").className("menu_item");
const searchDropA = document.createElement("a");
console.log(searchDropP);

const menuItem = [
    {href: '#', title: 'Stock Video'},
    {href: '#', title: 'Video Templates'},
    {href: '#', title: 'Music'},
    {href: '#', title: 'Sound Effects'},
    {href: '#', title: 'Graphic Templates'},
    {href: '#', title: 'Graphics'},
    {href: '#', title: 'Presentation Templates'},
    {href: '#', title: 'Photos'},
    {href: '#', title: 'Fonts'},
    {href: '#', title: 'Add-ons'},
    {href: '#', title: 'Web Templates'},
    {href: '#', title: 'CMS Templates'},
    {href: '#', title: 'WordPress'},
    {href: '#', title: '3D'},
];

// hàm tạo các mục menu
function generateMenuItems() {
    searchDropP.textContent = "Search items";
    menuItem.forEach(item => {
        searchDropA.href = item.href;
        searchDropA.textContent = item.textContent;
        searchDropLi.appendChild(searchDropA);
        searchDropUl.appendChild(searchDropLi);
    })
    searchDropDiv.appendChild(searchDropUl);
}
generateMenuItems();

searchDrop.addEventListener("click", function () {
    searchDrop.appendChild(searchDropDiv);
    searchDropDiv.classList.toggle("nav_drop-show");
})