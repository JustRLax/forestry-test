"use strict";

var cl = new cloudinary.Cloudinary({ cloud_name: "jordandwhalen", secure: true });
var cloudinary_url = "https://res.cloudinary.com/jordandwhalen/";
var cloudinary_fetch_url = cloudinary_url + "/image/fetch/";
'use strict';

$(function () {

  jribbble.shots({ token: "7d01edbdb6f82ab8894c9e237dae8f82caadf95b6b27621b151c986cebe40bd3" }, function (shotsArray) {

    shotsArray.reduce(function (html, shot) {

      $('.dribbble').append('<a class="dribbble__item" href="' + shot.html_url + '">' + '<img class="dribbble__item-image" src="' + cloudinary_fetch_url + shot.images.normal + '"/>' + '</a>');
    }, "");
  });
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkaW5hcnkuanMiLCJkcmliYmJsZS5qcyIsInRlc3QuanMiXSwibmFtZXMiOlsiY2wiLCJjbG91ZGluYXJ5IiwiQ2xvdWRpbmFyeSIsImNsb3VkX25hbWUiLCJzZWN1cmUiLCJjbG91ZGluYXJ5X3VybCIsImNsb3VkaW5hcnlfZmV0Y2hfdXJsIiwiJCIsImpyaWJiYmxlIiwic2hvdHMiLCJ0b2tlbiIsInNob3RzQXJyYXkiLCJyZWR1Y2UiLCJodG1sIiwic2hvdCIsImFwcGVuZCIsImh0bWxfdXJsIiwiaW1hZ2VzIiwibm9ybWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssSUFBSUMsV0FBV0MsVUFBZixDQUEwQixFQUFDQyxZQUFZLGVBQWIsRUFBOEJDLFFBQVEsSUFBdEMsRUFBMUIsQ0FBWDtBQUNBLElBQU1DLGlCQUFpQiwyQ0FBdkI7QUFDQSxJQUFNQyx1QkFBdUJELGlCQUFpQixlQUE5Qzs7O0FDRkFFLEVBQUUsWUFBVzs7QUFFWEMsV0FBU0MsS0FBVCxDQUFlLEVBQUNDLE9BQU8sa0VBQVIsRUFBZixFQUE0RixVQUFTQyxVQUFULEVBQXFCOztBQUUvR0EsZUFBV0MsTUFBWCxDQUFrQixVQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7O0FBRXJDUCxRQUFFLFdBQUYsRUFBZVEsTUFBZixDQUNFLHFDQUFxQ0QsS0FBS0UsUUFBMUMsR0FBcUQsSUFBckQsR0FDRSx5Q0FERixHQUM4Q1Ysb0JBRDlDLEdBQ3FFUSxLQUFLRyxNQUFMLENBQVlDLE1BRGpGLEdBQzBGLEtBRDFGLEdBRUEsTUFIRjtBQUtELEtBUEQsRUFPRyxFQVBIO0FBU0QsR0FYRDtBQWFELENBZkQ7QUNBQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNsID0gbmV3IGNsb3VkaW5hcnkuQ2xvdWRpbmFyeSh7Y2xvdWRfbmFtZTogXCJqb3JkYW5kd2hhbGVuXCIsIHNlY3VyZTogdHJ1ZX0pO1xuY29uc3QgY2xvdWRpbmFyeV91cmwgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pvcmRhbmR3aGFsZW4vXCI7XG5jb25zdCBjbG91ZGluYXJ5X2ZldGNoX3VybCA9IGNsb3VkaW5hcnlfdXJsICsgXCIvaW1hZ2UvZmV0Y2gvXCI7XG4iLCIkKGZ1bmN0aW9uKCkge1xuXG4gIGpyaWJiYmxlLnNob3RzKHt0b2tlbjogXCI3ZDAxZWRiZGI2ZjgyYWI4ODk0YzllMjM3ZGFlOGY4MmNhYWRmOTViNmIyNzYyMWIxNTFjOTg2Y2ViZTQwYmQzXCJ9LCBmdW5jdGlvbihzaG90c0FycmF5KSB7XG5cbiAgICBzaG90c0FycmF5LnJlZHVjZShmdW5jdGlvbihodG1sLCBzaG90KSB7XG5cbiAgICAgICQoJy5kcmliYmJsZScpLmFwcGVuZChcbiAgICAgICAgJzxhIGNsYXNzPVwiZHJpYmJibGVfX2l0ZW1cIiBocmVmPVwiJyArIHNob3QuaHRtbF91cmwgKyAnXCI+JyArXG4gICAgICAgICAgJzxpbWcgY2xhc3M9XCJkcmliYmJsZV9faXRlbS1pbWFnZVwiIHNyYz1cIicgKyBjbG91ZGluYXJ5X2ZldGNoX3VybCArIHNob3QuaW1hZ2VzLm5vcm1hbCArICdcIi8+JyArXG4gICAgICAgICc8L2E+Jyk7XG5cbiAgICB9LCBcIlwiKTtcblxuICB9KTtcblxufSk7XG4iLCIiXX0=
