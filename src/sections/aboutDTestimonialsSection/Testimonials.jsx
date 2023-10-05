import { testimonials } from "../../utils/website_data";
import { TestimonialItem } from "../index";

const Testimonials = () => {
  return (
    <section className="about-d py-4">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="bottom-line" />
        <p className="lead text-center">
          Take a look at what my clients say...
        </p>
        <div className="testimonials">
         {testimonials.map((testimonial) => <TestimonialItem key={testimonial.id} {...testimonial} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
