import{n as e}from"./rolldown-runtime-jpDsebLB.js";import{f as t,l as n,r,t as i}from"./vendor-BY6p9dv3.js";var a=e(t(),1),o=r(),s=[{client:`Aditya Birla Group`,subNames:[`ABG × Brut India`,`Fours for Good`,`ABG × KBC`],subSlugs:[`/case-studies/abg-brut-india`,`/case-studies/fours-for-good`,`/case-studies/abg-kbc`],title:`Brand Campaigns`,category:`Brand Campaigns`,description:`Three high-impact campaigns — a Brut India collaboration, cricket-driven social impact, and KBC-led purpose storytelling.`,images:[`/case studies/Written Content/ABG x Brut India/ABG Brut India Title.png`,`/case studies/Written Content/Fours for good/Fours for good title.png`,`/case studies/Written Content/ABG x KBC/ABG x KBC Title.png`],slug:`/case-studies/abg-brut-india`},{client:`Automag`,subNames:[`Automag India SEO`,`Bajaj Auto Film`],subSlugs:[`/case-studies/automag-india`,`/case-studies/automag-bajaj-auto`],title:`SEO & Brand Film`,category:`SEO`,description:`B2B SEO that turned 1–2 leads a month into 45+, and a brand film for Bajaj Auto.`,images:[`/case studies/Written Content/Automag India/Automag SEO/Automag Title.jpg`,`/case studies/Written Content/Automag India/Automag x Bajaj Auto title.png`],slug:`/case-studies/automag-india`},{client:`Qure.ai`,title:`Healthcare AI SEO`,category:`SEO`,description:`Rebuilt Qure.ai’s US SEO structure from a one-page presence into a search-led system.`,images:[`/case studies/Written Content/Qure.ai/QureAI Title.png`],slug:`/case-studies/qure-ai`},{client:`Mastercard`,title:`Merchant Outreach`,category:`Outreach`,description:`90.9% merchant response rate through an AI-led WhatsApp cluster-head outreach strategy.`,images:[`/case studies/Written Content/Mastercard/Mastercard Title.png`],slug:`/case-studies/mastercard`},{client:`Dmart`,title:`Digital Retail Transformation`,category:`Growth Intelligence`,description:`13.43 lakh unique reach and 53K clicks that drove measurable in-store footfall at scale.`,images:[`/case studies/Written Content/Dmart/Dmart Title.png`],slug:`/case-studies/dmart`},{client:`Uppercase`,title:`Sustainable Luggage`,category:`AI Marketing Systems`,description:`A complete brand film produced entirely with generative AI—script, visuals, voice, and edit.`,images:[`/case studies/Written Content/Uppercase/Uppercase Title.png`],slug:`/case-studies/uppercase`},{client:`HUL`,title:`Consumer Centricity`,category:`Growth Intelligence`,description:`Geo-targeted digital coupon campaign delivering 90% higher CTR and 12,548 landing page sessions.`,images:[`/case studies/Written Content/HUL 1/HUL 1 Title.png`],slug:`/case-studies/hul`},{client:`Laljee Godhoo`,title:`LG Hing Diwali Campaign`,category:`Purpose-Led Campaign`,description:`Celebrating the women who make Diwali feel alive for a heritage food brand.`,images:[`/case studies/Written Content/LG/LG title.png`],slug:`/case-studies/lg-hing`},{client:`ElectroMech`,title:`Website & SEO`,category:`Growth Intelligence`,description:`Rebuilding digital visibility to capture verified global B2B leads.`,images:[`/case studies/Written Content/ElectroMech/ElectroMech title.png`],slug:`/case-studies/electromech`}],c=({study:e,isReady:t})=>{let[r,i]=(0,a.useState)(0),s=(0,a.useRef)(null),c=n(),l=e=>{if(i(e),s.current){let t=s.current.children[e];if(t){let e=t.offsetLeft-s.current.offsetLeft;s.current.scrollTo({left:e,behavior:`smooth`})}}},u=(t,n)=>{t.stopPropagation(),t.preventDefault(),r!==n&&l(n),e.subSlugs&&e.subSlugs[n]?c(e.subSlugs[n]):e.slug&&c(e.slug)},d=(t,n)=>{t.stopPropagation(),t.preventDefault(),e.subSlugs&&e.subSlugs[n]?c(e.subSlugs[n]):e.slug&&c(e.slug)},f=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`div`,{className:`work-list-left`,children:(0,o.jsx)(`h2`,{className:`work-list-title`,style:{textTransform:`uppercase`,display:`flex`,flexDirection:`column`,gap:`0.5rem`,alignItems:`flex-start`},children:(e.subNames&&e.subNames.length>0?e.subNames:[e.client]).map((e,t)=>(0,o.jsx)(`span`,{onMouseEnter:()=>l(t),onClick:e=>u(e,t),style:{color:r===t?`#ffffff`:`rgba(255,255,255,0.3)`,fontSize:r===t?`1em`:`0.55em`,fontWeight:r===t?800:500,opacity:r===t?1:.6,transition:`all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,cursor:`pointer`,transformOrigin:`left center`},children:e},t))})}),(0,o.jsx)(`div`,{className:`work-list-right`,children:(0,o.jsx)(`div`,{className:`work-list-gallery`,ref:s,children:e.images.map((t,n)=>(0,o.jsx)(`div`,{className:`work-list-slide-wrapper`,onClick:e=>d(e,n),style:{cursor:`pointer`},children:(0,o.jsx)(`img`,{className:`work-list-slide`,src:`/${t.replace(/^\//,``)}`,alt:`${e.client} Digital Marketing Campaign Case Study by Impulse Digital - Slide ${n+1}`})},n))})})]});return t?(0,o.jsx)(`div`,{onClick:()=>c(e.slug||`#`),className:`work-list-item`,style:{textDecoration:`none`,color:`inherit`,display:`flex`,cursor:`pointer`},children:f}):(0,o.jsx)(`div`,{className:`work-list-item pending-case-study`,style:{display:`flex`,cursor:`default`},children:f})},l=()=>{let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{document.body.classList.add(`work-page`),document.body.classList.add(`service-page`);let{gsap:t,ScrollTrigger:n}=window;if(t&&n&&e.current){let r=e.current.querySelector(`.work-hero-title`),i=e.current.querySelector(`.work-hero-desc`);if(r&&i&&window.SplitType){r.style.visibility=`visible`,i.style.visibility=`visible`;let e=new window.SplitType(r,{types:`lines,words`});e.lines?.forEach(e=>{let t=document.createElement(`div`);t.classList.add(`line-wrapper`),e.parentNode?.insertBefore(t,e),t.appendChild(e)});let n=new window.SplitType(i,{types:`lines`});n.lines?.forEach(e=>{let t=document.createElement(`div`);t.classList.add(`line-wrapper`),e.parentNode?.insertBefore(t,e),t.appendChild(e)}),t.timeline({delay:.2}).fromTo(e.lines,{y:100,opacity:0,rotateX:-20},{y:0,opacity:1,rotateX:0,duration:1.2,stagger:.15,ease:`power4.out`}).fromTo(n.lines,{y:50,opacity:0},{y:0,opacity:1,duration:1,stagger:.1,ease:`power3.out`},`-=0.8`);let a=document.querySelector(`.work-list-section`);a&&(t.to(document.body,{backgroundColor:`#000000`,scrollTrigger:{trigger:a,start:`top 60%`,end:`top 10%`,scrub:!0}}),window.particlesMaterial&&t.fromTo(window.particlesMaterial,{opacity:.6},{opacity:0,scrollTrigger:{trigger:a,start:`top 60%`,end:`top 10%`,scrub:!0}}))}e.current.querySelectorAll(`.work-list-separator`).forEach(e=>{n.create({trigger:e,start:`top 95%`,onEnter:()=>e.classList.add(`active`),once:!0})}),n.refresh()}return()=>{document.body.classList.remove(`work-page`),document.body.classList.remove(`service-page`),t.to(document.body,{backgroundColor:`#020018`,duration:0}),window.particlesMaterial&&t.to(window.particlesMaterial,{opacity:.6,duration:0}),n.getAll().forEach(e=>e.kill())}},[]),(0,o.jsxs)(`main`,{id:`main-content`,className:`work-wrapper`,ref:e,children:[(0,o.jsxs)(i,{children:[(0,o.jsx)(`title`,{children:`Case Studies | Impulse Digital`}),(0,o.jsx)(`link`,{rel:`canonical`,href:`https://www.theimpulsedigital.com/case-studies/`})]}),(0,o.jsx)(`section`,{className:`work-hero`,children:(0,o.jsx)(`div`,{className:`work-container`,children:(0,o.jsxs)(`div`,{className:`work-hero-content`,children:[(0,o.jsxs)(`h1`,{className:`work-hero-title`,style:{visibility:`hidden`},children:[`Case `,(0,o.jsx)(`span`,{style:{color:`#aa3bff`},children:`Studies.`})]}),(0,o.jsx)(`p`,{className:`work-hero-desc`,style:{visibility:`hidden`},children:`Discover how we build brand infrastructure and engineer growth for the world's most ambitious companies.`})]})})}),(0,o.jsx)(`section`,{className:`work-list-section`,children:(0,o.jsx)(`div`,{className:`work-container`,children:(0,o.jsx)(`div`,{className:`work-list`,children:s.map((e,t)=>(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(c,{study:e,isReady:!0}),t<s.length-1&&(0,o.jsx)(`div`,{className:`work-list-separator`})]},t))})})}),(0,o.jsx)(`style`,{children:`
        .work-wrapper {
          color: #fff;
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding-bottom: 12rem;
        }

        .work-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        /* Hero */
        .work-hero {
          padding-top: 14rem;
          padding-bottom: 6rem;
          text-align: center;
        }

        .work-hero-content {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .work-hero-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(3.5rem, 8vw, 8rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.95;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .work-hero-desc {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
          max-width: 800px;
          font-weight: 300;
        }

        /* List Layout */
        .work-list-section {
          padding: 8rem 0;
          background-color: transparent;
          color: #ffffff;
        }

        .work-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .work-list-separator {
          width: 100%;
          height: 1px;
          background: rgba(138, 92, 246, 0.8);
          box-shadow: 0 0 15px rgba(138, 92, 246, 0.6);
          margin: 0;
          display: block;
        }

        .work-list-item {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
          width: 100%;
        }

        /* Left Side */
        .work-list-left {
          flex: 0 0 25%;
          display: flex;
          flex-direction: column;
        }



        .work-list-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        /* Right Side Image */
        .work-list-right {
          flex: 1;
          width: 100%;
          min-width: 0;
          position: relative;
        }

        .work-list-gallery {
          display: flex;
          gap: 0.5rem;
          width: calc(100% + 4vw + max(0px, (100vw - 1600px) / 2));
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
        }
        
        .work-list-gallery::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .work-list-slide-wrapper {
          flex: 0 0 calc((100% - 0.5rem) / 1.5);
          scroll-snap-align: start;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: visible;
          transition: transform 0.3s ease;
        }
        
        .work-list-slide-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid transparent;
          pointer-events: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .work-list-slide-wrapper:hover {
          transform: translateY(-1px);
        }

        .work-list-slide-wrapper:hover::after {
          border-color: rgba(138, 92, 246, 1);
          box-shadow: 0 0 20px rgba(138, 92, 246, 0.6), inset 0 0 12px rgba(138, 92, 246, 0.3);
        }

        .work-list-slide {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .work-list-item {
            flex-direction: column;
            gap: 2rem;
          }
          .work-list-left {
            flex: 1;
            width: 100%;
          }
          .work-list-slide-wrapper {
            flex: 0 0 100%;
          }
        }

        @media (max-width: 768px) {
          .work-hero {
            padding-top: 10rem;
            padding-bottom: 4rem;
          }
          .work-hero-title {
            font-size: clamp(3rem, 15vw, 4.5rem);
            margin-bottom: 1.5rem;
          }
          .work-list-section {
            padding: 4rem 0;
          }
        }
      `})]})};export{l as default};