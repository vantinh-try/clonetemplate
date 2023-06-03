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

const div = document.createElement('div');
div.classList.add('nav_search-dropcontent');

// hàm tạo các mục menu
function generateMenuItems() {
    let p = document.createElement('p');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let a = document.createElement('a');
    ul.classList.add('menu_list');
    
    menuItem.forEach(item => {
        li.classList.add('menu_item');
        a.href = item.href;
        a.textContent = item.textContent;
        li.appendChild(a);
        ul.appendChild(li);
    })
}
generateMenuItems();
