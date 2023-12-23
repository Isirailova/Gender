"use strict";

let userName;

const onChangeHandler = (e) => {
  userName = e.target.value;
  const nameOutput = document.getElementById("nameOutput");
  nameOutput.textContent = userName;
  e.target.value = "";
};

const getGender = async () => {
  try {
    const response = await fetch(`https://api.genderize.io?name=${userName}`);
    const data = await response.json();

    const img = document.getElementById("img");
    img.style.width = "100px";
    if (data.gender === "male") {
      img.src =
        "https://cdn.pixabay.com/photo/2012/03/01/01/35/male-20252_1280.jpg";
    } else {
      img.src =
        "https://www.publicdomainpictures.net/pictures/20000/nahled/female-symbol.jpg";
    }

    const percentage = document.getElementById("percentage");
    percentage.textContent = `The system is ${(
      data.probability * 100
    ).toFixed()}% confident in this prediction.`;
  } catch (err) {
    console.log(err);
  }
};
