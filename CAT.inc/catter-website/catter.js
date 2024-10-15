let topcatter_style_open = `
    display: flex;
    background-color: #1f1f1f;
    height: 100px;
    width: calc(100% - 250px);
    gap: 10px;
    justify-content: space-between;
    transition: 0.7s;
`;
let topcatter_style_closed = `
    display: flex;
    background-color: #1f1f1f;
    height: 100px;
    width: calc(100% - 100px);
    gap: 10px;
    justify-content: space-between;
    transition: 0.7s;
`;

let nav_style_open = `
    width: 250px;
    height: 1000px;
    background-color: #3c3c3c;
    transition: 0.7s;
`;
let nav_style_closed = `
    width: 100px;
    height: 100px;
    background-color: #1f1f1f;
    transition: 0.7s;
`;

let tab_style_open = `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
let tab_style_closed = `
    display: none;
`

function sideNavIn() {
    // console.log("in");
    document.getElementById("top-catter").style.cssText = `${topcatter_style_open}`;
    document.getElementById("side-bar").style.cssText = `${nav_style_open}`;
    document.getElementById("catter-body").style.width = "calc(100% - 250px)"
    document.getElementById("nav_link_tab").style.cssText = tab_style_open

    document.getElementById("side-bar").setAttribute("onclick", "sideNavOut()");
}

function sideNavOut(){
    // console.log("out");
    document.getElementById("top-catter").style.cssText = `${topcatter_style_closed}`;
    document.getElementById("side-bar").style.cssText = `${nav_style_closed}`;
    document.getElementById("catter-body").style.width = "calc(100% - 250px)"
    document.getElementById("nav_link_tab").style.cssText = tab_style_closed;

    document.getElementById("side-bar").setAttribute("onclick", "sideNavIn()");
}