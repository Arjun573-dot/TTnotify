const timetable = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: []
};

const inputs = document.querySelectorAll("input[type='text']");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const day = input.dataset.day;
    const index = input.dataset.index;

    timetable[day][index] = input.value;

    console.log(timetable);
  });
});
