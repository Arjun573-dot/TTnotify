const savedData = JSON.parse(localStorage.getItem("timetable"));
if (savedData) {
  Object.assign(timetable, savedData);
}





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
    const index = Number(input.dataset.index);

    timetable[day][index] = input.value;
    localStorage.setItem("timetable", JSON.stringify(timetable));
    console.log(timetable);
  });
});
