// // /* eslint-disable */
// import debounce from "./tools/debounce";

document.body.style.overflow = "hidden";
const animatedSectionsNode = document.querySelectorAll(
  ".smooth_scroll-section"
);
const sectionsContainer = document.querySelector(".smooth_scroll");
const screenHeight = window.innerHeight;
const elementsArchors = [...animatedSectionsNode].map((nodeItem) =>
  nodeItem.getAttribute("data-anchor")
);

let prevTime = new Date().getTime();
let scrollings = [];
let canScroll = true;

let isBeyondScroll = false;
let isCanDown = true;
let isCanUp = true;

let isPrevScrollDown = true
// let isFirstScroll = true;

let activeAnimation = false;
let _g_animateScroll;
const delay = 500;

const setTranslate = (yPos) => {
  sectionsContainer.style.transform =
    "translate3d(" + 0 + ", " + -yPos + "px, 0)";
};

const isCanBeScrolled = (index) => {
  return index >= 0 && animatedSectionsNode.length > index;
};

const getElementIndex = (element) => {
  const elementAnchors = element.getAttribute("data-anchor");
  const sectionAnchors = elementsArchors;
  return sectionAnchors.indexOf(elementAnchors);
};

const getElementNodeByIndex = (elementIndex) =>
  [...animatedSectionsNode].filter(
    (nodeItem, index) => index === elementIndex
  )[0];

const getNextSectionIndex = (currentSection, isScrollDown) => {
  const currentElementIndex = getElementIndex(currentSection);
  const nextElementIndex = isScrollDown
    ? currentElementIndex + 1
    : currentElementIndex - 1;
  return {
    index: nextElementIndex,
    node: getElementNodeByIndex(nextElementIndex),
  };
};

const getScrolledPositionByIndex = (elementIndex) =>
  screenHeight * elementIndex;

const getNextSectionByDirection = (currentSection, isScrollDown) => {
  return getNextSectionIndex(currentSection, isScrollDown);
};

const resetActiveClass = (currentSection) => {
  currentSection.classList.remove("active_section");

  isBeyondScroll = false
  isCanDown = true;
  isCanUp = true;
};

const setActiveClass = (currentSection) => {
  currentSection.classList.add("active_section");
};

const getContentBlock = (activeElement) => {
  const elementAnchors = activeElement.getAttribute("data-anchor");
  return document.querySelector(`.${elementAnchors}-content`);
};

function hasContentBeyondScroll(activeElement) {
    console.log('here')
  const activeElementContent = getContentBlock(activeElement);

  isBeyondScroll = true;
  isCanDown = false;
  isCanUp = false;

  return activeElementContent.scrollHeight > window.innerHeight;
}

function scrolling(type) {
  var isScrollDown = type === "down";
  const currentSection = document.querySelector(".active_section");
  const nextActiveOptions = getNextSectionByDirection(
    currentSection,
    isScrollDown
  );

  console.log("isCanUp", isCanUp, "isCanDown", isCanDown, "isBeyondScroll", isBeyondScroll)

  if (!isBeyondScroll && hasContentBeyondScroll(currentSection)) {
    return 
  } 

  if (isCanBeScrolled(nextActiveOptions.index)) {
    if ((isCanUp || isPrevScrollDown) && !isScrollDown) {
        scrollTo(nextActiveOptions, delay, () => {
            resetActiveClass(currentSection);
            canScroll = true;
            isPrevScrollDown = false
        });
        return
    }

    if ((isCanDown || !isPrevScrollDown) && isScrollDown) {
        scrollTo(nextActiveOptions, delay, () => {
            resetActiveClass(currentSection);
            canScroll = true;
            isPrevScrollDown = true;
        });
        return
    }

    if (isScrollDown) {
        isCanUp = false;
    } else {
        isCanDown = false;
    }

    if (isBeyondScroll) {
        scrollBeyondScroll(currentSection, isScrollDown);
        return
    }
    
    
    if (!isBeyondScroll) {
        scrollTo(nextActiveOptions, delay, () => {
        canScroll = true;
        });
    }
  }
}

function getAverage(elements, number) {
  var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

  var lastElements = elements.slice(Math.max(elements.length - number, 1));

  for (var i = 0; i < lastElements.length; i++) {
    sum = sum + lastElements[i];
  }

  return Math.ceil(sum / number);
}

const onWheel = (e) => {
  let curTime = new Date().getTime();
  let value = e.wheelDelta || -e.deltaY || -e.detail;
  let delta = Math.max(-1, Math.min(1, value));
  let horizontalDetection =
    typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
  let isScrollingVertically =
    Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
    Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
    !horizontalDetection;

  if (scrollings.length > 149) {
    scrollings.shift();
  }

  scrollings.push(Math.abs(value));

  let timeDiff = curTime - prevTime;
  prevTime = curTime;

  if (timeDiff > 200) {
    scrollings = [];
  }

  if (canScroll) {
    let averageEnd = getAverage(scrollings, 10);
    let averageMiddle = getAverage(scrollings, 70);
    let isAccelerating = averageEnd >= averageMiddle;
    if (isAccelerating && isScrollingVertically) {
      if (delta < 0) {
        scrolling("down");
      } else {
        scrolling("up");
      }
    }
  }
};

function scrollBeyondScroll(currentSection, isScrollDown) {
  const activeElementContent = getContentBlock(currentSection);
  const { top, bottom } = activeElementContent.getBoundingClientRect();

  if (isScrollDown) {
    if (window.innerHeight - bottom + 10 >= 0) {
    setTimeout(() => {
        console.log('down - true --------------')
        isCanDown = true
    }, delay);
    }
  } else {
    if (top === 0) {
    setTimeout(() => {
        console.log('up - true --------------')
        isCanUp = true
    }, delay);
    }
  }
}

function scrollTo(elementOptions, duration, callback) {
  let startTime;
  const elementPosition = getScrolledPositionByIndex(elementOptions.index);

  canScroll = false;
  activeAnimation = true;

  if (_g_animateScroll) {
    window.cancelAnimationFrame(_g_animateScroll);
  }

  _g_animateScroll = function g_animateScroll(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    let currentTime = Math.floor(timestamp - startTime);

    if (activeAnimation) {
      if (currentTime <= duration) {
        setTranslate(elementPosition);
        setActiveClass(elementOptions.node);
      }

      if (currentTime < duration) {
        window.requestAnimationFrame(_g_animateScroll);
      } else if (typeof callback !== "undefined") {
        callback();
        activeAnimation = false;
      }
    }
  };

  window.requestAnimationFrame(_g_animateScroll);
}

document.addEventListener("wheel", onWheel);
