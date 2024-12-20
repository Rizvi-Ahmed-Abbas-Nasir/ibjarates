import React from 'react';

const features = [
  {
    icon: '🏦', // Replace this with an actual icon/image URL
    title: 'Link a bank account.',
    description:
      'Eligible applicants can leverage their bank data quickly and securely during the Petal application.',
  },
  {
    icon: '⚪', // Replace this with an actual icon/image URL
    title: 'Show off financial history.',
    description:
      'Petal can look beyond just a credit score and consider responsible spending and saving behavior.',
  },
  {
    icon: '🔓', // Replace this with an actual icon/image URL
    title: 'Unlock the best offer available.',
    description:
      'With bank data, the best possible offer can be extended, even to those who would otherwise be declined.',
  },
];

const BoostCardApproval = () => {
  return (
    <section className="py-[7rem] bg-[#d4d1d111]">
      <h2 className="text-[3rem] font-serif font-bold text-center mb-12">
        Recent Achievements.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 px-5 lg:px-[7rem]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-[1px] border-[#c4bfbf] rounded-[2rem] h-[24rem] flex flex-col justify-between p-[6rem] text-center shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-[3rem] mb-6">{feature.icon}</div>
            <h3 className="text-[1.4rem] font-bold mb-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-[1.2rem]]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoostCardApproval;
