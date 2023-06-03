const dropMenu = document.querySelector(".search_drop");
const isShowDropMenu = document.querySelector(".nav_drop-show");

// tạo div với class là nav_search-dropcontent
const navSearchDropcontent = document.createElement("div");
navSearchDropcontent.classList.add("nav_search-dropcontent");
const handleOutMenu = document.querySelector(".nav_search-dropcontent");

// sự kiện click vô dropMenu hiện lên menu
dropMenu.addEventListener("click", function (e) {
    handleOutMenu.style.display = "block";
});
// document.addEventListener("click", function (e) {
//     if (!event.currentTarget.matches(".search_drop")) {
//         document.querySelector(".nav_search-dropcontent").style.display = "none";
//     }
// });



// // sự kiện click vô dropMenu hiện lên menu
// dropMenu.addEventListener("click", function (e) {
//     document.querySelector(".nav_search-dropcontent").classList.toggle("nav_drop-show");
// });

// const menuItems = [
//     { text: 'All Items', href: '#' },
//     { text: 'Stock Video', href: '#' },
//     { text: 'Video Templates', href: '#' },
//     { text: 'Music', href: '#' },
//     { text: 'Sound Effects', href: '#' },
//     { text: 'Graphic Templates', href: '#' },
//     { text: 'Graphics', href: '#' },
//     { text: 'Presentation Templates', href: '#' },
//     { text: 'Photos', href: '#' },
//     { text: 'Fonts', href: '#' },
//     { text: 'Add-ons', href: '#' },
//     { text: 'Web Templates', href: '#' },
//     { text: 'CMS Templates', href: '#' },
//     { text: 'WordPress', href: '#' },
//     { text: '3D', href: '#' }
// ];

// function generateMenuItems() {
//     const menuList = document.getElementById('menu_list');

//     menuItems.forEach(item => {
//         const li = document.createElement('li');
//         const a = document.createElement('a');
//         a.href = item.href;
//         a.textContent = item.text;
//         li.classList.add('menu_item');
//         li.appendChild(a);
//         menuList.appendChild(li);
//     });
// }

// generateMenuItems();

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