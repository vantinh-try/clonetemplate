const dropMenu = document.querySelector(".search_drop");   
const navSearchDropcontent = document.createElement("div");
dropMenu.appendChild(navSearchDropcontent);
navSearchDropcontent.classList.add("nav_search-dropcontent");
navSearchDropcontent.insertAdjacentElement("beforeend",)
const textNodeDropMenu = document.createTextNode(`<p>search items</p>
<ul class="menu_list">
    <li class="menu_item"><a href="#">All Items</a></li>
    <li class="menu_item"><a href="#">Stock Video</a></li>
    <li class="menu_item"><a href="#">Video Templates</a></li>
    <li class="menu_item"><a href="#">Music</a></li>
    <li class="menu_item"><a href="#">Sound Effects</a></li>
    <li class="menu_item"><a href="#">Graphic Templates</a></li>
    <li class="menu_item"><a href="#">Graphics</a></li>
    <li class="menu_item"><a href="#">Presentation Templates</a></li>
    <li class="menu_item"><a href="#">Photos</a></li>
    <li class="menu_item"><a href="#">Fonts</a></li>
    <li class="menu_item"><a href="#">Add-ons</a></li>
    <li class="menu_item"><a href="#">Web Templates</a></li>
    <li class="menu_item"><a href="#">CMS Templates</a></li>
    <li class="menu_item"><a href="#">WordPress</a></li>
    <li class="menu_item"><a href="#">3D</a></li>
</ul>`)

// tạo một thẻ div với class là nav_search-dropcontent;
const navSearch = document.createElement("div").classList.add("nav_search-dropcontent");
const nodeNavSearch = document.querySelector(".nav_search-dropcontent");
nodeNavSearch.textContent = 
// const navMenuContent = document.createTextNode()
dropMenu.appendChild(nodeNavSearch);
// navSearch.appendChild(navMenuContent);