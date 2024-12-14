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
    <section className="py-10 bg-gray-50">
      <h2 className="text-[3rem] font-serif font-bold text-center mb-8">Read the Latest</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[3rem] py-[3rem] lg:px-20">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white flex flex-col rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex px-[3rem] py-[5rem] justify-center mb-4 ">
              <img src={article.image} alt="Featured" className="rounded-md " />
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <img src={article.logo1} alt="Logo 1" className="w-8 h-8" />
              <img src={article.logo2} alt="Logo 2" className="w-8 h-8" />
            </div>
            <p className="text-gray-700 text-[1rem] text-center">{article.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadTheLatest;
