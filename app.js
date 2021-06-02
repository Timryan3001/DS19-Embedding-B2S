console.log("hello from b2s");

let viz;

//To do list:
// 1. select the container in the HTML
// 2. give the viz options (height and URL)
// 3. Variable for the dashbaord URL

const vizContainer = document.getElementById("vizContainer");
const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const vizOptions = {
  device: "desktop",
  height: 800,
  width: 1000,
  hideToolbar: true,
  Category: ["Technology", "Furniture"],
  onFirstInteractive: function () {
    console.log("this viz is interactive, disabling button");
    document.getElementById("exportPdf").disabled = false;
  },
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

// wait until the page has fully laoded then show dashboard
document.addEventListener("DOMContentLoaded", initViz);

// https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm tableau js docs

// Export PDF button
// Button element in your html
// link the button to the JS
// create the tableau function
// add a listener to carry out the function when clicking the button

const exportPdf = document.getElementById("exportPdf");

function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF export window loaded");
}

exportPdf.addEventListener("click", loadPdf);

const exportPpt = document.getElementById("exportPpt");

function loadPpt() {
  viz.showExportPowerPointDialog();
  console.log("PPT export window loaded");
}

exportPpt.addEventListener("click", loadPpt);
