const animal = {
  jenis: 'hewan',
  bersuara() {
    return '...';
  },
};

const anjing = Object.create(animal);

anjing.bersuara = function () {
  return 'Wuf Wuf';
};

anjing.name = 'Max';
console.log(anjing.name);
console.log(anjing.jenis);
console.log(anjing.bersuara());

const cihuahua = Object.create(anjing);
cihuahua.jenis = 'cihuahua';
console.log(cihuahua.jenis);
