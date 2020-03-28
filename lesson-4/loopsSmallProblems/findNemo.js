let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let index = 0;
while (index < fish.length) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') break;
  index += 1;
}