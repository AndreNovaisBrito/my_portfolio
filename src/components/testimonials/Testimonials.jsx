import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/me.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            doloribus perspiciatis asperiores distinctio numquam nihil
            praesentium sed obcaecati fugiat cumque eos doloremque vitae
            impedit, esse dolorum nesciunt atque voluptate aut.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            doloribus perspiciatis asperiores distinctio numquam nihil
            praesentium sed obcaecati fugiat cumque eos doloremque vitae
            impedit, esse dolorum nesciunt atque voluptate aut.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            doloribus perspiciatis asperiores distinctio numquam nihil
            praesentium sed obcaecati fugiat cumque eos doloremque vitae
            impedit, esse dolorum nesciunt atque voluptate aut.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            doloribus perspiciatis asperiores distinctio numquam nihil
            praesentium sed obcaecati fugiat cumque eos doloremque vitae
            impedit, esse dolorum nesciunt atque voluptate aut.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
