// document.addEventListener("DOMContentLoaded", function() {
//     var video = document.getElementById("particle-video");
//     if (video) {
//         video.playbackRate = 0.6;
//     }
//
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const h1Element = document.getElementById("name");
//     const originalText = h1Element.innerText;
//
//     let index = 0;
//     let interval = null;
//
//     clearInterval(interval);
//
//     interval = setInterval(() => {
//         if (index <= originalText.length) {
//             let newText = originalText.substring(0, index);
//             for (let i = index; i < originalText.length; i++) {
//                 newText += letters[Math.floor(Math.random() * letters.length)];
//             }
//             h1Element.innerText = newText;
//             index+= 1 / 4;
//         } else {
//             clearInterval(interval);
//         }
//     }, 30);
// })
//
//
// document.addEventListener("DOMContentLoaded", function() {
// const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const h1Element2 = document.getElementById("description");
// const originalText2 = h1Element2.innerText;
//
// let index2 = 0;
// let interval2 = null;
//
// clearInterval(interval2);
//
// interval2 = setInterval(() => {
//     if (index2 <= originalText2.length) {
//         let newText = originalText2.substring(0, index2);
//         for (let i = index2; i < originalText2.length; i++) {
//             newText += letters2[Math.floor(Math.random() * letters2.length)];
//         }
//         h1Element2.innerText = newText;
//         index2+= 1 / 2;
//     } else {
//         clearInterval(interval2);
//     }
// }, 30);
// });


