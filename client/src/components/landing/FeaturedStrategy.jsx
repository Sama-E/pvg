import "/src/assets/css/components/landing/featuredstrategy.scss";

const strategyVideo = "https://youtu.be/7IkvGFp7gLc";

const FeaturedStrategy = () => {


  return (
    <div className="FeaturedStrategy">
      <div className="container">

      <div className="left">
        <h1>Tactical Total Return</h1>
          <div className="title">
            <img src="./images/check.png" alt="" />
            Investment Approach
          </div>
          <p>
          The Tactical Total Return Strategy is invested in Exchange Traded Funds as well as individual securities. 
          </p>
          <div className="title">
            <img src="./images/check.png" alt="" />
            Investment Objective
          </div>
          <p>
          This strategy seeks an attractive “absolute total return” for investors.
          </p>
          <div className="title">
            <img src="./images/check.png" alt="" />
            Risk Management
          </div>
          <p>
          PVG reduces un-diversifiable market volatility and risk by hedging portfolios with inverse market index securities, stop losses and cash positions.
          </p>
          <div className="title">
            <img src="./images/check.png" alt="" />
            Count on 24/7 support
          </div>
          <p>
          Our round-the-clock support team is available to help anytime, anywhere.
          </p>
        </div>
        
        <div className="right">
          <video src={strategyVideo} controls></video>
        </div>
      </div>
    </div>
  )
}

export default FeaturedStrategy;