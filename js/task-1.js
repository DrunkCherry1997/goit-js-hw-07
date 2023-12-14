
const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);


listItem.forEach(item => {
    
    const categoryName = item.querySelector('h2').textContent;

    
    const itemCount = item.querySelectorAll('li').length;

   
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});
