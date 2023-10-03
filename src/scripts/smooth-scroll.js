// // /* eslint-disable */
// import debounce from "./tools/debounce";

const initScroll = () => {
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

  // let isPrevScrollDown = true;
  // let isFirstScroll = true;

  let activeAnimation = false;
  let _g_animateScroll;
  const delay = 500;

  const setTranslate = (yPos) => {
    sectionsContainer.style.transform =
      "translate3d(" + 0 + ", " + -yPos + "px, 0)";
  };

  function isCanBeScrolled(index) {
    return index >= 0 && animatedSectionsNode.length > index;
  }

  function getElementIndex(element) {
    const elementAnchors = element.getAttribute("data-anchor");
    const sectionAnchors = elementsArchors;
    return sectionAnchors.indexOf(elementAnchors);
  }

  const getElementNodeByIndex = (elementIndex) =>
    [...animatedSectionsNode].filter(
      (nodeItem, index) => index === elementIndex
    )[0];

  // Will change by requirements
  const getScrolledPositionByIndex = (elementIndex) =>
    screenHeight * elementIndex;

  function getSectionOptionsByDirection(scrollDirection) {
    const currentSection = document.querySelector(".active_section");
    const currentElementIndex = getElementIndex(currentSection);
    const nextElementIndex = currentElementIndex + scrollDirection;
    return {
      index: nextElementIndex,
      node: getElementNodeByIndex(nextElementIndex),
    };
  }

  function resetActiveClass() {
    const activeElement = document.querySelector(".active_section");
    activeElement.classList.remove("active_section");
  }

  function setActiveClass(newCurrentSection) {
    newCurrentSection.classList.add("active_section");
  }

  function resetStatuses() {
    isBeyondScroll = false;
    isCanDown = true;
    isCanUp = true;
    canScroll = true;
    // isPrevScrollDown = false;
  }

  function isElementOnTheTop() {
    const activeElement = document.querySelector(".active_section");
    const activeElementContent = getContentBlock(activeElement);
    const { top } = activeElementContent.getBoundingClientRect();
    return top === 0;
  }

  function isElementOnTheBotton() {
    const activeElement = document.querySelector(".active_section");
    const activeElementContent = getContentBlock(activeElement);
    const { bottom } = activeElementContent.getBoundingClientRect();
    return window.innerHeight - bottom + 10 >= 0;
  }

  function checkIsCanScroll(scrollDirection) {
    switch (scrollDirection) {
      case -1:
        if (isElementOnTheTop()) {
          setTimeout(() => {
            isCanUp = true;
          }, delay);
        }
        break;
      case 1:
        if (isElementOnTheBotton()) {
          setTimeout(() => {
            isCanDown = true;
          }, delay);
        }
        break;
      default:
        break;
    }
  }

  function scrollUp() {
    const nextActiveOptions = getSectionOptionsByDirection(-1);
    isCanDown = false;

    if (isCanBeScrolled(nextActiveOptions.index)) {
      if (!isBeyondScroll) {
        scrollTo(nextActiveOptions, delay);
      } else if (isCanUp && isBeyondScroll) {
        scrollTo(nextActiveOptions, delay);
      } else {
        checkIsCanScroll(-1);
      }
    }
  }

  function scrollDown() {
    const nextActiveOptions = getSectionOptionsByDirection(1);
    isCanUp = false;

    if (isCanBeScrolled(nextActiveOptions.index)) {
      if (!isBeyondScroll) {
        scrollTo(nextActiveOptions, delay);
      } else if (isCanDown && isBeyondScroll) {
        scrollTo(nextActiveOptions, delay);
      } else {
        checkIsCanScroll(1);
      }
    }
  }

  function scrolling(type) {
    var scrollNext = type === "down" ? scrollDown : scrollUp;

    if (!isBeyondScroll) {
      checkIsHasContentBeyond();
    }

    scrollNext();
  }

  function checkIsHasContentBeyond() {
    const activeElement = document.querySelector(".active_section");
    const activeElementContent = getContentBlock(activeElement);

    isBeyondScroll = true;
    isCanDown = false;
    isCanUp = false;

    return activeElementContent.scrollHeight > window.innerHeight;
  }

  function getContentBlock(element) {
    const elementAnchors = element.getAttribute("data-anchor");
    return document.querySelector(`.${elementAnchors}-content`);
  }

  function getAverage(elements, number) {
    var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

    var lastElements = elements.slice(Math.max(elements.length - number, 1));

    for (var i = 0; i < lastElements.length; i++) {
      sum = sum + lastElements[i];
    }

    return Math.ceil(sum / number);
  }

  function onWheel(e) {
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
          resetActiveClass();
          setTranslate(elementPosition);
          resetStatuses();
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

  document.addEventListener("wheel", onWheel, true);
};

if (window.innerWidth > 876) {
  initScroll();
}





  // const checkAndStart = () => {
  //     if (window.innerWidth > 876) {
  //         console.log('here')
  //         const currentSection = document.querySelector(".active_section");
  //         scrollTo({index: 0, node: animatedSectionsNode[0]}, 100, () => {
  //             resetActiveClass(currentSection)
  //         })
  //         document.addEventListener("wheel", onWheel, true);
  //     } else {
  //         console.log('here2')
  //         document.body.style.overflow = "unset";
  //         document.removeEventListener("wheel", onWheel, true);
  //     }
  // }
  // checkAndStart()