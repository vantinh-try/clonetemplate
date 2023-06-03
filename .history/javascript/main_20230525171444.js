// lấy thằng cha
const dropMenu = document.querySelector(".search_drop");   
// tạo div với class là nav_search-dropcontent
const navSearchDropcontent = document.createElement("div");
navSearchDropcontent.classList.add("nav_search-dropcontent");
const handleOutMenu = document.querySelector(".nav_search-dropcontent"); 
// sự kiện click vô dropMenu hiện lên menu
dropMenu.addEventListener("click", function (e) {
    document.querySelector(".nav_search-dropcontent").style.display = "block";
});



/* <div class="nav_search-dropcontent">
                                    <p>search items</p>
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
                                    </ul>
                                </div> --> */