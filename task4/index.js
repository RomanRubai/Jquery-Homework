$(document).ready(function () {
  let checkedCount = 0;
  $('input[type="checkbox"]').change(function () {
    if ($(this).prop('checked')) {
      checkedCount++;
      if (checkedCount === 3) {
        $('input[type="checkbox"]').attr('disabled', true);
      }
    } 
  });
});
