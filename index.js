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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
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
    catacory: "hous",
    img_src:
      "https://a6e8z9v6.stackpathcdn.com/kleanity/wp-content/uploads/2016/08/minimal-white-chair.jpg",
    name: "Modern Chair",
    sale: "false",
    price: 1000,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 13,
    amount: 100,
    catacory: "woman",
    img_src:
      "https://cdn.dsmcdn.com/ty900/product/media/images/20230523/12/356343882/897621685/1/1_org.jpg",
    name: "Modern Chair",
    sale: "false",
    price: 20,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 14,
    amount: 30,
    catacory: "woman",
    img_src:
      "https://cdn.dsmcdn.com/ty952/product/media/images/20230615/6/385690643/848077905/1/1_org.jpg",
    name: "ModalucciNew",
    sale: "false",
    price: 100,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 15,
    amount: 100,
    catacory: "woman",
    img_src:
      "https://cdn.dsmcdn.com/ty952/product/media/images/20230615/6/385690643/848077905/1/1_org.jpg",
    name: "Modern Chair",
    sale: "false",
    price: 50,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 16,
    amount: 100,
    catacory: "woman",
    img_src:
      "https://cdn.dsmcdn.com/ty658/product/media/images/20221222/23/244488682/68282630/2/2_org.jpg",
    name: "Modern woman",
    sale: "false",
    price: 70,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 17,
    amount: 100,
    catacory: "woman",
    img_src:
      "https://cdn.dsmcdn.com/ty243/product/media/images/20211113/17/178710343/311575141/1/1_org.jpg",
    name: "women's clothing",
    sale: "false",
    price: 70,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 18,
    amount: 100,
    catacory: "man",
    img_src:
      "https://cdn.dsmcdn.com/ty953/product/media/images/20230615/13/385779009/496224798/1/1_org.jpg",
    name: "Modern man",
    sale: "false",
    price: 30,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 19,
    amount: 100,
    catacory: "man",
    img_src:
      "https://cdn.dsmcdn.com/ty494/product/media/images/20220727/19/150999415/529533961/1/1_org.jpg",
    name: "Modern man",
    sale: "false",
    price: 43,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 20,
    amount: 100,
    catacory: "man",
    img_src:
      "https://cdn.dsmcdn.com/ty945/product/media/images/20230607/22/382980377/159698159/1/1_org.jpg",
    name: "Black StreetMen's Gray",
    sale: "false",
    price: 70,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 21,
    amount: 100,
    catacory: "man",
    img_src:
      "https://cdn.dsmcdn.com/ty947/product/media/images/20230607/22/382988307/101188235/1/1_org.jpg",
    name: "Black StreetMen's Gray",
    sale: "false",
    price: 70,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 22,
    amount: 100,
    catacory: "man",
    img_src:
      "https://cdn.dsmcdn.com/ty951/product/media/images/20230616/10/386098947/59062707/1/1_org.jpg",
    name: "Black StreetMen's Gray",
    sale: "false",
    price: 70,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 23,
    amount: 100,
    catacory: "man",
    img_src:
      "https://cdn.dsmcdn.com/ty947/product/media/images/20230607/22/382980367/159699319/1/1_org.jpg",
    name: "Black StreetMen's Gray",
    sale: "false",
    price: 70,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 24,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com/ty940/product/media/images/20230604/13/380348760/479995614/1/1_org.jpg",
    name: "kids clothing",
    sale: "false",
    price: 23,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 25,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com/ty941/product/media/images/20230603/23/380192291/936950702/1/1_org.jpg",
    name: "kids clothing",
    sale: "false",
    price: 13,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 26,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com/ty839/product/media/images/20230421/23/329920636/916936081/1/1_org.jpg",
    name: "kids clothing",
    sale: "false",
    price: 19,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 27,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com/ty839/product/media/images/20230421/23/329920636/916936081/1/1_org.jpg",
    name: "kids clothing",
    sale: "false",
    price: 32,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 28,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com//ty534/product/media/images/20220919/15/176976759/573352601/1/1_org_zoom.jpg",
    name: "kids clothing",
    sale: "false",
    price: 45,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 29,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com//ty535/product/media/images/20220919/15/176976413/573352148/1/1_org_zoom.jpg",
    name: "kids clothing",
    sale: "false",
    price: 51,
    command:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    id: 30,
    amount: 100,
    catacory: "child",
    img_src:
      "https://cdn.dsmcdn.com/ty534/product/media/images/20220916/18/176171461/545893258/1/1_org.jpg",
    name: "kids clothing",
    sale: "false",
    price: 22,
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
