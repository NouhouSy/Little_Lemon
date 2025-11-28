import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      review: "Amazing food and great atmosphere!"
    },
    {
      id: 2,
      name: "John D.",
      rating: 5,
      review: "Best Mediterranean food in Chicago!"
    },
    {
      id: 3,
      name: "Emma L.",
      rating: 5,
      review: "Absolutely loved the Greek salad!"
    },
    {
      id: 4,
      name: "Mike R.",
      rating: 5,
      review: "Family-friendly and delicious!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-pink-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">{testimonial.review}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;