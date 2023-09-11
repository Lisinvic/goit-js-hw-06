const list = document.querySelector("#categories")
console.log(`Number of categories: ${list.children.length}`);

Array.from(list.children).forEach(listItem => {


    const categoryName = listItem.querySelector("h2").textContent;
    const categoryListCount = listItem.querySelector("ul").children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryListCount}`)
});

