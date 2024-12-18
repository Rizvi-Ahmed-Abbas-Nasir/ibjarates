import React from 'react';

const articles = [
  {
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    title: "Highnote is Now Certified on Visa’s Newest Fleet Payment Solution: Visa 2.0",
    logo1: 'https://via.placeholder.com/40', // Replace with Visa logo URL
    logo2: 'https://via.placeholder.com/40', // Replace with Highnote logo URL
  },
  {
    image: 'https://via.placeholder.com/150',
    title: "Speedchain Selects Highnote to Usher in a New Era in B2B Payments",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
  {
    image: 'https://via.placeholder.com/150',
    title:
      "Our Foray into Prepaid Card Issuance With Africa’s Fastest Growing Consumer Fintech App",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
];

const ReadTheLatest = () => {
  return (
    <section className="py-10 bg-[#f1cf8a1c]">
      <h2 className="text-[3rem] font-serif font-bold text-center mb-2">Read the Latest</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[3rem] py-[3rem] lg:px-[7rem]">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white flex flex-col rounded-[2rem] p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center w-full h-[10rem] px-[3rem] py-[5rem]">
              <img
                src={article.image}
                alt="Featured"
                className="rounded-md object-cover max-h-full w-auto"
              />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <img src={article.logo1} alt="Logo 1" className="w-8 h-8 rounded-full object-cover" />
              <img src={article.logo2} alt="Logo 2" className="w-8 h-8 rounded-full object-cover" />
            </div>
            <p className="text-gray-700 text-[1.2rem] text-center mt-4">{article.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadTheLatest;
