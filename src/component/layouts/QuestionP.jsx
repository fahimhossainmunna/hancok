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
    <div className="bg-[#121212] py-[100px]">
      <Container>
        <Flex>
          <div className="flex items-center gap-3 group relative">
            <h2 className="text-white text-[38px] font-semibold font-fahim w-[518px] mb-2">
              FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”
            </h2>
            <span className="h-[2px] absolute bg-red-500 w-0 transition-all duration-500 group-hover:w-40 mt-22 ml-90"></span>
          </div>
        </Flex>

        {/* FAQ grid style */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 border-t border-gray-800 pt-10">
          {faqs.map((item, idx) => (
            <div key={idx} className="flex gap-6 border-b border-gray-800 pb-8">
              <div className="bg-red-600 text-white font-bold text-2xl w-[60px] h-[60px] flex items-center justify-center rounded-sm">
                {item.num}
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2 tracking-wide">{item.q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-[480px]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe box */}
        <div className="mt-20 bg-[#ff4d57] py-10 px-8 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug max-w-[600px] uppercase">
            Subscribe us to get latest news in your inbox from Hancock community
          </h3>
          <form className="flex w-full md:w-auto items-center bg-white rounded-full overflow-hidden max-w-[380px]">
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
