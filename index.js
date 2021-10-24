const blogs  = [];
/* const is not meant to be reassigned. we're only pushing 
posts inside of the array. the array itself won't change.
*/
const main = () => document.querySelector("#main")
const form = () => document.querySelector("#new-blog-form")
const h1 = () => document.querySelector("#page-title")
const titleInput= () => document.querySelector("#title")
const contentInput= () => document.querySelector("#content")
const submitButton = () => document.querySelector("#submit-button")
const showFormButton = () => document.querySelector("#show-form")
const showBlogsButton = () => document.querySelector("#show-blogs")
const blogsList = () => document.querySelector("#blogs-list")

const emptyMain = () => main().innerHTML = ""

const formTemplate = () => {
    if (form() === null) {
        return `
        <h1 id="page-title">Create New Blog</h1>   
        <form id="new-blog-form">
            <label for="title">Title</label>
            <input type="text" id="title">
            <label for="content">Content</label>
            <input type="text" id="content">
            <input type="submit" value="Create!" id="submit-button">
        </form>
 
        `
    } else {
        return null;
    }
}

const blogsTemplate = () => {
    if (blogsList() === null) {
        return `
        <h1 id="page-blogs">Blogs</h1>
        <ul id="blogs-list"></ul>
        `
    } else {
        return null;
    }
}

const handleShowFormClick = (e) => {
    e.preventDefault();
    main().innerHTML = formTemplate();
    if (form()) {
    form().addEventListener("submit", handleSubmit)
    }
}

const handleShowBlogsClick = (e) => {
    e.preventDefault();
    main().innerHTML = blogsTemplate();
}

const handleSubmit = (e) => {
    e.preventDefault();
    debugger
}

document.addEventListener("DOMContentLoaded", () => {
    showFormButton().addEventListener("click", handleShowFormClick);
    showBlogsButton().addEventListener("click", handleShowBlogsClick);
})
//DOMContentLoaded doesn't wait for stylesheets and images
//but load does.
