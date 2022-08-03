let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);
    console.log("Start the production");
    await time(2000);
    console.log("cut the fruit");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid} was added`);
    await time(1000);
    console.log("start the machine");
    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);
    console.log("serve ice cream");
  } catch (err) {
    console.log("customer left", err);
  }
}
