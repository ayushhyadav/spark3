import React, { useRef, useEffect ,useState} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

function Scroller() {
  const categories = ["Cell Phones", "Speakers & Headphones", "Laptops & Tablets"];
  const items = [
    {
      src: "assets/PJX R30.webp",
      title: "PJX Smartphone 10G 128GB",
      price: "$675.00"
    },
    {
      src: "assets/c837a6_fa6693c8376640c480ac169f9f56f55b~mv2.webp",
      title: "Ove Laptop 16\", 512GB",
      price: "$2,000.00"
    },
    {
      src: "assets/c837a6_0668014d3f3a4331bf93d74578294d31~mv2.webp",
      title: "Polar Turn5 Portable Speaker",
      price: "$250.00"
    },
    {
      src: "assets/c837a6_53ff9332e5124ed893f347a938f294ad~mv2.webp",
      title: "Polar 360 Mini Portable Speaker",
      price: "$120.00"
    }
  ];
  const headlines = [
    {
      type: "image",
      image: 'assets/Main_Image_01.jpeg'
    },
    {
      type: "image",
      image: 'assets/Main_Image_02.webp'
    },
    {
      type: "products",
      items: [
        {
          src: "assets/PJX R30.webp",
          title: "PJX Smartphone 10G 128GB",
          price: "$675.00"
        },
        {
          src: "assets/c837a6_fa6693c8376640c480ac169f9f56f55b~mv2.webp",
          title: "Ove Laptop 16\", 512GB",
          price: "$2,000.00"
        },
        {
          src: "assets/c837a6_0668014d3f3a4331bf93d74578294d31~mv2.webp",
          title: "Polar Turn5 Portable Speaker",
          price: "$250.00"
        },
        {
          src: "assets/c837a6_53ff9332e5124ed893f347a938f294ad~mv2.webp",
          title: "Polar 360 Mini Portable Speaker",
          price: "$120.00"
        }
      ]
    }
  ];
  

 
    const [isAnimationSetup, setIsAnimationSetup] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);
    const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      if (!isAnimationSetup) {
        gsap.registerPlugin(ScrollTrigger);
  
        const panels = gsap.utils.toArray('.main-sub-con');
  
        gsap.set(panels, {
          yPercent: (i) => (i ? 100 : 0)
        });
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.sections2',
            start: 'top top',
            end: () => `+=${100 * panels.length}%`,
            pin: true,
            scrub: 0.5,
            markers: false
          }
        });
  
        panels.forEach((panel, index) => {
          if (index) {
            tl.to(
              panel,
              {
                yPercent: -20,
                ease: 'none'
              },
              '+=0.25'
            );
          }
        });
  
        setIsAnimationSetup(true);
      }
  
      const handleResize = () => {
        const newIsSmallScreen = window.innerWidth <= 767;
        if (newIsSmallScreen !== isSmallScreen) {
          setIsSmallScreen(newIsSmallScreen);
          window.location.reload(); // Refresh the page whenever the screen size changes
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isAnimationSetup, isSmallScreen]); // Run effect when isAnimationSetup or isSmallScreen changes
  

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      window.addEventListener('scroll', () => {
        scrollContainer.scrollTop = window.pageYOffset;
      });
    }

    return () => {
      window.removeEventListener('scroll', () => {
        scrollContainer.scrollTop = window.pageYOffset;
      });
    };
  }, []);


  // const isSmallScreen = window.innerWidth <= 767; // Adjust the breakpoint as needed

  return (
    <div>
      <div style={{ width: '100%' }} className="sections2">
        <div style={{ width: '100%', justifyContent: 'space-between', margin: '0 auto' }} className="row">
          {isSmallScreen ? (
            // Small screen layout
            <div style={{ width: '100%',marginTop: '100px', }}>

<div style={{}} className="col-md-6">
                <div className="" style={{
                 
                }}>
                  <div style={{   width: '100%',height:"50vh" }} className="">
                    <div style={{ padding: 40, paddingLeft: 0 }} id="" className="" data-testid="richTextElement">
                      <h6 style={{ fontSize: '30px', fontWeight: 300, color: '#323232', fontFamily: 'sans-serif' }} className="">Premium Electronics <br className="" />
                        Selected By Experts</h6>
                    </div>
                    <p style={{ fontSize: 19, color:'#4b4b4b',fontWeight:'300',paddingTop:10 }}>Discover Our Collection</p>
                    <a style={{width:125,height:38,border:"1px solid #323232",borderRadius:70,padding:'10px 30px',marginBottom:20,marginTop:10,display:'block',textDecoration:'none',fontWeight:450,textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}} href='/AllProducts'>Shop All</a>
                  </div>
                  
                </div>
            
              </div>
              {/* <div style={{ width: '100%', padding: 0 }} className="col">
                <div style={{ position: 'relative', overflow: 'hidden' }} className="">
                  <div className="image-container" style={{ position: "relative", height: "100vh", overflowY: "scroll", scrollbarWidth: "thin", scrollbarhight: '1px', scrollbarColor: 'transparent transparent', WebkitOverflowScrolling: 'touch', overflowY: "hidden" }}>
                    <img
                      className="top-image"
                      style={{ top: 0, left: 0, width: "100%" }}
                      src="assets/Main_Image_01.jpeg"
                      alt=""
                    />
                    <img
                      className="bottom-image"
                      style={{ top: 0, left: 0, width: "100%" }}
                      src="assets/Main_Image_02.webp"
                      alt=""
                    />
                  </div>

                  <div className="main-sub3">
                    <p className="main-sub3-para">The Next Generation of Sound </p>
                    <a href='/Speakerhead' className="btn main-sub3-btn">Explore</a>
                  </div>
                </div>
              </div> */}

<div style={{ position: 'relative', zIndex: 1,  }} className="">
  {headlines.map((headline, index) => (
    <section style={{ width: '100%', height: '100%' }} key={index} className="stacking-slide">
      {headline.type === "image" && (
        <img style={{ width: '100%', height: '90vh', objectFit: 'cover' }} src={headline.image} alt="" />
      )}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', height: '100%', flexDirection: 'column' ,flex:1}}>
        {headline.type === "products" && (
          <div style={{ width: '100%', backgroundColor: 'white', position: 'relative', height: '100%', padding: 20, margin: '0 auto' ,zindex:1}} className="">
            <div style={{ fontSize: 25, fontWeight: 600, marginTop: 30 }}>New Arrivals</div>
            <div style={{ width: '100%', height: '100%', position: 'relative', margin: '0 auto', overflowY: 'auto' }}>
              {headline.items.map((item, idx) => (
                <div key={idx} className="product-item" style={{ position: 'relative',}}>
                  <div style={{ position: 'absolute', color: 'black',}} className="img-btn">SALE</div>
                  <img src={item.src} alt="" style={{ width: '100%', objectFit: 'cover' }} />
                  <div className="img-para" style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
     
      </div>
    </section>
  ))}
  
</div>


<div style={{position:'relative'}}>
<section className="bg-category">
        <div >
          <h1>Shop by Category</h1>
          <div className="row">
            {categories.map((category, index) => (
              <div className="col-md-4">
                <div className="main2-sub" key={index}>
                  <img style={{ width: '100%' }} src={`assets/img${index + 1}.webp`} alt="" />
                  <p className="main3-p">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      </div> 

              {/* Small screen content */}
            </div>
          ) : (
            // Larger screen layout
            <>
              <div style={{}} className="col-md-6">
                <div className="panels" style={{
                  overflow: 'hidden', position: 'relative', height: '100%', scrollbarWidth: "thin", scrollbarhight: '1px', scrollbarColor: 'transparent transparent',
                  WebkitOverflowScrolling: 'touch',
                }}>
                  <div style={{ position: 'absolute', marginTop: '150px', width: '100%' }} className="main-sub-con">
                    <div style={{ padding: 40, paddingLeft: 30 }} id="" className="" data-testid="richTextElement">
                      <h6 style={{ fontSize: '52px', fontWeight: 300, color: '#323232', fontFamily: 'sans-serif' }} className="">Premium Electronics <br className="" />
                        Selected By Experts</h6>
                    </div>
                    <p style={{ fontSize: 25, color: '' }} className="main-sub1-para2">Discover Our Collection</p>
                    <a href='/AllProducts' className="main-sub1-btn">Shop All</a>
                  </div>
                  <div style={{ width: '100%', position: 'absolute', backgroundColor: 'white',overflow:'scroll',height:'200vh', }} className="main-sub-con">
                    <div style={{height:'150vh',overflow:'scroll'}}>
                      <div className="div-arr">New Arrivals</div>
                      <Link to='Mobile' style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {items.map((item, index) => (
                          <div key={index} className="main-sub1-img">
                            <a className="img-btn absolute">SALE</a>
                            <img src={item.src} alt="" />
                            <div className="img-para">
                              <p>{item.title}</p>
                              <p>{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '100%', padding: 0 }} className="col">
                <div style={{ position: 'relative', overflow: 'hidden' }} className="">
                  <div ref={scrollContainerRef} className="image-container" style={{ position: "relative", height: "100vh", overflowY: "scroll", scrollbarWidth: "thin", scrollbarhight: '1px', scrollbarColor: 'transparent transparent', WebkitOverflowScrolling: 'touch', overflowY: "hidden" }}>
                    <img
                      className="top-image"
                      style={{ top: 0, left: 0, width: "100%"}}
                      src="assets/Main_Image_01.webp"
                      alt=""
                    />
                    <img
                      className="bottom-image"
                      style={{ top: 0, left: 0, width: "100%", height:'100%'}}
                      src="assets/Main_Image_02.webp"
                      alt=""
                    />
                  </div>

                  <div className="main-sub3">
                    <p className="main-sub3-para">The Next Generation of Sound </p>
                    <a href='/Speakerhead' className="btn main-sub3-btn">Explore</a>
                  </div>
                </div>
              </div>

<div style={{position:'relative'}}>
       <section className="bg-category">
        <div className="container">
          <h1>Shop by Category</h1>
          <div className="row">
            {categories.map((category, index) => (
              <div className="col-md-4">
                <div className="main2-sub" key={index}>
                  <img style={{ width: '100%' }} src={`assets/img${index + 1}.webp`} alt="" />
                  <p className="main3-p">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></div> 
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scroller;
