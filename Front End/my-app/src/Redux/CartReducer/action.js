import axios from "axios";

let arr = [
  {
    id: 1,
    title:
      "Maxirich Gold Advanced Daily Supplement-Multivitamin with Ginseng Extract for Energy & Immunity Soft Gelatin Capsule",
    desc: "Cipla Maxirich Gold Advanced is a daily multivitamin supplement with ginseng for more energy. It is infused with the goodness of one of the most popular herbal medicines in the world to boost immunity, improve memory and ensure energy release. It contains ginseng extract, 10 vitamins, vitamin B complex and 9 minerals. It promotes well-being, helps the mind and body to relax and remain stress-free.",
    price: 290,
    category: "Vitamin A",
    brand: "WellsPro",
    discountprice: 12,
    rating: 4.2,
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/jtl5xrpkoy6xfzjokzbc.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/dkjfy0xzflqiwgi6ks3k.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/s924gfjj9e84vnkr0zlt.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/x2lnfxs3gocbgybayqi9.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/aqqstplrctp8xas2gj3f.jpg",
    ],
  },
  {
    id: 2,
    title: "Activist Arg Q10 Tablet In Capsule",
    desc: "Activist Arg Q10 Tablet In Capsule assists your body in maintaining optimum vital health in men. Co-enzyme Q10 is a substance that your body normally makes. Your body uses it to help keep you in good health. Co-enzyme Q10, also known as CoQ10. It is a compound that helps in regenerating the cells. The human body can produce this compound naturally, but with aging, the production of CoQ10 by the body reduces, so the need for supplementation arises. Vitamin C is a powerful antioxidant, supports skin health, and offers a youthful glow from within.",
    price: 1200,
    category: "Vitamin C",
    brand: "Solgar",
    discountprice: 35,
    rating: 3.9,
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/nw2xcyvprqrfyvhyx0qy.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/nkx1ohdlbtah9da5pbkr.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/anca92ndnpbi0ccguggl.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/op0ieowuuidvfa5siesr.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/yvan12iqjujlnirktvhw.jpg",
    ],
  },
];

export default arr;

export const fourdata = [
  {
    title: "Contour TS Blood Glucose",
    desc: "Contour TS Blood Glucose Test Strip can be used with the Bayer Contour plus blood glucose monitoring system for the quantitative measurement of glucose (sugar) in fresh capillary blood samples drawn from the fingertips.",
    price: 1164,
    discountprice: 10,
    rating: 4.4,
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/hlnycquudxycuybrrqtm.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/duj5lyzyhhiqbaperf7h.jpg",
    ],
    id: 1,
    category: "test-strip",
    brand: "BeatO Curv",
  },
  {
    title: "Accu-Chek Softclix Lancets",
    desc: "Accu-Chek Softclix Lancets is a small, sharp object used to prick the skin to help test blood glucose levels using blood glucose monitors and test strips. ",
    price: 542,
    discountprice: 10,
    rating: 4.5,
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/gbcnhz6mgcn8xg7mknho.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/om06dc9puwdlqvl4mnzu.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/awhdkgo4uc6ix90zdexf.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/s7hysu4j5cnodcb6equd.jpg",
    ],
    id: 2,
    category: "test-strip",
    brand: "Microlet",
  },
  {
    title: "Accu-Chek Active Test Strip ",
    desc: "It helps in determining the blood sugar level in the body.",
    price: 968,
    discountprice: 10,
    rating: 4.3,
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/e6c28fd45d4f499dbbe755cf4b77d4e1.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/234eba88053141c78ca427deb4072c65.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/939457c20af84804961380b62890ca12.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/60c3fe1eebbf42888a41c3ddbe8a9817.jpg",
    ],
    id: 3,
    category: "test-strip",
    brand: "SD Biosensor",
  },
  {
    title: "Contour Plus Blood Glucose Test Strip",
    desc: "Contour Plus Blood Glucose Test Strip can be used with the Contour Plus or Contour Plus One Blood Glucose monitoring system for the quantitative measurement of glucose in blood samples.",
    price: 891,
    discountprice: 10,
    rating: 4.5,
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/xf6ogn1ygwsa8jgbcfaq.jpg",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/rznhmfw6hduqcaied4ji.png",
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/swozo1pejynszdmmkjya.png",
    ],
    id: 4,
    category: "test-strip",
    brand: "OneTouch",
  },
];

export let getdataAxios = async () => {
  let res = await axios.get(
    `https://good-pear-cheetah-tutu.cyclic.app/teststrip`
  );
  let data = await axios.get(
    `https://good-pear-cheetah-tutu.cyclic.app/vitamin`
  );
  let temp = [];
  res.data.forEach((element) => {
    temp.push(element);
  });
  data.data.forEach((element) => {
    temp.push(element);
  });
  return temp;
};
