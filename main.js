// const submitPage = document.getElementById("submit");
// const successPage = document.getElementById("success");
// const submitBtn = document.querySelector("submitBUTTON");

// const submittedRating = document.getElementById("submitted-rating");

// let ratingValue;

// submitBtn.addEventListener("click", (e) => {
//   const checked = document.querySelector('input[name="ratings"]:checked');

//   if (checked == null) {
//     console.log("null");
//   } else {
//     ratingValue = checked.value;

//     // toggle current card page
//     submitPage.classList.add("hide");

//     // toggle success page
//     successPage.classList.remove("hide");

//     // set submitted rating
//     submittedRating.innerText = ratingValue;
//   }

//   return ratingValue;
// });

const submit1 = document.querySelector(".submit-button");
const submitPage = document.getElementById("submitPage");
const successPage = document.getElementById("success");
const submittedRating = document.getElementById("submitted-rating");
const background = document.getElementById("container3");

let ratingValue;
submit1.addEventListener("click", function () {
  const checked = document.querySelector('input[name="ratings"]:checked');

  // check to see if a rating is selected
  if (checked == null) {
    console.log("null");
  } else {
    // set value to be passed to success page
    ratingValue = checked.value;

    // toggle current card page
    submitPage.classList.toggle("hide");
    background.classList.toggle("hide");
    // toggle success page
    successPage.classList.toggle("hide");

    // set submitted rating
    submittedRating.innerText = ratingValue;
  }

  return ratingValue;
});
