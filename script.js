let index = 1;
const fetchdata = async () => {
  try {
    let res = await fetch(`https://fakestoreapi.com/products/${index}`);
    let data = await res.json();
    console.log(data);

    let title = document.createElement("p");
    document.body.appendChild(title);
    title.textContent = data.title;

    let price = document.createElement("p");
    price.textContent = `Price: $${data.price}`;
    document.body.appendChild(price);
  } catch (error) {
    console.log("error", error);
  }
};

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "ახალი პროდუქტი";

btn.addEventListener("click", () => {
  index++;
  fetchdata();
});
