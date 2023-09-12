const list = document.querySelector("#categories")
console.log(`Number of categories: ${list.children.length}`);

Array.from(list.children).forEach(listItem => {

    // const categoryName = listItem.querySelector("h2").textContent;
    const categoryName = listItem.firstElementChild.textContent;

    const categoryListCount = listItem.lastElementChild.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryListCount}`)
});

