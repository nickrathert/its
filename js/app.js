console.log("Hello there.");

// if appointments page
const iframe = document.getElementsByTagName("iframe");
// ,
//       iWindow = iframe.contentWindow,
//       iDocument = iWindow.document;

console.log(iframe);

function iframeRef( frameRef ) {
    return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument
}

// var inside = iframeRef( iframe[0] );
// console.log(inside);

// var iheader = inside.getElementsByClassName(".widget-header");
// iheader.style.display = "none";

iframe[0].addEventListener("load", function() {
    console.log("iframe loaded");

    // var inside = iframeRef( this );
    // console.log(inside);

    var iheader = this.contentWindow.document.getElementsByClassName(".widget-header");
    iheader[0].style.display = "none";
  });