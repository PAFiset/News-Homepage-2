import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bonjour" >

      <div className="container">
        <div className="image_billboard">
          <img src="./images/woodbuildblock-desktop.jpg" alt="colored wooden building block" />
        </div>
        <div className="latest-news">
            <h1>New</h1>
            <h2>Hydrogen vs electric car</h2>
            <p>will hydrogens-fueled cars ever catch up to EVs?</p>
            <hr/>
            <h2>The Downsizes of AI Artistry</h2>
            <p>what are the possible adverse effects of on-demand AI image generation?</p>
            <hr/>
            <h2>Is VC Funding Drying Up?</h2>
            <p>private funding by VC firms id down 50% YOY. We take a look at what that means</p>
        </div>
        <div className="header">
          <h1>
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="read-more">
          <p>
            We dive into the next evolution of the web the claims
            to put the power of the platforms back into the hand of people.
            But is it really fufilling its promise?
          </p>
          <button>
            READ MORE
          </button>
        </div>
        <div className="sub-news1">
          <div>
            <img src="./images/retro-pcs.jpg" alt="retro pcs"/>
          </div>
          <div className="sub-news-text" >
            <h1>
              01
            </h1>
            <h2>
              Reviving Retro PCs
            </h2>
            <p>
              What happens when old PCs are given modern upgrade.
            </p>
          </div>
        </div>
        <div className="sub-news2">
          <div>
            <img src="./images/top-laptops.jpg" alt="top laptops"/>
          </div>
          <div className="sub-news-text" >
            <h1>
              02
            </h1>
            <h2>
              Tops 10 Laptops of 2022
            </h2>
            <p>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="sub-news3">
          <div>
            <img src="./images/gaming-growth.jpg" alt="hand and gaming controller"/>
          </div>
          <div className="sub-news-text" >
            <h1>
              03
            </h1>
            <h2>
              The Growth of Gaming
            </h2>
            <p>
              How the pandemic has sparked fresh ooportunity.
            </p>
          </div>
        </div>
      </div>
      
    </main>
  )
}
