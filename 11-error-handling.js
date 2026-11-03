'use strict';
try {
  console.log(x);
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Ini akan jalan ketika eror ataupun tidak');
}

function checkAge(age) {
  if (age < 18) {
    throw new Error('Umur kudu mesti wajib 18 nyak');
  }

  return 'Akses diterima';
}

try {
  console.log(checkAge(19));
} catch (error) {
  console.error(error.message);
}
