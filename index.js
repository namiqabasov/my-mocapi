const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use("/static", express.static("public"));
app.use(cors());

const port = 3000;
let data = [
  {
    id: 1,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-luxry-sofa.jpg",
    name: "Luxury Sofa",
    sale: "SALE!",
    price: 450,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 2,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-gloves.jpg",
    name: "Leather Gloves",
    sale: "false",
    price: 27,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 3,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-cups.jpg",
    name: "Colorful Bowl",
    sale: "false",
    price: "18",
    amount: "102",
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 4,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-bag.jpg",
    name: "Women Bag",
    sale: "false",
    price: 350,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 5,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-tshitr.jpg",
    name: "Minimal T-Shirt",
    sale: "false",
    price: 15,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 6,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-plates.jpg",
    name: "Plates Set",
    sale: "false",
    price: 30,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 7,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-modern-sofa.jpg",
    name: "Modern Sofa",
    sale: "false",
    price: 900,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 8,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-bed.jpg",
    name: "Bed Linen",
    sale: "false",
    price: 79,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 9,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-shoes.jpg",
    name: "Minimal Shoes",
    sale: "SALE!",
    price: 60,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 10,
    amount: 100,
    img_src:
      "https://demo.goodlayers.com/infinite/homepages/emporium/wp-content/uploads/sites/18/2016/06/product-bed-600x472.jpg",
    name: "Modern Sofa",
    sale: "false",
    price: 900,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 11,
    amount: 100,
    img_src:
      "https://a6e8z9v6.stackpathcdn.com/kleanity/wp-content/uploads/2016/08/brown-notebook.jpg",
    name: "Modern Bed",
    sale: "SALE!",
    price: 830,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 12,
    amount: 100,
    img_src:
      "https://a6e8z9v6.stackpathcdn.com/kleanity/wp-content/uploads/2016/08/minimal-white-chair.jpg",
    name: "Modern Chair",
    sale: "false",
    price: 1000,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
];

let id_count = 8;

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {
  res.send(data.find((x) => x.id === +req.params.id));
});

app.post("/", (req, res) => {
  id_count++;
  data.push({ ...req.body, id: id_count });
  console.log(req.body);
  res.send("men post sorgusuyam");
});

app.delete("/:id", (req, res) => {
  data = data.filter((x) => x.id !== +req.params.id);
  res.send("men delete sorgususyam");
});

app.put("/:id", (req, res) => {
  data = data.filter((x) => x.id !== +req.params.id);
  id_count++;
  data.push({ ...req.body, id: id_count });
  res.send("men put sorgususyam");
});

app.listen(1000, () => {
  console.log(`Example app listening on port ${port}`);
});
