// Scrollytelling JavaScript

// Save different parts of the page as D3.js objects. Using d3 for convenience
var main = d3.select('main')
var scrollySection = main.select('#scrollytelling');
var figure = scrollySection.select('figure');
var article = scrollySection.select('article');
var steps = scrollySection.selectAll('.step');

var map = d3.select('#map');
var fit = d3.select('#fit');



// Remove the overflow:hidden css property on the div with id="outerWrapper" on squarespace. This prevents position:sticky from working on Squarespace
d3.select('#outerWrapper')
  .style('overflow', "visible")

// Set the innerWrapper width to 100% and margin to 0 for full screen images on SquareSpace.
d3.select('#innerWrapper')
  .style('width', "100%")
  .style('margin', "0px")
  .style('padding', "0px")

// Set the content padding to 0 for full screen images on SquareSpace.
d3.select('#content')
  .style('padding', "0px !important")
  .style('width', "100%")
  .style('margin', "0px")
  .attr("id", "content-thrum")

// Set the content margin to 0 for full screen images on SquareSpace.
d3.select('.main-content-wrapper')
  .style('margin', "0px")
  .style('padding', "0px")
  .style('width', "100%")

// Set the content margin to 0 for full screen images on SquareSpace.
d3.select('.sqs-block')
  .style('padding', "0px")
  .style('margin', "0px")
  .style('width', "100%")


// Set the content margin to 0 for full screen images on SquareSpace.
d3.select('.sqs-row')
  .style('padding', "0px")
  .style('margin', "0px")

var imgV1 = d3.select('#imgV1');
var imgV2 = d3.select('#imgV2');
var imgV3 = d3.select('#imgV3');
var imgV4 = d3.select('#imgV4');
var imgV5 = d3.select('#imgV5');
var imgV6 = d3.select('#imgV6');
var imgV7 = d3.select('#imgV7');
var imgV8 = d3.select('#imgV8');
var step9 = d3.select('#step9');


// Set the aspect ratio of the images. width / height
aspect = 2.03889

// Create a scrollama object.
var myScrollama = scrollama();

// These needs to be constants to improve performance on mobile.
const stepH = Math.floor(window.innerHeight * 2.5);
const figureHeight = window.innerHeight * 1.0
const figureMarginTop = (window.innerHeight - figureHeight) / 2


// generic window resize listener event
function handleResize() {
    
    console.log("handling resize")
    // 1. update height of step elements
    steps.style('height', stepH + 'px');

    figure
        .style('height', figureHeight + 'px')
        .style('top', '0px');
    
    var innerWidth = document.body.clientWidth
    var imgMarginTop = (figureHeight - innerWidth / aspect) / 2

    imgV1.style('top', imgMarginTop + 'px')
    imgV2.style('top', imgMarginTop + 'px')
    imgV3.style('top', imgMarginTop + 'px')
    imgV4.style('top', imgMarginTop + 'px')
    imgV5.style('top', imgMarginTop + 'px')
    imgV6.style('top', imgMarginTop + 'px')
    imgV7.style('top', imgMarginTop + 'px')
    imgV8.style('top', imgMarginTop + 'px')

    map.style('height', figureHeight + 'px')
    fit.style('top', -figureHeight+ 'px')


    // 3. tell scrollama to update new element dimensions
    myScrollama.resize();

}

// scrollama event handler
function handleStepChange(response) {
    
    switch(response.index) {
    case 0:
        // Set image to first version
        imgV1.style("opacity", "1")
        imgV2.style("opacity", "0")
        imgV3.style("opacity", "0")
        imgV4.style("opacity", "0")
        imgV5.style("opacity", "0")
        imgV6.style("opacity", "0")
        imgV7.style("opacity", "0")
        imgV8.style("opacity", "0")
        break;

    case 1:
        // Set image to second version
        imgV1.style("opacity", "1")
        imgV2.style("opacity", "1")
        imgV3.style("opacity", "0")
        imgV4.style("opacity", "0")
        imgV5.style("opacity", "0")
        imgV6.style("opacity", "0")
        imgV7.style("opacity", "0")
        imgV8.style("opacity", "0")
        break;

    case 2:
        // Set image to third version
        imgV1.style("opacity", "0")
        imgV2.style("opacity", "1")
        imgV3.style("opacity", "1")
        imgV4.style("opacity", "0")
        imgV5.style("opacity", "0")
        imgV6.style("opacity", "0")
        imgV7.style("opacity", "0")
        imgV8.style("opacity", "0")
        break;

        case 3:
        // Set image to 4th version
        imgV1.style("opacity", "0")
        imgV2.style("opacity", "0")
        imgV3.style("opacity", "1")
        imgV4.style("opacity", "1")
        imgV5.style("opacity", "0")
        imgV6.style("opacity", "0")
        imgV7.style("opacity", "0")
        break;

        case 4:
        // Set image to 5th version
        imgV1.style("opacity", "0")
        imgV2.style("opacity", "0")
        imgV3.style("opacity", "0")
        imgV4.style("opacity", "1")
        imgV5.style("opacity", "1")
        imgV6.style("opacity", "0")
        imgV7.style("opacity", "0")
        imgV8.style("opacity", "0")
        break;

        case 5:
        // Set image to 6th version
        imgV1.style("opacity", "0")
        imgV2.style("opacity", "0")
        imgV3.style("opacity", "0")
        imgV4.style("opacity", "0")
        imgV5.style("opacity", "1")
        imgV6.style("opacity", "1")
        imgV7.style("opacity", "0")
        imgV8.style("opacity", "0")
        break;

        case 6:
        // Set image to 6th version
        imgV1.style("opacity", "0")
        imgV2.style("opacity", "0")
        imgV3.style("opacity", "0")
        imgV4.style("opacity", "0")
        imgV5.style("opacity", "0")
        imgV6.style("opacity", "1")
        imgV7.style("opacity", "1")
        imgV8.style("opacity", "0")

        case 7:
        // Set image to 6th version
        imgV1.style("opacity", "0")
        imgV2.style("opacity", "0")
        imgV3.style("opacity", "0")
        imgV4.style("opacity", "0")
        imgV5.style("opacity", "0")
        imgV6.style("opacity", "0")
        imgV7.style("opacity", "1")
        imgV8.style("opacity", "1")
        break;


    default:
        // do nothing
    }

    // change the class of the step divs to indicate which step is active
    steps.classed('is-active', function (d, i) {
    return i === response.index;
    })

}

function init() {

    // 0. Display first image only once the all sizes are detected
    imgV1.style("opacity", "1")

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    myScrollama.setup({
    step: '.step',
    offset: figureHeight * 1.67 + "px",
    // set to true to see debug horizontal line
    debug: false,
    }).onStepEnter(handleStepChange)
    

    // setup resize event
    window.addEventListener('resize', handleResize);
}

// kick things off
init();