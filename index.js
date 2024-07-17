document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Ngăn chặn form submit lại và reload trang

  // Lấy giá trị từ các input
  var firstName = document.getElementById('firstName').value;
  var studentCode = document.getElementById('studentCode').value;
  var email = document.getElementById('email').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var birthDate = document.getElementById('birthDate').value;
  var department = document.getElementById('department').value;


  var userInfo = {
    firstName: firstName,
    studentCode: studentCode,
    gender: gender ? gender.value : "",
    birthDate: birthDate,
    department: department
  };

  console.log(userInfo);
});