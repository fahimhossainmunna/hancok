import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

export default function QuestionP() {
  const faqs = [
    {
      num: '1',
      q: 'HOW TO DOWNLOAD THE GAME ?',
      a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat.'
    },
    {
      num: '2',
      q: 'IS THERE ANY AGE RESTRICTIONS ?',
      a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat.'
    },
    {
      num: '3',
      q: 'HOW TO BECOME A TEAM MEMBER ?',
      a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat.'
    },
    {
      num: '4',
      q: 'IS THERE ANY REWARD FOR WINNERS ?',
      a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat.'
    }
  ]

  return (
    <div className="bg-[#121212] py-[80px] md:py-[100px]">
      <Container>
        <Flex className="justify-center md:justify-start">
          <div className="relative inline-block group">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[38px] font-semibold font-fahim text-center md:text-left leading-snug max-w-[90%] mx-auto md:mx-0">
              FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”
            </h2>
            <span className="absolute left-1/2 md:left-0 bottom-[-10px] transform -translate-x-1/2 md:translate-x-0 h-[2px] bg-red-500 w-0 group-hover:w-40 transition-all duration-500"></span>
          </div>
        </Flex>

        {/* FAQ grid style */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 border-t border-gray-800 pt-10">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-6 border-b border-gray-800 pb-8"
            >
              <div className="bg-red-600 text-white font-bold text-2xl w-[60px] h-[60px] flex items-center justify-center rounded-sm mx-auto sm:mx-0">
                {item.num}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white text-lg font-semibold mb-2 tracking-wide">
                  {item.q}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-[480px] mx-auto sm:mx-0">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe box */}
        <div className="mt-20 bg-[#ff4d57] py-10 px-6 md:px-8 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <h3 className="text-white text-lg md:text-2xl font-semibold leading-snug md:max-w-[600px] text-center md:text-left uppercase">
            Subscribe us to get latest news in your inbox from Hancock community
          </h3>
          <form className="flex w-full md:w-auto items-center bg-white rounded-full overflow-hidden max-w-[380px] mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 text-sm outline-none text-gray-700"
            />
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </Container>
    </div>
  )
}
