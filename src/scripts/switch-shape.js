const SWITCH_TYPES = Object.freeze({
  block: "block",
  row: "row",
});

const createSwitchShapeActions = () => {
  // Get elements
  const blockSwitch = document.querySelector('[data-type="block"]');
  const rowSwitch = document.querySelector('[data-type="row"]');
  const listWrapper = document.querySelector(".list-wrapper");
  const listSwitches = document.querySelector('.list-switches')
  const cards = document.querySelectorAll(".card");

  // Abort if we don't have what we need
  if (!blockSwitch || !rowSwitch || !listWrapper || cards.length === 0) return;

  // Add event listener for each type
  blockSwitch.addEventListener("click", () =>
    handleSwitch(`--${SWITCH_TYPES.block}`, `--${SWITCH_TYPES.row}`)
  ); // Remove '--row' then add '--block'
  rowSwitch.addEventListener("click", () =>
    handleSwitch(`--${SWITCH_TYPES.row}`, `--${SWITCH_TYPES.block}`)
  ); // Remove '--block' then add '--row'

  // Handle class changes
  function handleSwitch(addClass, removeClass) {
    // Change classes for list wrapper
    listWrapper.classList.remove(removeClass);
    listWrapper.classList.add(addClass);

    listSwitches.classList.remove(removeClass);
    listSwitches.classList.add(addClass);

    // Change classes for cards
    cards.forEach((card) => {
      card.classList.remove(removeClass);
      card.classList.add(addClass);
    });
  }
};

createSwitchShapeActions();
