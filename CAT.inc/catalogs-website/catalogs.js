let topcatalogs_style_open = `
    display: flex;
    background-color: #1f1f1f;
    height: 100px;
    width: calc(100% - 250px);
    gap: 10px;
    justify-content: space-between;
    transition: 0.7s;
`;
let topcatalogs_style_closed = `
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

document.getElementById("advertisement").style.height = document.getElementById("content").style.height;

function sideNavOpen() {
    // console.log("in");
    document.getElementById("top-catalogs").style.cssText = `${topcatalogs_style_open}`;
    document.getElementById("side-bar").style.cssText = `${nav_style_open}`;
    document.getElementById("catalogs-body").style.width = "calc(100% - 255px)"
    document.getElementById("nav_link_tab").style.cssText = tab_style_open;
    document.getElementById("link1").style.display = 'block'
    document.getElementById("link2").style.display = 'block'
    document.getElementById("link3").style.display = 'block'
    document.getElementById("link4").style.display = 'block'

    document.getElementById("side-bar").setAttribute("onclick", "sideNavClose()");
}

function sideNavClose(){
    // console.log("out");
    document.getElementById("top-catalogs").style.cssText = `${topcatalogs_style_closed}`;
    document.getElementById("side-bar").style.cssText = `${nav_style_closed}`;
    document.getElementById("catalogs-body").style.width = "100%"
    document.getElementById("nav_link_tab").style.cssText = tab_style_closed;
    document.getElementById("link1").style.display = 'none'
    document.getElementById("link2").style.display = 'none'
    document.getElementById("link3").style.display = 'none'
    document.getElementById("link4").style.display = 'none'

    document.getElementById("side-bar").setAttribute("onclick", "sideNavOpen()");
}