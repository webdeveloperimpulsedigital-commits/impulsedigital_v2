import{n as e}from"./rolldown-runtime-jpDsebLB.js";import{f as t,r as n}from"./vendor-BY6p9dv3.js";var r=e(t(),1),i=[{name:`Airoli`,slug:`airoli`,compName:`SeoAiroliLocation`,varName:`seoAiroliData`},{name:`Andheri`,slug:`andheri`,compName:`SeoAndheriLocation`,varName:`seoAndheriData`},{name:`Bandra`,slug:`bandra`,compName:`SeoBandraLocation`,varName:`seoBandraData`},{name:`Borivali`,slug:`borivali`,compName:`SeoBorivaliLocation`,varName:`seoBorivaliData`},{name:`Dadar`,slug:`dadar`,compName:`SeoDadarLocation`,varName:`seoDadarData`},{name:`Ghansoli`,slug:`ghansoli`,compName:`SeoGhansoliLocation`,varName:`seoGhansoliData`},{name:`Ghatkopar`,slug:`ghatkopar`,compName:`SeoGhatkoparLocation`,varName:`seoGhatkoparData`},{name:`Goregaon`,slug:`goregaon`,compName:`SeoGoregaonLocation`,varName:`seoGoregaonData`},{name:`Jogeshwari`,slug:`jogeshwari`,compName:`SeoJogeshwariLocation`,varName:`seoJogeshwariData`},{name:`Kandivali`,slug:`kandivali`,compName:`SeoKandivaliLocation`,varName:`seoKandivaliData`},{name:`Kharghar`,slug:`kharghar`,compName:`SeoKhargharLocation`,varName:`seoKhargharData`},{name:`Koparkhairane`,slug:`koparkhairane`,compName:`SeoKoparkhairaneLocation`,varName:`seoKoparkhairaneData`},{name:`Malad`,slug:`malad`,compName:`SeoMaladLocation`,varName:`seoMaladData`},{name:`Mansarovar`,slug:`mansarovar`,compName:`SeoMansarovarLocation`,varName:`seoMansarovarData`},{name:`Mira Road`,slug:`mira-road`,compName:`SeoMiraRoadLocation`,varName:`seoMiraRoadData`},{name:`Mulund`,slug:`mulund`,compName:`SeoMulundLocation`,varName:`seoMulundData`},{name:`Mumbai`,slug:`mumbai`,compName:`SeoMumbaiLocation`,varName:`seoMumbaiData`},{name:`Navi Mumbai`,slug:`navi-mumbai`,compName:`SeoNaviMumbaiLocation`,varName:`seoNaviMumbaiData`},{name:`Nerul`,slug:`nerul`,compName:`SeoNerulLocation`,varName:`seoNerulData`},{name:`Panvel`,slug:`panvel`,compName:`SeoPanvelLocation`,varName:`seoPanvelData`},{name:`Sanpada`,slug:`sanpada`,compName:`SeoSanpadaLocation`,varName:`seoSanpadaData`},{name:`Turbhe`,slug:`turbhe`,compName:`SeoTurbheLocation`,varName:`seoTurbheData`},{name:`Vashi`,slug:`vashi`,compName:`SeoVashiLocation`,varName:`seoVashiData`}],a=n(),o=({currentLocation:e})=>{let[t,n]=(0,r.useState)(!1),o=i.filter(t=>t.name!==e);return(0,a.jsxs)(`section`,{className:`svc-section`,style:{paddingBottom:`8rem`,position:`relative`},children:[(0,a.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`80%`,height:`60%`,background:`radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)`,zIndex:0,pointerEvents:`none`}}),(0,a.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:1},children:[(0,a.jsxs)(`h2`,{className:`svc-h2 split-text`,style:{fontSize:`clamp(2.5rem, 4vw, 4rem)`,marginBottom:`3.5rem`,textAlign:`center`},children:[`Explore More `,(0,a.jsx)(`span`,{style:{color:`var(--impulse-violet)`},children:`Locations`})]}),(0,a.jsx)(`style`,{children:`
          .loc-grid-container {
            position: relative;
          }
          
          .loc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          
          .loc-link-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem 2rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            color: var(--white);
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          /* Glowing border effect on hover */
          .loc-link-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(0,0,0,0) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 0;
          }
          
          .loc-link-card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .loc-link-card:hover {
            background: rgba(255, 255, 255, 0.04);
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(124, 58, 237, 0.15);
          }

          .loc-link-card:hover::before,
          .loc-link-card:hover::after {
            opacity: 1;
          }

          .loc-link-name {
            font-family: var(--font-heading);
            font-weight: 500;
            letter-spacing: 0.5px;
            font-size: 1.25rem;
            position: relative;
            z-index: 1;
            transition: color 0.3s ease;
          }

          .loc-link-card:hover .loc-link-name {
            color: #fff;
            text-shadow: 0 0 20px rgba(255,255,255,0.3);
          }

          .loc-link-icon {
            opacity: 0.5;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .loc-link-card:hover .loc-link-icon {
            opacity: 1;
            color: #fff;
            background: var(--impulse-violet);
            border-color: var(--impulse-violet);
            transform: translateX(5px) rotate(45deg);
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
          }

          .loc-show-more-btn {
            display: none; /* Hidden on desktop */
            margin: 3rem auto 0;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 30px;
            font-family: var(--font-heading);
            font-size: 1.1rem;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .loc-show-more-btn:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.4);
          }

          /* Mobile Logic */
          @media (max-width: 768px) {
            .loc-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            
            /* Only apply hiding logic when not expanded */
            .loc-grid:not(.expanded) .loc-link-card:nth-child(n+6) {
              display: none;
            }

            .loc-show-more-btn {
              display: block; /* Show the button on mobile */
            }
            
            /* Add a subtle fade gradient over the bottom when collapsed to hint at more content */
            .loc-grid-container:not(.expanded)::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 100px;
              background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
              pointer-events: none;
              border-radius: 20px;
            }
          }
        `}),(0,a.jsxs)(`div`,{className:`loc-grid-container ${t?`expanded`:``}`,children:[(0,a.jsx)(`div`,{className:`loc-grid ${t?`expanded`:``}`,children:o.map(e=>(0,a.jsxs)(`a`,{href:`/brand-infrastructure/search-engine-optimisation/${e.slug}/`,className:`loc-link-card`,"data-cursor":`VIEW`,children:[(0,a.jsx)(`span`,{className:`loc-link-name`,children:e.name}),(0,a.jsx)(`span`,{className:`loc-link-icon`,children:(0,a.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,a.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,a.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})})]},e.slug))}),(0,a.jsx)(`button`,{className:`loc-show-more-btn`,onClick:()=>n(!t),children:t?`Show Less`:`View All Locations`})]})]})]})};export{o as t};