import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import AppComponent from '../components/component'
import Footer from '../components/footer'

const FrequentlyAskedQuestions = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>
            Frequently Asked Questions - Hawaii's Jungle Escape Room | Expert
            Difficulty
          </title>
          <meta
            name="description"
            content='Escape Hilo is Hawaii Island&apos;s first "Escape Game" where you enter a room, find clues, and solve puzzles to accomplish a mission within 60 minutes.'
          />
          <meta
            property="og:title"
            content="Frequently Asked Questions - Hawaii's Jungle Escape Room | Expert Difficulty"
          />
          <meta
            property="og:description"
            content="Experience our Jungle Mystery room filled with many family-friendly puzzles perfect for every occasion! With 60 minutes on the clock, can you solve all the puzzles before time runs out?"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <div className="section1">
          <Header rootClassName="rootClassName1"></Header>
          <div className="container1">
            <div className="container2">
              <h3 className="text healine">
                <span>FAQ</span>
              </h3>
              <span className="text02">
                Escape Hilo is Hawaii Island&apos;s first &quot;Escape
                Game&quot; where you enter a room, find clues, and solve puzzles
                to accomplish a mission within 60 minutes. Depending upon the
                game, participants may be transported back in time or taken on a
                journey into a mythical land. Escape games are not computer
                games or simulations. Everything is real but high tech gadgetry
                is sometimes woven into the game making things really fun.
              </span>
            </div>
            <div className="cards-container">
              <div className="card2">
                <h6 className="text03 textXL">How many players can play?</h6>
                <span className="text04">
                  <span>
                    The rooms are designed to accommodate between 2-8 people.
                  </span>
                </span>
              </div>
              <div className="card1">
                <h6 className="text06 textXL">
                  What makes Escape Hilo different?
                </h6>
                <span className="text07">
                  What makes Escape Hilo different from other escape games is
                  that our themes are very specific to the island of Hawaii and
                  are designed so that players learn a little bit while they are
                  having fun. For example, our Plantation Mystery game was
                  carefully researched including discussions with museum
                  curators so that we could most accurately depict early
                  plantation life in Hawaii. We also have some unique challenges
                  that we are sure even seasoned players have never seen before.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="card3">
                <h6 className="text08 textXL">
                  <span>How old do you need to be to play the game?</span>
                  <span></span>
                </h6>
                <span className="text11">
                  The puzzles and challenges in the game are designed for
                  participants 12 and older. Participants 17 years of age and
                  under must be accompanied by an adult.
                </span>
              </div>
            </div>
            <div className="cards-container1">
              <div className="card11">
                <h6 className="text12 textXL">
                  Are you available for team building or other special events?
                </h6>
                <span className="text13">
                  Yes. Please email us for more information.
                </span>
              </div>
              <div className="card21">
                <h6 className="text14 textXL">
                  How early should I arrive for my game?
                </h6>
                <span className="text15">
                  Arrive at least 15 minutes prior to your game. Games will
                  begin at their start time.
                </span>
              </div>
              <div className="card31">
                <h6 className="text16 textXL">
                  Will you physically be locked in a room?
                </h6>
                <span className="text17">
                  Our current themes do not involve locking participants in any
                  of the rooms. Participants can exit a room at any time but
                  once you exit you cannot re-enter unless by special permission
                  by the game master.
                </span>
              </div>
            </div>
            <div className="cards-container2">
              <div className="card12">
                <h6 className="text18 textXL">Do you offer refunds?</h6>
                <span className="text19">
                  All of our games are non-refundable but we do allow you to
                  reschedule a game if you give us at least 24 hours notice.
                </span>
              </div>
              <div className="card22">
                <h6 className="text20 textXL">How do I pay?</h6>
                <span className="text21">
                  All games are booked ahead of time online with a credit card.
                  No cash payments are accepted.
                </span>
              </div>
            </div>
            <AppComponent></AppComponent>
            <div className="work-with-us"></div>
          </div>
          <Footer rootClassName="rootClassName"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .section1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/junglebg-1500w.jpg');
          }
          .container1 {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.69);
          }
          .container2 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text {
            color: #ffffff;
            text-align: center;
          }
          .text02 {
            color: #ffffff;
            text-align: center;
          }
          .cards-container {
            height: 90%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .card2 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text03 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text04 {
            color: #000000;
            font-size: 1rem;
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card1 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text06 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text07 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card3 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text08 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text11 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .cards-container1 {
            height: 413px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .card11 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text12 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text13 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card21 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text14 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text15 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card31 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text16 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text17 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .cards-container2 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .card12 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text18 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text19 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .card22 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .text20 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .text21 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .work-with-us {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .cards-container {
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .card2 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card1 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card3 {
              width: 90%;
            }
            .cards-container1 {
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .card11 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card21 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card31 {
              width: 90%;
            }
            .cards-container2 {
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .card12 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .card22 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 767px) {
            .section1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .container2 {
              width: 100%;
            }
            .cards-container {
              height: 100%;
            }
            .cards-container1 {
              height: 100%;
            }
            .cards-container2 {
              width: 100%;
              height: 100%;
            }
            .work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .card2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text04 {
              text-align: left;
            }
            .card1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text07 {
              text-align: left;
            }
            .text11 {
              text-align: left;
            }
            .card11 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text13 {
              text-align: left;
            }
            .card21 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text15 {
              text-align: left;
            }
            .text17 {
              text-align: left;
            }
            .card12 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text19 {
              text-align: left;
            }
            .card22 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .text21 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default FrequentlyAskedQuestions
