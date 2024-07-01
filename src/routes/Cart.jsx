import React from "react";
import bann2 from "../Assets/images/bann2.webp";
import bann from "../Assets/images/bann.webp";
import rateowner1 from "../Assets/images/rateowner1.webp";
import { Link } from "react-router-dom";
import CartBox from "../ui/cart/CartBox";
import useCartList from "../features/cart/useCartList";

const cart = [
  {
    id: 1,
    title: "انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس",
    price: 100,
    quantity: 1,
    image: bann,
    description: [
      {
        title: "لوغو احترافي للمتجر",
        content: "مقابل 15.00$ إضافية على سعر الخدمة.",
      },
      {
        title:
          "خدمة VIP متجر عربي (هوية بصرية لمتجرك+25 منتج رابح مع وصف إحترافي+ ومقابلة زووم لشرح )",
        content:
          "مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 7 أيام إضافية..",
      },
      {
        title: "ترجمة قالب المتجر الى اللغة العربية",
        content:
          "مقابل 50.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 3 أيام إضافية.",
      },
    ],
    user: {
      name: "خالد عوض",
      image: rateowner1,
    },
  },
  {
    id: 2,
    title: "تنسيق البحوث المكتوبة باللغة الانجليزية للكليات العلمية",
    price: 50,
    quantity: 2,
    image: bann2,
    description: [
      {
        title: "ترجمة لأكثر من لغة",
        content:
          "مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 7 أيام إضافية..",
      },
    ],
    user: {
      name: "خالد عوض",
      image: rateowner1,
    },
  },
];

const Cart = () => {
  const { isLoading, data } = useCartList();

  console.log(data);

  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          <div className="col-12">
            {cart.map((item) => (
              <CartBox item={item} key={item.id} />
            ))}
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <Link className="order-now" to="checkout.html">
                    اطلب الان
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
