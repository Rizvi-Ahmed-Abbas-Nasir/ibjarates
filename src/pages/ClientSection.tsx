import React from 'react';

const testimonials = [
  {
    text: 'Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.',
    name: 'Adrian Knoch',
    title: 'easyApotheke Duderstadt',
    image: 'https://via.placeholder.com/40', // Replace with actual image URL
  },
  {
    text: 'We can map our entire sales process in Superchat\'s messaging software. We have a separate mailbox for each phase. That makes our work clear.',
    name: 'Andreas Niemiec',
    title: 'Niemiec Versicherungsmakler GmbH & Co. KG',
    image: 'https://via.placeholder.com/40', // Replace with actual image URL
  },
  {
    text: 'Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.',
    name: 'Christian Schuder',
    title: 'Porsche Zentrum Bade-Baden',
    image: 'https://via.placeholder.com/40', // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-[10rem] px-5 lg:px-20">
      <h2 className="text-[3rem] font-serif font-bold text-center mb-10">What our clients says</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-yellow-50 py-[5rem] px-[2rem] flex flex-col justify-between rounded-lg shadow-md text-gray-700 hover:shadow-lg transition duration-300"
          >
            <p className="mb-4 text-[1rem] italic">"{testimonial.text}"</p>
            <div className="flex items-center space-x-3 mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
