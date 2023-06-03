const searchDrop = document.querySelector(".search_drop");

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

const searchDropDiv = document.createElement('div');
searchDropDiv.classList.add('nav_search-dropcontent');

// hàm tạo các mục menu
function generateMenuItems() {
    let p = document.createElement('p');
    let ul = document.createElement('ul');
    ul.classList.add('menu_list');
    p.textContent = "search items";
    menuItem.forEach( item => {
        let a = document.createElement('a');
        let li = document.createElement('li');
        li.classList.add('menu_item');
        a.href = item.href;
        a.textContent = item.title;
        li.appendChild(a);
        ul.appendChild(li);
    })
    searchDropDiv.appendChild(ul);
    // searchDrop.appendChild(searchDropDiv);
    searchDropDiv.appendChild(searchDrop);
}
generateMenuItems();

searchDrop.addEventListener("click", function () {
    
    document.body.appendChild(searchDropDiv);
    searchDropDiv.classList.toggle("nav_drop-show")
} )